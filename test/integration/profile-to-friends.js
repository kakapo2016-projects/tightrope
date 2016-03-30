module.exports = {
  'Log in': function (browser) {
    browser
      .url('http://localhost:8080/login')
      .waitForElementVisible('body', 1000)
      .setValue('input[type="email"]', 'nightwatch@nighttime.com')
      .setValue('input[type="password"]', 'a')
      .click('input[value="Sign In"]')
  },

  'to friends': function (browser) {
    browser
      .url('http://localhost:8080/profile')
      .waitForElementPresent('body', 1000)
      .pause(500)
      .url('http://localhost:8080/friends')
      .pause(500)
      .end()
  }
}
