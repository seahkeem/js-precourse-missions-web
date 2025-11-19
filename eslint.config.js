import { FlatCompat } from '@eslint/eslintrc';
import pluginJs from '@eslint/js';
import prettier from 'eslint-config-prettier';
import globals from 'globals';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  pluginJs.configs.recommended,
  ...compat.extends('eslint-config-airbnb-base'),
  prettier,
  {
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
        },
        alias: {
          map: [
            ['@', path.resolve(__dirname, '..', 'src')],
          ],
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
        },
      },
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest,
      },
      ecmaVersion: 'latest',
    },
    rules: {
      'indent': ['error', 2, { SwitchCase: 1 }],
      'object-curly-spacing': ['error', 'always'],
      'array-bracket-spacing': ['error', 'never'],
      'space-in-parens': ['error', 'never'],
      'func-call-spacing': ['error', 'never'],
      'no-trailing-spaces': 'error',
      'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 0 }],
      'eol-last': ['error', 'always'],
      'max-len': ['error', { code: 100, ignoreUrls: true, ignoreComments: false, ignoreRegExpLiterals: true, ignoreStrings: true, ignoreTemplateLiterals: true }],
      'import/extensions': ['error', 'ignorePackages'],
      'class-methods-use-this': 'off',
      'no-console': 'off',
      'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
      'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true },],
      'import/no-unresolved': ['error', { ignore: ['^@/'] }],
      'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: ['acc', 'e', 'req', 'res', 'ctx', 'state', 'el', 'node', 'elem', 'element', 'event', 'rootElement'] }],
    },
  },
  {
    files: ['src/**/*.js'],
    rules: {
      'max-depth': ['error', 2],
      'max-lines-per-function': ['error', { max: 15 }],
    },
  },
  {
    files: [
      '**/*.config.js',
      '**/*.config.ts',
      '**/.storybook/**',
      '**/vite.config.js'
    ],
    rules: {
      'import/no-unresolved': 'off',
      'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    },
  },
  {
    files: ['eslint.config.js'],
    rules: {
      'no-underscore-dangle': 'off',
    },
  },
  {
    files: [
      '**/*.stories.js',
      '**/*.stories.jsx',
      '**/.storybook/**/*.js',
      '**/.storybook/**/*.jsx',
      'src/stories/**/*.js',
    ],
    rules: {
      'max-lines-per-function': 'off',
    },
  },
  ...compat.extends('plugin:storybook/recommended'),
];
