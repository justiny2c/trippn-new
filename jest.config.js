module.exports = {
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'], // Adds custom jest matchers from jest-dom
    testEnvironment: 'jsdom', // Specifies a browser-like environment for testing
    transform: {
      '^.+\\.(js|jsx)$': 'babel-jest', // Transform JS and JSX files with babel-jest
    },
    moduleNameMapper: {
      // If you're using webpack aliases or similar, map them here
      '^components/(.*)': '<rootDir>/src/components/$1',
    }
  };

module.exports = {
// Automatically clear mock calls and instances between every test
clearMocks: true,

// The test environment that will be used for testing
testEnvironment: "jsdom",

// Indicates whether each individual test should be reported during the run
verbose: true,

// A map from regular expressions to paths to transformers
transform: {
    "^.+\\.[t|j]sx?$": "babel-jest"
}
};

  