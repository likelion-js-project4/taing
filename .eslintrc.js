module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: "eslint:recommended",
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },

  rules: {
    "linebreak-style": ["error", "unix"],
    // var는 사용할 수 없다
    "no-var": ["error"],
    // 선언한 표현식은 반드시 사용해야 한다
    "no-unused-expressions": ["error"],
    // Function 객체에 new 연산자를 사용할 수 없다
    "no-new-func": ["error"],
    // 선언하지 않은 코드를 사용할 수 없다
    "no-use-before-define": ["error"],
    // 도달하지 못하는 코드는 사용할 수 없다
    "no-unreachable": ["error"],
  },

};
