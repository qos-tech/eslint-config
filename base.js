import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import prettierConfig from 'eslint-config-prettier'
import globals from 'globals'

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
        'prettier/prettier': [
        'error',
        {
            printWidth: 80,
            tabWidth: 2,
            singleQuote: true,
            trailingComma: 'all',
            arrowParens: 'always',
            semi: false,
            endOfLine: 'auto'
        },
        ],
    },
  },
  prettierConfig,
]