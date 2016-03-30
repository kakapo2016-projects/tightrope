var fan = require('../data/seed-fans')

exports.seed = function (knex, Promise) {
  var fanPromises = []
  fan.forEach(function (fan) {
    fanPromises.push(createFan(knex, fan))
  })
  return Promise.all(fanPromises)
}

function createFan (knex, fan) {
  return knex.table('fans')
    .insert(fan)
}
