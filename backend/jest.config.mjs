// // // backend/jest.config.mjs
// // export default {
// //   transform: {
// //     "^.+\\.jsx?$": "babel-jest"
// //   },
// //   testEnvironment: "node",
// //   moduleNameMapper: {
// //     "^(\\.{1,2}/.*)\\.js$": "$1"
// //   },
// //   testTimeout: 30000, // give Mongo memory server time to boot
// //   setupFilesAfterEnv: ["<rootDir>/tests/setup.js"]
// // };
// // backend/jest.config.mjs



// export default {
//   transform: {
//     "^.+\\.jsx?$": "babel-jest"
//   },
//   testEnvironment: "node",
//   moduleNameMapper: {
//     "^(\\.{1,2}/.*)\\.js$": "$1"
//   },
//   testTimeout: 30000,
//   setupFilesAfterEnv: ["<rootDir>/tests/setup.js"],
//   verbose: true,
//   collectCoverage: true,
//   coverageDirectory: "coverage",
//   coverageReporters: ["text", "lcov", "html"],
//   reporters: [
//     "default",
//     [
//       "jest-sonar",
//       {
//         outputDirectory: "coverage",
//         outputName: "sonar-report.xml"
//       }
//     ]
//   ],
//   testMatch: ["**/tests/**/*.test.js"]
// };

// backend/jest.config.mjs
// backend/jest.config.mjs
// backend/jest.config.mjs
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