module.exports = {
  root: true,
  extends: '@react-native',
  parser: 'babel-eslint',
  extends: 'airbnb-base',
  parser: 'babel-eslint',
  plugins: ['react', 'react-native'],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ios.js', '.android.js'],
      },
    },
  },
  env: {
    es6: true,
    node: true,
  },
  rules: {
    'react-native/no-unused-styles': 0,
    'react-native/split-platform-components': 2,
    'react-native/no-inline-styles': 2,
    'react-native/no-color-literals': 0,
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,

    'no-use-before-define': 0,
    'jsx-quotes': 2,
  },
};
