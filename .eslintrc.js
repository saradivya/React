module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    jest: true,
    jasmine: true,
    webextensions: true,
    protractor: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  plugins: ['import', 'json', 'jsx-a11y', 'react', 'prettier'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    indent: ['error', 2, { SwitchCase: 1 }],
    'linebreak-style': 0,
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'no-unused-vars': ['warn'],
    'no-console': 0,
    'eol-last': ['error', 'always'],
    'no-trailing-spaces': 'error',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/no-deprecated': 'warn',
    'comma-spacing': ['error', { before: false, after: true }],
    'object-curly-spacing': ['error', 'always'],
    'key-spacing': ['error', { beforeColon: false, afterColon: true }],
    'arrow-body-style': ['error', 'as-needed'],

    'arrow-parens': 'off', // Incompatible with prettier
    'object-curly-newline': 'off', // Incompatible with prettier
    'no-mixed-operators': 'off', // Incompatible with prettier
    'function-paren-newline': 'off', // Incompatible with prettier
    'no-plusplus': 'off',
    'space-before-function-paren': 0, // Incompatible with prettier

    'max-len': ['error', 400, 2, { ignoreUrls: true }], // airbnb is allowing some edge cases
    'no-alert': 'error', // airbnb is using warn

    'no-param-reassign': 'off', // Not our taste?
    radix: 'off', // parseInt, parseFloat radix turned off. Not my taste.

    'react/require-default-props': 'off', // airbnb use error
    'react/forbid-prop-types': 'off', // airbnb use error
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'prefer-destructuring': 'off',
    'implicit-arrow-linebreak': 'off',

    'react/no-find-dom-node': 'off', // I don't know
    'react/no-did-mount-set-state': 'off',
    'react/no-unused-prop-types': 'off', // Is still buggy
    'react/jsx-one-expression-per-line': 'off',

    'jsx-a11y/anchor-is-valid': ['error', { components: ['Link'], specialLink: ['to'] }],
    'jsx-a11y/label-has-for': [
      2,
      {
        required: {
          every: ['id'],
        },
      },
    ], // for nested label htmlFor error
  },
};
