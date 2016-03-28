module.exports = {
  'Checking for login redirect' : function (browser) {
    browser
      .url('http://localhost:8080/login')
      .waitForElementVisible('body', 5000)
      .assert.title('Tightrope')
      .setValue('input[type=email]', 'nightwatch@nighttime')
      .setValue('input[type=password]', 'a')
      .click('input[type=submit]')
      .assert.img('Tightrope')
      .assert.elementPresent('input[value="Sign In"]')
      .end()
  }
}
