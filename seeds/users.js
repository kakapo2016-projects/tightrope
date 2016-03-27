var user = require('../data/seed-users')

exports.seed = function (knex, Promise) {
  var userPromises = []
  user.forEach(function (user) {
    userPromises.push(createUser(knex, user))
  })
  return Promise.all(userPromises)
}

function createUser (knex, user) {
  return knex.table('users')
    .insert(user)
}
