import js from '@eslint/js'
import json from '@eslint/json'
import markdown from '@eslint/markdown'
import globals from 'globals'
import standard from 'eslint-config-standard'
import prettierConfig from 'eslint-config-prettier'
import nodePlugin from 'eslint-plugin-n'
import promisePlugin from 'eslint-plugin-promise'
import importPlugin from 'eslint-plugin-import'
import jsdocPlugin from 'eslint-plugin-jsdoc'
import vitestPlugin from 'eslint-plugin-vitest'
import playwrightPlugin from 'eslint-plugin-playwright'
import typescript from 'typescript-eslint'

export default [
  ...typescript.configs.recommended,
  ...typescript.configs.stylistic,
  promisePlugin.configs['flat/recommended'],
  importPlugin.flatConfigs.recommended,
  importPlugin.flatConfigs.typescript,
  {
    name: 'custom',
    files: ['**/*.{js,mjs,cjs,jsx,ts,mts,cts,tsx}'],
    ignores: [],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.es2025,
        ...globals.browser,
        ...globals.worker,
        ...globals.serviceworker,
        ...globals.node,
        ...globals.commonjs,
      },
      parser: typescript.parser,
      parserOptions: {
        ecmaFeatures: {
          globalReturn: false,
          impliedStrict: true,
          jsx: true,
        },
      },
    },
    linterOptions: {
      noInlineConfig: false,
      reportUnusedDisableDirectives: 'warn',
    },
    plugins: {},
    rules: {
      ...standard.rules,
      'n/no-missing-import': 'off',
      'n/no-missing-require': 'off',
    },
    settings: {
      'import/resolver': {
        typescript: true,
        node: true,
      },
    },
    ...js.configs.recommended,
    ...nodePlugin.configs['flat/recommended'],
    ...jsdocPlugin.configs['flat/recommended-typescript'],
  },
  {
    name: 'custom-json',
    files: ['**/*.json'],
    language: 'json/json',
    ...json.configs.recommended,
  },
  ...markdown.configs.recommended,
  {
    name: 'custom-test-unit',
    files: ['**/tests/unit/*.{js,mjs,cjs,jsx,ts,mts,cts,tsx}'],
    settings: {
      vitest: {
        typecheck: true,
      },
    },
    ...vitestPlugin.configs.recommended,
  },
  {
    name: 'custom-test-e2e',
    files: ['**/tests/e2e/*.{js,mjs,cjs,jsx,ts,mts,cts,tsx}'],
    ...playwrightPlugin.configs['flat/recommended'],
  },
  {
    name: 'custom-ignore',
    ignores: ['node_modules/**', 'dist/**', '.{idea,fleet,vscode,git}/**', '*.config.*', '*.cache/**'],
  },
  prettierConfig,
]
