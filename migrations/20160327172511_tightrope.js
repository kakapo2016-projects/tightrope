exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTable('users', function (table) {
      table.increments('user_id').primary()
      table.string('username').unique()
      table.string('hashed_password')
      table.string('email').unique()
      table.string('profile_pic')
      table.integer('credits')
      table.integer('active_streak')
      table.timestamp('doa')
      table.timestamps()
    }),

    knex.schema.createTable('photos', function (table) {
      table.increments('photo_id').primary()
      table.string('external_photo_id')
      table.integer('user_id')
      table.integer('likes')
      table.binary('photo')
      table.string('photo_url')
      table.string('caption')
      table.integer('comments')
      table.timestamps()
    }),

    knex.schema.createTable('fans', function (table) {
<<<<<<< HEAD
<<<<<<< HEAD
      table.increments('fanship_id').primary()
      table.integer('user_id_a')
      table.integer('user_id_b')
      table.string('comment')
      table.timestamps()
=======
=======
>>>>>>> ef422694437efdc7f80c1c298885caac87a10775
      table.integer('liker_id').references('users.user_id')
      table.integer('liked_id').references('users.user_id')
      table.timestamp('created_at').defaultTo(knex.fn.now())
      table.primary(['liker_id', 'liked_id'])
<<<<<<< HEAD
>>>>>>> 4b3010b233ddf5d68fe3e0f9774e8d0a1b4fe113
=======
>>>>>>> ef422694437efdc7f80c1c298885caac87a10775
    }),

    knex.schema.createTable('comments', function (table) {
      table.increments('comment_id').primary()
      table.integer('photo_id')
      table.integer('user_id')
      table.string('comment')
      table.timestamps()
    }),

    knex.schema.createTable('badges', function (table) {
      table.increments('badge_id').primary()
      table.integer('user_id')
      table.string('badge')
      table.timestamps()
    })
  ])
}

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('users'),
    knex.schema.dropTable('photos'),
    knex.schema.dropTable('fans'),
    knex.schema.dropTable('comments'),
    knex.schema.dropTable('badges')
  ])
}
