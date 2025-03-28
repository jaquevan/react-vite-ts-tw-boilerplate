/** @type { import("eslint").Linter.Config } */
module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        // make sure prettier is always the last one
        'plugin:prettier/recommended',
    ],
    overrides: [],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json', './tsconfig.node.json'],
    },
    plugins: ['react', 'prettier'],
    rules: {
        'react/react-in-jsx-scope': 0,
    },
};