export {};
module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{ts,tsx}", "!src/**/*.d.ts", "!**/vendor/**"],
  coverageDirectory: "coverage",
  testEnvironment: "jsdom",
  preset: "ts-jest",
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  testMatch: [
    "<rootDir>/src/**/__tests__/**/*.(ts|tsx)",
    "<rootDir>/src/**/*.(test|spec).(ts|tsx)",
  ],
  transform: {
    "^.+\\.(ts|tsx)$": [
      "ts-jest",
      {
        tsconfig: {
          jsx: "react-jsx",
          esModuleInterop: true,
          allowSyntheticDefaultImports: true,
        },
      },
    ],
  },
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "/coverage",
    "package.json",
    "package-lock.json",
    "reportWebVitals.ts",
    "setupTests.ts",
    "index.tsx",
  ],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};
