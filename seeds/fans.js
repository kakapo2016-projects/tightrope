var fan = require('../data/seed-fans')

exports.seed = function (knex, Promise) {
  var fanPromises = []

  fan.forEach(function (fan) {
    fanPromises.push(createfan(knex, fan))
  })

  return Promise.all(fanPromises)
}

function createfan (knex, fan) {
  return knex.table('fans')
    .insert(fan)
}
