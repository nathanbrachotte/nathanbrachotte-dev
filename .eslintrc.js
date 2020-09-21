module.exports = {
  extends: ['airbnb', 'prettier', 'plugin:cypress/recommended'],
  rules: {
    'react/jsx-filename-extension': 'off',
    'react/require-default-props': 'off',
    'react/jsx-closing-bracket-location': 'off',
  },
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
    jest: true,
  },
}
