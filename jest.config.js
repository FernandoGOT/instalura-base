module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleDirectories: ['node_modules', '<rootDir>/node_modules'],
  testPathIgnorePatterns: ['<rootDir>/dist/', '<rootDir>/.next/', '<rootDir>/cypress/']
}
