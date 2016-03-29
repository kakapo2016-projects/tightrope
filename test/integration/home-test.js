module.exports = {
  'Checking for page load' : function (browser) {
    browser
      .url('http://localhost:8080/login')
      .waitForElementVisible('body', 1000)
      .click('input[value="Sign In"]')
      .pause(1000)
      .assert.containsText('div', 'login')
      .end()
  }
}
