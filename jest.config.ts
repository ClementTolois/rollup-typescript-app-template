import { JestConfigWithTsJest } from "ts-jest";

const jestConfig: JestConfigWithTsJest = {
    preset: "ts-jest",
    testEnvironment: "node",
    testMatch: ["**/__tests__/**/*.test.ts"],
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/src/$1",
    }
};

export default jestConfig;