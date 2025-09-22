// export default {
//   testEnvironment: 'jsdom',
//   setupFilesAfterEnv: ['<rootDir>/src/jest.setup.js'],
//   moduleNameMapping: {  // FIXED: Changed from moduleNameMapping to moduleNameMapping
//     '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
//     '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js'
//   },
//   transform: {
//     '^.+\.(js|jsx)$': 'babel-jest'
//   }
// };

// export default {
//   testEnvironment: 'jsdom',
//   setupFilesAfterEnv: ['<rootDir>/src/jest.setup.js'],
//   moduleNameMapping: {
//     '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
//     '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js'
//   }
// };

// export default {
//   testEnvironment: 'jsdom',
//   setupFilesAfterEnv: ['<rootDir>/src/jest.setup.js'],
//   moduleNameMapping: {
//     '^@/(.*)$': '<rootDir>/src/$1',
//     '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
//     '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js',
//     '^react$': '<rootDir>/node_modules/react',
//     '^react-dom$': '<rootDir>/node_modules/react-dom',
//     '^react-router-dom$': '<rootDir>/node_modules/react-router-dom'
//   },
//   transform: {
//     '^.+\.(js|jsx)$': 'babel-jest'
//   },
//   transformIgnorePatterns: [
//     'node_modules/(?!(react-router|react-router-dom)/)'
//   ]
// };

// jest.config.js
// module.exports = {
//   // The test environment should be 'node' because we are controlling a browser from Node.js
//   testEnvironment: 'node',
  
//   // Increase the timeout for tests (in milliseconds) because browser actions can be slow
//   testTimeout: 30000, // 30 seconds

//   // Where to find our test files
//   testMatch: ['**/specs/**/*.test.js'],
// };

// frontend/jest.config.js
// frontend/jest.config.js
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