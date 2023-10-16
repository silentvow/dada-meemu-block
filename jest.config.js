const config = {
  extensionsToTreatAsEsm: ['.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  testEnvironment: 'jsdom',
  transform: {
    '.*\\.(j|t)sx?$': ['@swc/jest'],
  },
  transformIgnorePatterns: [],
}

module.exports = config
