const { By, until } = require('selenium-webdriver');

class RegisterPage {
  constructor(driver) {
    this.driver = driver;
    this.url = 'http://localhost:5173/login';   // still /login

    this.nameInput = By.css('[data-testid="register-name"]');
    this.emailInput = By.css('[data-testid="login-email"]');
    this.passwordInput = By.css('[data-testid="login-password"]');
    this.submitButton = By.css('[data-testid="auth-submit"]');

    this.toggleSignUp = By.css('[data-testid="toggle-signup"]');
  }

  async navigateTo() {
    await this.driver.get(this.url);

    // Wait for login form
    await this.driver.wait(until.elementLocated(this.emailInput), 10000);

    // Click “Create account” to switch to Sign Up
    const toggleBtn = await this.driver.findElement(this.toggleSignUp);
    await toggleBtn.click();

    // Now wait until Name field is present
    await this.driver.wait(until.elementLocated(this.nameInput), 10000);
  }

  async getPageTitle() {
    return await this.driver.getTitle();
  }
}

module.exports = RegisterPage;