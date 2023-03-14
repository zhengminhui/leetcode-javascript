module.exports = {
  extends: 'airbnb-base',
  rules: {
    'no-unused-vars': 0,
    'no-var': 0,
    'func-names': 0,
    'space-before-function-paren': 0,
    'no-plusplus': 0,
    'no-param-reassign': 0,
    'no-use-before-define': 0,
    'linebreak-style': 0, // compatible with mac and windows
    'operator-assignment': 0,
    'no-bitwise': 0,
    'no-continue': 0,
    'object-curly-newline': 0,
    'no-console': 0,
    'no-constant-condition': 0,
    'no-restricted-syntax': 0,
    'operator-linebreak': 0,
    'no-shadow': 0,
    camelcase: 0,
  },
  env: {
    'jest/globals': true,
  },
  plugins: ['jest'],
};
