module.exports = app => {
    const { existsOrError, notExistsOrError } = app.api.validation;
    
    const save = (request, response) => {
        const category = { ...request.body };
        if (request.params.id) {
            category.id = request.params.id;
        }

        try{
            existsOrError(category.name, 'Nome não informado');
        }
        catch(message) {
            return response.status(400).send(message);
        }

        if(category.id) {
            app.db('categories')
                .update(category)
                .where({ id: category.id })
                .then(_ => response.status(204).send())
                .catch(error => response.status(500).send(error));

        } 
        else {
            app.db('categories')
                .insert(category)
                .then(_ => response.status(204).send())
                .catch(error => response.status(500).send(error));            
        }
    };

    const remove = async (request, response) => {
        try {
            existsOrError(request.params.id, 'Código da categoria não informado');
            const subcategory = await app.db('categories')
                .where({ parentId: request.params.id });

            notExistsOrError(subcategory, 'Categoria possui subcategorias');

            const articles = await app.db('articles')
                .where({ categoryId: request.params.id });

            notExistsOrError(articles, 'Categoria possui artigos');

            const rowsDeleted = await app.db('categories')
                .where({ id: request.params.id })
                .del();

            existsOrError(rowsDeleted, 'Categoria não encontrada');

            response.status(204).send();
        }
        catch(message){
            response.status(400).send(message);     
        }
    };

    const withPath = categories => {
        const getParent = (categories, parentId) => {
            const parent = categories.filter(parent => parent.id === parentId);
            return parent.length ? parent[0] : null;
        };

        const categoriesWithPath = categories.map(category => {
            let path = category.name;
            let parent = getParent(categories, category.parentId);

            while(parent) {
                path = `${parent.name} > ${path}`;
                parent = getParent(categories, parent.parentId);
            }

            return { ...category, path };
        });

        categoriesWithPath.sort((a, b) => {
            if(a.path < b.path) return -1;
            if(a.path > b.path) return 1;
            return 0;
        });

        return categoriesWithPath;
    };

    const get = (request, response) => {
        app.db('categories')
            .then(categories => response.json(withPath(categories)))
            .catch(error => response.status(500).send(error));
    };

    const getById = (request, response) => {
        app.db('categories')
            .where({ id: request.params.id })
            .first()
            .then(category => response.json(category))
            .catch(error => response.status(500).send(error));
    };    


    return {
        save, remove, get, getById
    };
}