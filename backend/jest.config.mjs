export default {
  transform: {
    "^.+\\.jsx?$": "babel-jest"
  },
  testEnvironment: "node",
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1"
  },
  testTimeout: 30000,
  setupFilesAfterEnv: ["<rootDir>/tests/setup.js"],

  // Coverage for CI/SonarCloud
  verbose: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageReporters: ["text", "lcov", "html"],

  testMatch: ["**/tests/**/*.test.js"]
};