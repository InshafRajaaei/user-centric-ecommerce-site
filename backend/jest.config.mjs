// jest.config.js
export default {
  testEnvironment: 'node',
  collectCoverageFrom: [
    '**/*.js',
    '!**/node_modules/**',
    '!**/config/**',
    '!**/coverage/**',
    '!jest.config.js',
    '!server.js'
  ],
  coverageDirectory: 'coverage',
  testPathIgnorePatterns: ['/node_modules/'],
  setupFilesAfterEnv: ['./tests/setup.js'],
  transform: {}  // disables Babel - Node handles ESM automatically
};