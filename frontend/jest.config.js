module.exports = {
  // Node env for e2e/browser automation tests
  testEnvironment: "node",
  testTimeout: 30000,

  verbose: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageReporters: ["text", "lcov", "html"],

  testMatch: ["**/specs/**/*.test.js"]
};