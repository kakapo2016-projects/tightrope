var moment = require('moment')
module.exports = [
  { username: 'jason', hashed_password: 'jason', email: 'jason@tightrope.io', profile_pic: 'http://placekitten.com/200/300', credits: 100000000, active_streak: 10000, doa: moment().add(1, 'days'),  created_at: moment(), updated_at: moment() },
  { username: 'admin', hashed_password: 'admin', email: 'admin@tightrope.io', profile_pic: 'http://placekitten.com/200/300', credits: 0, active_streak: 0, doa: moment().add(1, 'days'), created_at: moment(), updated_at: moment() },
  { username: 'nick', hashed_password: 'nick', email: 'nick@tightrope.io', profile_pic: 'http://placekitten.com/200/300', credits: 9, active_streak: 1, doa: moment().add(1, 'days'), created_at: moment(), updated_at: moment() },
  { username: 'test', hashed_password: '$2a$10$1wj8y9QOrlqZ0imw3x5fn.b.2MZ98PmRrhLR7K7QC3Frl6iqr06OG', email: 'test@test', profile_pic: 'http://fillmurray.com/800/800', credits: 9, active_streak: 32, doa: moment().add(1, 'days'), created_at: moment(), updated_at: moment() }
]
