// Generated by Selenium IDE
const chrome = require('selenium-webdriver/chrome');
const { Builder, By, Key, until } = require('selenium-webdriver')
const loginPage = require('./page_objects/login.js');
const assert = require('assert')

describe('failed_login', function() {
  this.timeout(30000)
  let vars

  beforeEach(async function() {
    global.driver = await new Builder().forBrowser('chrome')
      .setChromeOptions(new chrome.Options().headless())
      .build()
    vars = {}
  })

  afterEach(async function() {
    await driver.quit();
  })

  it('failed_login', async function() {
    await driver.get("http://demo.guru99.com/test/newtours/")
    await driver.manage().window().setRect(1440, 1080)

    await loginPage.typeUsername("test@example.com");
    await loginPage.typePassword("wrongPassword");

    await loginPage.submitButton().click()

    await driver.wait(() => {
      return loginPage.loginMessage().isDisplayed();
    }, 15000);

    const actualMessage = await loginPage.loginMessage().getText();
    const expectedMessage = 'Enter your userName and password correct';

    assert.equal(actualMessage, expectedMessage, 'an unexpected message was displayed');
  })

})