const queries = require('./queries.js');

module.exports = app => {
    const { existsOrError } = app.api.validation;

    const save = (request, response) => {
        const article = { ...request.body };
        if(request.params.id) {
            article.id = request.params.id;
        }

        try{
            existsOrError(article.name, 'Nome não informado');
            existsOrError(article.description, 'Descrição não informada');
            existsOrError(article.categoryId, 'Categoria não informada');
            existsOrError(article.userId, 'Autor não informado');
            existsOrError(article.content, 'Conteúdo não informado');
        }
        catch(message) {
            return response.status(400).send(message);
        }

        if(article.id) {
            app.db('articles')
                .update(article)
                .where({ id: article.id })
                .then(_ => response.status(204).send())
                .catch(error => response.status(500).send(error));

        } 
        else {
            app.db('articles')
                .insert(article)
                .then(_ => response.status(204).send())
                .catch(error => response.status(500).send(error));
        }        
    };

    const remove = async (request, response) => {
        try{
            const rowsDeleted = await app.db('articles').where({ id: request.params.id }).del();
            try {
                existsOrError(rowsDeleted, 'Artigo não encontrado');
            }
            catch(message) {
                return response.status(400).send(message);
            }

            response.status(204).send();
        }
        catch(message) {
            response.status(500).send(message);
        }
    };

    const limit = 10;

    const get = async (request, response) => {
        const page = request.query.page || 1;
        const result = await app.db('articles').count('id').first();
        const count = parseInt(result.count);

        app.db('articles')
            .select('id', 'name', 'description')
            .limit(limit)
            .offset(page * limit - limit)
            .then(articles => response.json({ data: articles, count, limit }))
            .catch(error => response.status(500).send(error));
    };

    const getById = (request, response) => {
        app.db('articles')
            .where({ id: request.params.id })
            .first()
            .then(article => {
                article.content = article.content.toString();
                return response.json(article);
            })
            .catch(error => response.status(500).send(error));
    };

    const getByCategory = async (request, response) => {
        const categoryId = request.params.id;
        const page = request.params.page || 1;
        const categories = await app.db.raw(queries.categoryWithChildren, categoryId);
        const ids = categories.rows.map(category => category.id);

        app.db({a: 'articles', u: 'users'})
            .select('a.id', 'a.name', 'a.description', 'a.imageUrl', { author: 'u.name' })
            .limit(limit)
            .offset(page * limit - limit)
            .whereRaw('?? = ??', ['u.id', 'a.userId'])
            .whereIn('categoryId', ids)
            .orderBy('a.id', 'desc')
            .then(articles => response.json(articles))
            .catch(error => response.status(500).send(error))
    };

    return {
        save, remove, get, getById, getByCategory
    };
}