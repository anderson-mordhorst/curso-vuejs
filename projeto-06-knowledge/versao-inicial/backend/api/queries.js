module.exports = {
    categoryWithChildren: `
        WITH RECURSIVE subcategories (id) AS (
            SELECT id FROM categories WHERE id = ?
            UNION ALL
            select c.id FROM subcategories, categories c
            WHERE "parentId" = subcategories.id
        )
        SELECT id FROM subcategories
    `,
};