//adding new table likes_table:
exports.up = function(knex, Promise) {
  return knex.schema.createTable("likes_table", (table) => {
    table.increments("id").primary()
    table.string("like")
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("likes_table")
};
