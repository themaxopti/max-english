const nextJest = require("next/jest")
const createJestConfig = nextJest({
    dir: "./",
})
const customJestConfig = {
    moduleDirectories: ["node_modules", "<rootDir>/"],
    testEnvironment: "jest-environment-jsdom",
    moduleNameMapper: {
        '^modules/(.*)$': '<rootDir>/src/modules/$1',
        '^store/(.*)$': '<rootDir>/src/store/$1',
        '^components/(.*)$': '<rootDir>/src/components/$1',
        '^utils/(.*)$': '<rootDir>/src/utils/$1',
    },
    setupFilesAfterEnv: [
        "<rootDir>/src/setupTests.ts"
    ]
}
module.exports = createJestConfig(customJestConfig)