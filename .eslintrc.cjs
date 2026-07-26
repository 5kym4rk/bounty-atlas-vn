module.exports = {
  root: true,
  env: { browser: true, es2022: true, node: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', 'node_modules', 'reports', 'coverage', '*.cjs', '*.js'],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react-refresh', '@typescript-eslint'],
  rules: {
    'react-refresh/only-export-components': 'off',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'no-restricted-properties': [
      'error',
      {
        object: 'window',
        property: 'eval',
        message: 'eval bi cam trong BountyAtlas VN.',
      },
    ],
    'no-restricted-syntax': [
      'error',
      {
        selector: "JSXAttribute[name.name='dangerouslySetInnerHTML']",
        message:
          'Khong duoc render HTML khong tin cay. Dung component Markdown an toan trong src/components/ui.',
      },
    ],
  },
};
