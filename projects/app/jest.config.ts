import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
    roots: ["./src"],
    transform: {
      "^.+\\.(ts|tsx)?$": "babel-jest",
      "^.+\\.(css|less|sass|scss|png|jpg|ttf|woff|woff2|svg)$": "jest-transform-stub"
    },
    testEnvironment: 'jest-environment-jsdom',
    setupFilesAfterEnv: [
      "./src/testSetup.ts"
    ],
    testRegex: "^.+\\.test\\.tsx?$",
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    moduleNameMapper: {
      "^.+.(css|less|sass|scss|png|jpg|ttf|woff|woff2)$": "jest-transform-stub"
    }
}

export default config