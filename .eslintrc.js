module.exports = {
  root: true,
  env: {
    node: true,
    jest: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    'plugin:vue/recommended',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/extensions': ['error', 'always', {
      js: 'never',
      vue: 'never',
    }],
    'no-nested-ternary': 'warn',
    'import/prefer-default-export': 'off',
    'max-len': ['error',
      {
        code: 120,
        tabWidth: 2,
        comments: Infinity,
        ignoreRegExpLiterals: true,
        ignoreTemplateLiterals: true,
      },
    ],
    'vue/component-name-in-template-casing': ['error', 'PascalCase', {
      registeredComponentsOnly: false,
    }],
    'vue/attribute-hyphenation': ['error', 'never'],
    'linebreak-style': ['error', 'unix'],
  },
  globals: {
    process: true,
  },
  settings: {
    'import/resolver': {
      webpack: 'webpack.config.js',
    },
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        'max-len': 'off',
        'vue/max-len': ['error', {
          code: 120,
          tabWidth: 2,
          comments: Infinity,
          ignoreUrls: true,
          ignoreTrailingComments: true,
          ignoreRegExpLiterals: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
          ignoreHTMLTextContents: true,
        }],
        indent: 'off',
        'vue/script-indent': ['error', 2, {
          baseIndent: 1,
          switchCase: 1,
        }],
      },
    },
  ],
};
