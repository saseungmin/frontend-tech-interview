module.exports = {
  root: true,
  env: {
    es6: true,
    browser: true,
    jest: true,
  },
  ignorePatterns: [
    'node_modules/',
    'build/',
  ],
  extends: ['@nf-team/eslint-config'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: ['./tsconfig.json'],
      },
    },
  ],
  rules: {},
};
