//table merging users and their likes

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users_likes').del()
    .then(function () {
      // Inserts seed entries
      return knex('users_likes').insert([
        {id: 1, users_id: 99901, likes_id: 1},
        {id: 2, users_id: 99901, likes_id: 2},
        {id: 3, users_id: 99902, likes_id: 3},
        {id: 4, users_id: 99902, likes_id: 4},
        {id: 5, users_id: 99903, likes_id: 5},
        {id: 6, users_id: 99903, likes_id: 3},
        {id: 7, users_id: 99904, likes_id: 4},
        {id: 8, users_id: 99905, likes_id: 5},
        {id: 9, users_id: 99906, likes_id: 6},
        {id: 10, users_id: 99907, likes_id: 2},
        {id: 11, users_id: 99908, likes_id: 2},
        {id: 12, users_id: 99909, likes_id: 2},
        {id: 13, users_id: 99910, likes_id: 4},
        {id: 14, users_id: 99911, likes_id: 4},
        {id: 15, users_id: 99912, likes_id: 4},
        {id: 16, users_id: 99913, likes_id: 5},
        {id: 17, users_id: 99914, likes_id: 5},
        {id: 18, users_id: 99915, likes_id: 1},
        {id: 19, users_id: 99916, likes_id: 1},
        {id: 20, users_id: 99917, likes_id: 2},
        {id: 21, users_id: 99918, likes_id: 1},
        {id: 22, users_id: 99919, likes_id: 1},
        {id: 23, users_id: 99920, likes_id: 5},
        {id: 24, users_id: 99921, likes_id: 6},
        {id: 25, users_id: 99922, likes_id: 4},
        {id: 26, users_id: 99923, likes_id: 3},
        {id: 27, users_id: 99924, likes_id: 2},
        {id: 28, users_id: 99924, likes_id: 3},
        {id: 29, users_id: 99924, likes_id: 4},
        {id: 30, users_id: 99924, likes_id: 5},
        {id: 31, users_id: 99925, likes_id: 1},
        {id: 32, users_id: 99926, likes_id: 2},
        {id: 33, users_id: 99926, likes_id: 3},
      ]);
    });
};
