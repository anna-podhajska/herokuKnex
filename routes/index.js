var express = require('express')
var router = express.Router()

var db = require('../db')

// router.get('/', function (req, res) {
//   db.getUsers(req.app.get('connection'))
//     .then(function (users) {
//       res.render('index', { users: users })
//     })
//     .catch(function (err) {
//       res.status(500).send('DATABASE ERROR: ' + err.message)
//     })
// })

router.get("/", function(req, res) {
  db.getUsers(req.app.get('connection'))
    .then(function(users) {
      var data = {users: users}
      db.getLikes(req.app.get('connection'))
        .then(function(likes) {
          data.likes = likes
          res.render("index", data)
        })
    })
})

router.get("/userDetails/:id", function(req, res) {
  var connection = req.app.get('connection')
  var user_id = req.params.id
  connection('users')
    .where("users.id", user_id)
    .where("isDeleted", false)
    .then(function(users_array) {

      var user = users_array[0]

      connection("users_likes")
        .join("likes_table", "users_likes.likes_id", "=", "likes_table.id")
        .where("users_likes.users_id", user_id)
        .then(function(userLikesArray) {
          user.userLikes = userLikesArray
          console.log(user);
          res.render("userDetails", user)
        })
    })
})

//receiving delete user post
router.post("/deleteUser/:id", function (req, res) {
  var id = req.params.id
  var connection = req.app.get('connection')
  connection("users")
    .update({isDeleted: true})
    .where("users.id", id)
    .then(function() {
      res.redirect("/")
    })
})

//adding a new user
router.get("/addUser", function(req, res) {
  res.render("addUser")
})
  router.post("/addUser", function (req, res) {

    var newUser = {name:req.body.name, email:req.body.email, age: req.body.age}
    var like = req.body.like //passing like's id

    var connection = req.app.get('connection')
    connection("users")
      .insert(newUser)
      .then(function(newUserId) {
        var newUserLike = {users_id: newUserId[0], likes_id: like}
        console.log(newUserLike);
        connection("users_likes")
          .insert(newUserLike)
          .then(function() {
            res.redirect("/")
          })
    })
  })

//all users liking the same thing
router.get("/likesUsers/:likeId", function(req, res) {
  var connection = req.app.get('connection')
  var likeId = req.params.likeId

  connection('likes_table')
    .where("id", likeId).select("like").first()
    .then(function(likeName) {

      connection("users")
      .join("users_likes", "users.id", "=", "users_id")
      .where("likes_id", likeId)
      .where("isDeleted", false)
      .select("name", "email")
      .then(function(users) {
        res.render("likesUsers", {joinedUserLikes: users, like: likeName.like})
      })
    })
})

//all users and all their likes:
router.get("/usersLikes", (req, res) => {
  var connection = req.app.get('connection')
  connection("users")
    .where("isDeleted", false)
    .join("users_likes", "users.id", "=", "users_id")
    .join("likes_table", "likes_id", "=", "likes_table.id")
    .select("name", "like", "email")
    .then(function(users) {
      res.render("usersLikes", {joinedUserLikes: users})
    })
} )

module.exports = router
