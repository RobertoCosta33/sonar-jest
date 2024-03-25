module.exports = {
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  bail: 1,
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ["src/utils/**/*.js", "src/utils/**/*.tsx"],
  preset: "ts-jest",
  testEnvironment: "node",
  coverageReporters: ["lcov"],
  coverageDirectory: ".output/code-coverage",
  coverageThreshold: {
    global: {
      lines: 2,
    },
  },
  reporters: ["default", "./node_modules/jest-html-reporter"],
};
