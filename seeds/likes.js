
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('likes_table').del()
    .then(function () {
      // Inserts seed entries
      return knex('likes_table').insert([
        {id: 1, like: 'fast cars'},
        {id: 2, like: 'knitting'},
        {id: 3, like: 'whisky'},
        {id: 4, like: 'watching tv'},
        {id: 5, like: 'diving'},
        {id: 6, like: 'thai food'},
      ]);
    });
};
