// adding new table with users and their likes, many to many:
exports.up = function(knex, Promise) {
  return knex.schema.createTable("users_likes", (table) => {
    table.increments("id").primary()
    table.integer("users_id")
    table.integer("likes_id")
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("users_likes")
};
