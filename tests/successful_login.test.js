require('chromedriver');
const { Builder, By, Key, until } = require('selenium-webdriver')

describe('successful_login', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('successful_login', async function() {
    await driver.get("http://demo.guru99.com/test/newtours/")
    await driver.manage().window().setRect(1440, 1080)
    await driver.findElement(By.css(".col-md-4")).click()
    await driver.findElement(By.linkText("SIGN-ON")).click()
    await driver.findElement(By.name("userName")).click()
    await driver.findElement(By.name("userName")).sendKeys("admin")
    await driver.findElement(By.name("password")).click()
    await driver.findElement(By.name("password")).sendKeys("admin")
    await driver.findElement(By.name("submit")).click()
  })
})
