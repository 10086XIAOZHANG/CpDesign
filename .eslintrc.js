module.exports = {
  parser: '@typescript-eslint/parser', // 解析器
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ], // 继承的规则 [扩展]
  plugins: ['@typescript-eslint', 'react'], //插件
  rules: {
    // 规则
    'react/jsx-uses-react': 2,
    '@typescript-eslint/explicit-member-accessibility': ['off'],
    '@typescript-eslint/explicit-function-return-type': [
      // 'warn',
      'off',
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true
      }
    ],
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/camelcase': ['off', { properties: 'always' }],
    '@typescript-eslint/no-unused-vars': ['off'],
    '@typescript-eslint/no-non-null-assertion': ['off'],
    'react-native/no-color-literals': 0,
    'react-native/sort-styles': 0,
    'react-native/no-inline-styles': 0
  }
};
