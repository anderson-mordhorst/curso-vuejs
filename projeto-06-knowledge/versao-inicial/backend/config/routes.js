module.exports = app => {
    app.route('/users')
        .post(app.api.user.save); // o método save estará injetado dentro de app pelo consign
};