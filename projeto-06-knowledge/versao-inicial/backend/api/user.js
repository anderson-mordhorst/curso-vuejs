const bcrypt = require('bcrypt-nodejs');

module.exports = app => {
    const { existsOrError, notExistsOrError, equalsOrError } = app.api.validation;

    const encryptPassword = password => {
        const salt = bcrypt.genSaltSync(10);
        return bcrypt.hashSync(password, salt);
    };

    const save = async(request, response) => {
        const user = { ...request.body };        
        if(request.params.id) {
            user.id = request.params.id;
        }

        // caso o usuário seja cadastrado pelo signup
        if(!request.originalUrl.startsWith('/users')){
            user.admin = false;
        }

        // essa validação foi adicionada no curso mas não faz sentido, visto que somente admin acessa a url /users
        if(!request.user || !request.user.admin){
            user.admin = false;
        }

        try{
            existsOrError(user.name, 'Nome não informado');
            existsOrError(user.email, 'E-mail não informado');
            existsOrError(user.password, 'Senha não informado');
            existsOrError(user.confirmPassword, 'Confirmação de senha não informada');
            equalsOrError(user.password, user.confirmPassword, 'Senhas não conferem');

            const userFromDB = await app.db('users').where({ email: user.email }).first();
            if(!user.id) {
                notExistsOrError(userFromDB, 'Usuário já cadastrado');
            }
        }
        catch(message) {
            return response.status(400).send(message);
        }

        user.password = encryptPassword(user.password);
        delete user.confirmPassword;

        if(user.id) {
            app.db('users')
                .update(user)
                .where({ id: user.id })
                .whereNull('deletedAt')
                .then(_ => response.status(204).send())
                .catch(error => response.status(500).send(error));
        } else {
            app.db('users')
                .insert(user)
                .then(_ => response.status(204).send())
                .catch(error => response.status(500).send(error));            
        }
    };

    const get = (request, response) => {
        app.db('users')
            .select('id', 'name', 'email', 'admin')
            .whereNull('deletedAt')
            .then(users => response.json(users))
            .catch(error => response.status(500).send(error));
    };

    const getById = (request, response) => {
        app.db('users')
            .select('id', 'name', 'email', 'admin')
            .where({id: request.params.id})
            .whereNull('deletedAt')
            .first()
            .then(user => response.json(user))
            .catch(error => response.status(500).send(error));
    };

    const remove = async (request, response) => {
        try{
            const articles = await app.db('articles').where({ userId: request.params.id });
            notExistsOrError(articles, 'Usuário possui artigos');

            const rowsUpdated = await app.db('users')
                .update({ deletedAt: new Date() })
                .where({ id: request.params.id });

            existsOrError(rowsUpdated, 'Usuário não foi encontrado');
            response.status(204).send();
        }
        catch(message) {
            response.status(400).send(message);
        }
    };

    return {
        save, get, getById, remove
    };
};