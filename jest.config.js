// Or async function
export default async () => {
  return {
    verbose: true,
    testEnvironment: "node",
    testTimeout: 10000,
    coveragePathIgnorePatterns: ["/node_modules/"],
    setupFilesAfterEnv: ["./src/tests/setupTests.js"],
  };
};
