module.exports = app => {
    app.route('/users')
        .post(app.api.user.save) // o método save estará injetado dentro de app pelo consign
        .get(app.api.user.get);

    app.route('/users/:id')
        .put(app.api.user.save)
        .get(app.api.user.getById);
};