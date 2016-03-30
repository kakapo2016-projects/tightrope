module.exports = {
  'friends test': function (browser) {
    browser
      .url('http://localhost:8080/login')
      .waitForElementVisible('body', 1000)
      .setValue('input[type="email"]', 'nightwatch@nighttime.com')
      .setValue('input[type="password"]', 'a')
      .click('input[value="Sign In"]')
  },

  'navagate to friends': function (browser) {
    browser
      .waitForElementVisible('a#friends-link', 1000)
      .click('a#friends-link')
      .pause(1000)
      .assert.urlContains('friends')
      .end()
  }
}
