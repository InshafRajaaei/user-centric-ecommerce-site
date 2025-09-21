// AuthFlow.test.js
const { Builder, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');

// Page Objects
const LoginPage = require('../pages/LoginPage');
const RegisterPage = require('../pages/RegisterPage');

describe('RYNZA E-Commerce Authentication Flow', () => {
  let driver, loginPage, registerPage;

  beforeAll(async () => {
    console.log('Setting up WebDriver...');
    const service = new chrome.ServiceBuilder(chromedriver.path);
    const options = new chrome.Options();
    options.addArguments('--headless=new', '--disable-gpu', '--no-sandbox', '--disable-dev-shm-usage');

    driver = await new Builder()
      .forBrowser('chrome')
      .setChromeOptions(options)
      .setChromeService(service)
      .build();

    loginPage = new LoginPage(driver);
    registerPage = new RegisterPage(driver);
  }, 60000);

  afterAll(async () => {
    console.log('Closing WebDriver...');
    if (driver) await driver.quit();
  });

 it('should launch the main app and have a valid title', async () => {
  await driver.get('http://localhost:5173/');
  const title = await driver.getTitle();
  expect(title).toBeTruthy();
  console.log('Page Title is:', title);
});

  it('should navigate to registration page and have all required fields', async () => {
    await registerPage.navigateTo();
    const title = await registerPage.getPageTitle();
    expect(title).toBeTruthy();

    const nameField = await driver.findElement(registerPage.nameInput);
    const emailField = await driver.findElement(registerPage.emailInput);
    const passwordField = await driver.findElement(registerPage.passwordInput);
    const submitButton = await driver.findElement(registerPage.submitButton);

    expect(await nameField.isDisplayed()).toBe(true);
    expect(await emailField.isDisplayed()).toBe(true);
    expect(await passwordField.isDisplayed()).toBe(true);
    expect(await submitButton.isDisplayed()).toBe(true);
  });

  it('should navigate to login page and have all required fields', async () => {
    await loginPage.navigateTo();
    const title = await loginPage.getPageTitle();
    expect(title).toBeTruthy();

    const emailField = await driver.findElement(loginPage.emailInput);
    const passwordField = await driver.findElement(loginPage.passwordInput);
    const submitButton = await driver.findElement(loginPage.submitButton);

    expect(await emailField.isDisplayed()).toBe(true);
    expect(await passwordField.isDisplayed()).toBe(true);
    expect(await submitButton.isDisplayed()).toBe(true);
  });
});