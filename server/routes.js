module.exports = function (app) {
  // ----- dummy data for testing ----- //
  const dummy = {
    username: 'simon lenovo tegg',
    profile_pic: 'http://rack.2.mshcdn.com/media/ZgkyMDE1LzEwLzE2Lzk4L2NhdG1vdXRoLmQyOWFiLnBuZwpwCXRodW1iCTk1MHg1MzQjCmUJanBn/ee79f012/f77/cat-mouth.jpg',
    accolades: [],
    all_user_photos: []
  }

  // ----- initial test routes ----- //

  app.get('/', function (req, res) {
    res.send('Hello there, whats up? Hello. Hi hi')
  })
  app.get('/test', function (req, res) {
    res.send('Test. Check...1...2...')
  })
  app.get('/api/v1/profile/:id', function (req, res) {
    res.json(dummy)
  })
}
