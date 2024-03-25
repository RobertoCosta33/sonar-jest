module.exports = {
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  bail: 1,
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ["src/utils/**/*.js", "src/utils/**/*.tsx"],
  preset: "ts-jest",
  testEnvironment: "node",
};
