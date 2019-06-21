const dotenv = require('dotenv');

dotenv.config({ path: './env' });
module.exports = {
  testRegex: '/src/.*?(Spec)\\.js$',
  modulePathIgnorePatterns: ['node_modules', 'dist'],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',
    '\\.(gif|ttf|eot|svg)$': '<rootDir>/__mocks__/fileMock.js',
  },
  setupFiles: ['<rootDir>/jest/index.js'],
};
