module.exports = {
  testRegex: '/src/.*?(Spec)\\.js$',
  modulePathIgnorePatterns: ['node_modules', 'dist'],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',
    '\\.(gif|ttf|eot|svg)$': '<rootDir>/__mocks__/fileMock.js',
  },
  setupFiles: ['<rootDir>/src/__tests___/index.js'],
};
