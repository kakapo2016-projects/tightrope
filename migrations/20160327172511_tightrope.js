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
      table.timestamp('created_at').defaultTo(knex.fn.now())
    }),

    knex.schema.createTable('photos', function (table) {
      table.increments('photo_id').primary()
      table.string('external_photo_id')
      table.integer('user_id')
      table.integer('likes')
      table.binary('photo')
      table.string('photo_url')
      table.string('caption')
      table.timestamp('created_at').defaultTo(knex.fn.now())
    }),

    knex.schema.createTable('fans', function (table) {
      table.increments('fanship_id').primary()
      table.integer('user_id_a')
      table.integer('user_id_b')
      table.string('comment')
      table.timestamp('created_at').defaultTo(knex.fn.now())
    }),

    knex.schema.createTable('comments', function (table) {
      table.increments('comment_id').primary()
      table.integer('photo_id')
      table.integer('user_id')
      table.string('comment')
      table.timestamp('created_at').defaultTo(knex.fn.now())
    }),

    knex.schema.createTable('badges', function (table) {
      table.increments('badge_id').primary()
      table.integer('user_id')
      table.string('badge')
      table.timestamp('created_at').defaultTo(knex.fn.now())
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
