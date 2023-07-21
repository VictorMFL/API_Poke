module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/.jest/setup-tests.ts'],
  moduleNameMapper: {
    "\\.(svg|png)$": '<rootDir>/.jest/mocks/fileMock.ts',
    "\\.(css)$": 'identity-obj-proxy',
  }
}