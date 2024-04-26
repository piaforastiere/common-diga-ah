
module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['eslint:recommended',
  'plugin:react/recommended', 
  'plugin:@typescript-eslint/recommended', 
  'plugin:styled-components-a11y/recommended', 
  'prettier/react', 
  'prettier/@typescript-eslint', 
  'plugin:prettier/recommended', 
  ],
  plugins: ['@typescript-eslint', 'react', 'styled-components-a11y', 'prettier', 'mdx'],
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  settings: {
    react: {
      version: 'detect', // Automatically detect the React version
    },
  },
  rules: {
    // Personalice las reglas de ESLint según sus preferencias. Por ejemplo:
    'react/react-in-jsx-scope': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
};