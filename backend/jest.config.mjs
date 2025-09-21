// backend/jest.config.mjs
export default {
  transform: {
    "^.+\\.jsx?$": "babel-jest"
  },
  testEnvironment: "node",
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1"
  },
  testTimeout: 30000, // give Mongo memory server time to boot
  setupFilesAfterEnv: ["<rootDir>/tests/setup.js"]
};