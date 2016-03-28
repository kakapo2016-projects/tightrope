module.exports = {
  'Log in': function (browser, url) {
    browser
        .url(url)
        .waitForElementVisible('body', 1000)
        .setValue('input[type="email"]', 'nightwatch@nighttime.com')
        .setValue('input[type="password"]', 'a')
        .click('input[value="Sign In"]')
  },

  'navagate from feed to friends': function (browser) {
    browser
        .waitForElementVisible('body', 1000)
        .click('containsText("#main", "friends")')
    }
}
