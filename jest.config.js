module.exports = {
    "collectCoverage": true,
    "coverageDirectory": "coverage",
    "verbose": true,
    "transform": {
       "^.+\\.js$": "<rootDir>/jest.transform.js"
    },
    "coverageThreshold": {
        "global": {
            "branches": 30,
            "functions": 90,
            "lines": 90,
            "statements": 90
        }
    },
    "setupFiles": [
        "./setupTest"
    ]
}