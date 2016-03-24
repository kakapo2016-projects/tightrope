module.exports = function (app) {
  app.get('/', function (req, res) {
    res.end('Hello there, whats up? Hello. Hi hi')
  })
  app.get('/test', function (req, res) {
    res.end('elon musk')
  })
}
