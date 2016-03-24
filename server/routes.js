module.exports = function (app) {
  // ----- initial test routes ----- //

  app.get('/', function (req, res) {
    res.send('Hello there, whats up? Hello. Hi hi')
  })

  app.get('/test', function (req, res) {
    res.send('Test. Check...1...2...')
  })
}
