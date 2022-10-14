const { defaults: tsjPreset } = require('ts-jest/presets');

module.exports = {
    ...tsjPreset,
    preset: 'react-native',
    transform: {
        ...tsjPreset.transform,
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    testMatch: ['<rootDir>/components/**/**/*.test.tsx'],
    globals: {
        'ts-jest': {
            babelConfig: true,
        },
    },
    collectCoverageFrom: [
        'components/**/**/*.{tsx, ts}',
        '!<rootDir>/node_modules/',
        '!<rootDir>/storybook/',
        '!<rootDir>/components/**/**/*.stories.{tsx, ts}',
        '!<rootDir>/components/**/**/*.test.{tsx, ts}',
    ],
    setupFilesAfterEnv: ['<rootDir>/setupTest.js'],
    transformIgnorePatterns: [
        '<rootDir>/node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|rollbar-react-native|@fortawesome|@react-native|@react-navigation)',
    ],
    moduleNameMapper: {
        '\\.svg': '<rootDir>/__mocks__/svgMock.js',
    },
};
