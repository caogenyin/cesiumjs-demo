module.exports = {
  root: true,
  env: {
    node: true
  },
  // extends: ["plugin:vue/essential", 'plugin:prettier/recommended'],
  extends: ['plugin:vue/essential', 'eslint:recommended', 'prettier'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    /*-----------------------------------------------------------------
        "off"或者0    //关闭规则关闭
        "warn"或者1   //在打开的规则作为警告（不影响退出代码）
        "error"或者2  //把规则作为一个错误（退出代码触发时为1）
        -----------------------------------------------------------------*/
    'no-console': process.env.NODE_ENV === 'production' ? 0 : 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 0 : 0,

    /*------- 声明  --------*/
    semi: ['error', 'never'], //禁止分号结尾
    quotes: ['error', 'single'], //单引号
    'getter-return': 2, // 强制 getter 函数中出现 return 语句
    'no-await-in-loop': 2, // 禁止在循环中使用await
    'no-template-curly-in-string': 2, // 字符串模板为反引号(es6)
    'block-scoped-var': 2, //禁止，if语句等非块作用域内定义变量，防止变量提升
    // 'default-case': 2, //switch语句必有default
    eqeqeq: [2, 'always'], //强制使用===
    'guard-for-in': 2, //for in 遍历对象,必须使用hasOwnProperty判断属性存不存在
    'no-else-return': 2, //else中的return，不在{ }中返回
    // 'no-empty-function': 2, //禁止出现空函数
    'no-floating-decimal': 2, //禁止 .5这样定义小数
    'no-new': 2, //new出的对象，要有变量接受
    'require-await': 2, //对不包含 await 表达式的 async 函数发出警告
    'init-declarations': ['error', 'always'], //变量必须在声明时初始化
    'spaced-comment': ['error', 'always'], //注释风格
    'no-var': 2, //不在使用var声明变量
    'arrow-spacing': 2, //箭头前后使用一致的空格
    'comma-dangle': [2, 'never'], // 控制逗号前后的空格
    'comma-style': ['error', 'last'],
    'no-multiple-empty-lines': [
      1,
      {
        //空行最多不能超过2行
        max: 2
      }
    ],
    'no-unused-vars': [
      2,
      {
        // 参数不检查
        args: 'none'
      }
    ]
  }
}
