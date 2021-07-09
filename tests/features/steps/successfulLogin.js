const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
const loginPage = require('../../page_objects/login.js');

Given('the credentials are correct', async function () {
    await loginPage.typeUsername("admin");
    await loginPage.typePassword("admin");
});

When('the user attempts to successfully log in', async function () {
    await loginPage.submitButton().click()
});

Then('a success message is displayed', async function () {
    await driver.wait(() => {
      return loginPage.successfulMessage().getText();
    }, 15000);

    const actualMessage = await loginPage.successfulMessage().getText();
    const expectedMessage = 'Login Successfully';

    assert.equal(actualMessage, expectedMessage, 'an unexpected message was displayed');
});

