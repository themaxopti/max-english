const nextJest = require("next/jest")
const createJestConfig = nextJest({
    dir: "./",
})
const customJestConfig = {
    moduleDirectories: ["node_modules", "<rootDir>/"],
    testEnvironment: "jest-environment-jsdom",
    moduleNameMapper: {
        '^modules/(.*)$': '<rootDir>/src/modules/$1'
    },
    setupFilesAfterEnv: [
        "<rootDir>/src/setupTests.ts"
    ]
}
module.exports = createJestConfig(customJestConfig)