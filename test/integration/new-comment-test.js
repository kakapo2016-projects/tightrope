module.exports = {
  'log in': function (browser) {
    browser
      .url('http://localhost:8080/login')
      .waitForElementVisible('body', 1000)
      .setValue('input[type="email"]', 'nightwatch@nighttime.com')
      .setValue('input[type="password"]', 'a')
      .click('input[value="Sign In"]')
  },

  'navagate to photo': function (browser) {
    browser
      .waitForElementVisible('body', 1000)
      .waitForElementVisible('#clickthis', 1000)
      .click('#clickthis')
      .setValue('textarea[type="textarea"]', 'This is a nightwatch test comment')
      .click('input[value="Post"]')
      .pause(1000)
  }
}
// '@disabled': true,
