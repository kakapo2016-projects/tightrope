var badge = require('../data/seed-badges')

exports.seed = function (knex, Promise) {
  var badgePromises = []
  badge.forEach(function (donor) {
    badgePromises.push(createBadge(knex, badge))
  })
  return Promise.all(badgePromises)
}

function createBadge (knex, badge) {
  return knex.table('badges')
    .insert(badge)
}
