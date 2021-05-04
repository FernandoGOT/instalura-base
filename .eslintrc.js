module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    semi: ['error', 'never'],
    'comma-dangle': ['error', 'never'],
    'max-len': ['error', { code: 400 }],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }]
  }
}
