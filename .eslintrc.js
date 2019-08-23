module.exports = {
  parser: '@typescript-eslint/parser', // 解析器
  extends: [
    'plugin:@typescript-eslint/recommended',
    'react-app',
    'plugin:prettier/recommended'
  ], // 继承的规则 [扩展]
  plugins: ['@typescript-eslint', 'react'], //插件
  rules: {} // 规则
};
