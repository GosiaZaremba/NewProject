module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
      },
    },
  ],
  ignorePatterns: [
    'vendor/',
    'coverage/',
    'ios/',
    'android/',
    'setupTest.js',
    'node_modules/',
    '.bundle/',
  ],
};
