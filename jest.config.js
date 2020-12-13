module.exports = {
    moduleDirectories: [
      "node_modules",
      "src"
    ],
    moduleNameMapper: {
        "\\.(css|less|sass)$": "identity-obj-proxy",
    },
    modulePathIgnorePatterns: ["__test__/__mocks__"],
    transform: {
        "^.+\\.(js|ts)x?$": "babel-jest",
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/src/components/__test__/__mocks__/fileTransformer.js",
    },
    verbose: true,
};
