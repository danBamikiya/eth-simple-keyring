module.exports = {
  root: true,
  extends: [
    '@metamask/eslint-config',
    '@metamask/eslint-config-nodejs',
    '@metamask/eslint-config/config/typescript',
  ],
  env: {
    commonjs: true,
  },
  ignorePatterns: ['!.eslintrc.js', 'node_modules/', 'dist/'],
  overrides: [
    {
      files: ['*.js'],
      extends: ['@metamask/eslint-config-jest'],
    },
  ],
  rules: {
    camelcase: [
      'error',
      {
        allow: ['signTypedData_v1', 'signTypedData_v3', 'signTypedData_v4'],
      },
    ],
    '@typescript-eslint/no-require-imports': 'off',
    '@typescript-eslint/no-var-requires': 'off',
  },
};
