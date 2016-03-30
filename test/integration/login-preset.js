module.exports = {
  '@disabled': true,
  
  'Log in': function (browser) {
    browser
      .url('http://localhost:8080/login')
      .waitForElementVisible('body', 1000)
      .setValue('input[type="email"]', 'nightwatch@nighttime.com')
      .setValue('input[type="password"]', 'a')
      .click('input[value="Sign In"]')
      .end()
  }
}
