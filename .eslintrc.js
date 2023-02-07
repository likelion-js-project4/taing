module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: 'eslint:recommended',
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },

  rules: {
    // 줄바꿈은 유닉스 스타일로 통일하겠다
    'linebreak-style': ['error', 'unix'],
    // var는 사용할 수 없다
    'no-var': ['error'],
    // 선언한 표현식은 반드시 사용해야 한다
    'no-unused-expressions': ['error'],
    // Function 객체에 new 연산자를 사용할 수 없다
    'no-new-func': ['error'],
    // 선언하지 않은 코드를 사용할 수 없다
    'no-use-before-define': ['error'],
    // 도달하지 못하는 코드는 사용할 수 없다
    'no-unreachable': ['error'],
    // 파라미터는 읽기 전용이다
    'no-param-reassign': ['error'],
    // if ~ else 중첩은 허용하지 않는다
    'max-depth': [
      'error',
      {
        max: 1,
      },
    ],
    // return 문 이전에는 반드시 빈 줄이 있어야 한다
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: 'return',
      },
    ],
    // 삼항연산자를 허용하지 않는다
    'no-unneeded-ternary': [
      'error',
      {
        defaultAssignment: false,
      },
    ],
    // 문자열 선언에는 홑따옴표를 사용한다
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
      },
    ],
    // console.log 는 사용할 수 없다
    'no-console': [
      'warn',
      {
        allow: ['warn', 'error'],
      },
    ],
  },
}
