module.exports = {
    collectCoverage: true,
    collectCoverageFrom: [
        "src/**/*.{js,jsx,ts,tsx}"
    ],
    coverageReporters: ["text"],
    coverageDirectory: "coverage",
    coverageThreshold: {
        global: {
            branches: 50,
            functions: 50,
            lines: 50,
            statements: 50
        }
    },
    moduleDirectories: [
      "node_modules",
      "src"
    ],
    moduleNameMapper: {
        "\\.(css|less|sass)$": "identity-obj-proxy",
    },
    modulePathIgnorePatterns: ["__test__/__mocks__"],
    testRegex: "/*.test.(js|ts)x?$",
    transform: {
        "^.+\\.(js|ts)x?$": "babel-jest",
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/src/components/__test__/__mocks__/fileTransformer.js",
    },
    verbose: true,
};
