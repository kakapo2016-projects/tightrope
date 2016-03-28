module.exports = function (browser, url) {
  return browser
        .url(url)
        .waitForElementVisible('body', 1000)
        .setValue('input[type="email"]', 'nightwatch@nighttime.com')
        .setValue('input[type="password"]', 'a')
        .click('input[value="Sign In"]')
}
