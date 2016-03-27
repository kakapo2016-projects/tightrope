var path = require('path')

module.exports = {
  'initial' : function (client) {
    client
      .url( "file:" + path.join(__dirname, '../../' + 'public/index.html') )
      .waitForElementVisible('body', 1000)
      .pause(1000)

    client.assert.elementPresent('#app')
      .end()
  }
};
