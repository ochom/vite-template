module.exports = {
  env: {
    node: true,
    es6: true,
    browser: true
  },
  parser: '@babel/eslint-parser',
  extends: ['next/core-web-vitals', 'prettier'],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
    project: './jsconfig.json',
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true
    }
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/display-name': 'off',
    'react-hooks/exhaustive-deps': 'off',
    '@next/next/no-img-element': 'off',
    'react/no-unescaped-entities': 'off',
    'import/no-anonymous-default-export': 'off',

    // warn unused vars
    'no-unused-vars': 'warn',

    // warn undefined vars
    'no-undef': 'error',

    // add new line above comment
    'lines-around-comment': [
      'warn',
      {
        beforeLineComment: true,
        beforeBlockComment: true,
        allowBlockStart: true,
        allowClassStart: true,
        allowObjectStart: true,
        allowArrayStart: true
      }
    ],
    // add new line below import
    'import/newline-after-import': [
      'warn',
      {
        count: 1
      }
    ],

    // add new line after each var, const, let declaration
    'padding-line-between-statements': [
      'warn',
      { blankLine: 'always', prev: ['export'], next: ['*'] },
      {
        blankLine: 'always',
        prev: ['*'],
        next: ['multiline-const', 'multiline-let', 'multiline-var', 'export']
      }
    ]
  }
};
