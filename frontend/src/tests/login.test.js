const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

describe('User Login', () => {
    let driver;

    beforeAll(async () => {
        driver = await new Builder()
            .forBrowser('chrome')
            .setChromeOptions(new chrome.Options().headless()) // Run in headless mode for CI
            .build();
    });

    afterAll(async () => {
        await driver.quit();
    });

    it('should log in with valid credentials', async () => {
        await driver.get('http://localhost:3000/login'); // Your frontend URL

        // Find email and password fields and enter text
        await driver.findElement(By.css('input[type="email"]')).sendKeys('test@example.com');
        await driver.findElement(By.css('input[type="password"]')).sendKeys('password123');

        // Find and click the login button
        await driver.findElement(By.css('button[type="submit"]')).click();

        // Wait for and assert that the page navigates away from login
        await driver.wait(until.urlContains('/'), 5000); // Wait up to 5 sec for URL to change to home page
        const currentUrl = await driver.getCurrentUrl();
        expect(currentUrl).not.toContain('/login');
    });
});