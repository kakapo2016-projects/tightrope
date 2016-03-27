var photo = require('../data/seed-photos')

exports.seed = function (knex, Promise) {
  var photoPromises = []
  photo.forEach(function (photo) {
    photoPromises.push(createPhoto(knex, photo))
  })
  return Promise.all(photoPromises)
}

function createPhoto (knex, photo) {
  return knex.table('photos')
    .insert(photo)
}
