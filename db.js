
module.exports = {
  getUser: getUser,
  getUsers: getUsers,
  getLikes: getLikes
}

function getUsers (connection) {
  return connection('users').where("isDeleted", false).select()
}

function getUser (id, connection) {
  return connection('users').where('id', id).where("isDeleted", false)
}

function getLikes (connection) {
  return connection('likes_table').select()
}
