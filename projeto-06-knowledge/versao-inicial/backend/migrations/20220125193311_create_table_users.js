
// upgrade do sistema (versões mais recentes)
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', table => {
        table.increments('id').primary();
        table.string('name').notNull();
        table.string('email').notNull().unique();
        table.string('password').notNull();
        table.boolean('admin').notNull().defaultTo(false);
    });
};

// downgrade do sistema (versões mais antigas)
exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users');
};
