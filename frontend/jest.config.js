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

export default {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/jest.setup.js'],
  moduleNameMapping: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js',
    '^react$': '<rootDir>/node_modules/react',
    '^react-dom$': '<rootDir>/node_modules/react-dom',
    '^react-router-dom$': '<rootDir>/node_modules/react-router-dom'
  },
  transform: {
    '^.+\.(js|jsx)$': 'babel-jest'
  },
  transformIgnorePatterns: [
    'node_modules/(?!(react-router|react-router-dom)/)'
  ]
};