const { By, until } = require('selenium-webdriver');

class LoginPage {
  constructor(driver) {
    this.driver = driver;
    this.url = 'http://localhost:5173/login';   // ✅ corrected

    this.emailInput = By.css('[data-testid="login-email"]');
    this.passwordInput = By.css('[data-testid="login-password"]');
    this.submitButton = By.css('[data-testid="auth-submit"]');
    this.toggleSignUp = By.css('[data-testid="toggle-signup"]');
  }

  async navigateTo() {
    await this.driver.get(this.url);
    await this.driver.wait(until.elementLocated(this.emailInput), 10000);
  }

  async getPageTitle() {
    return await this.driver.getTitle();
  }
}

module.exports = LoginPage;