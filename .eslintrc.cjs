/** @type { import("eslint").Linter.Config } */
module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended', // Keep Prettier integration
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint', 'prettier'],
    rules: {
        'react/react-in-jsx-scope': 'off', // For React 17+
        'prettier/prettier': 'warn',       // Show Prettier issues as warnings
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};
