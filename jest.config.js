// Or async function
export default async () => {
  return {
    verbose: true,
    testEnvironment: "node",
    testTimeout: 10000,
    globalSetup: "./src/tests/index.js",
    globalTeardown: "./src/tests/teardown.js",
    coveragePathIgnorePatterns: ["/node_modules/"],
    // setupFilesAfterEnv: ["./src/tests/setupTests.js"],
    roots: ["./src/tests"],
  };
};
