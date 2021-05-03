module.exports = {
  testEnvironment: `jsdom`,
  roots: [`__test__`],
  coverageDirectory: `build/coverage`,
  collectCoverageFrom: [`src/**/*.js`],
  jest: {
    setupTestFrameworkScriptFile: `tests/setup.js`,
  },
}
