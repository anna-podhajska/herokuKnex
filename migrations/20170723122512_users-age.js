//adding age column to users:
exports.up = function(knex, Promise) {
  return knex.schema.table('users', function(table) {
    table.integer("age")
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('users', (table) => {
    table.dropColumn("age")
  })
};
