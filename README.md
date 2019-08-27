## TypeScript

类型系统能够强化规范编程，TypeScript 提供定义接口。在开发大型复杂的应用软件时十分重要，一个系统模块可以抽象的看做一个 TypeScript 定义的接口。让设计脱离实现，最终体现出一种 IDL（接口定义语言，Interface Define Language），让程序设计回归本质。

通过静态类型检测可以尽早检测出程序中隐藏的的逻辑错误，对于 JavaScript 动态的弱类型语言，虽然灵活性高，但是对于初学者来说，如果不熟悉 JavaScript 内部的语言机制，很容易造成隐藏的事故。但是通过 TypeScript 的静态类型检测可以规避这些问题，因为其能够约束变量产生的类型。结合 IDE 编辑器可以推导变量对应的类型以及内部的结构，提高代码的健壮性和可维护性。

## Mobx

数据流流动不自然，只有用到的数据才会引发绑定，局部精确更新，但避免了粒度控制烦恼。

## React-Keeper : React 如何优雅地写单页面应用

vue 有一个 keep-alive 可以缓存组件状态，在做移动端应用的时候非常方便，提高性能；那么 react 有没有这样一个东西呢？当然有，那就是 React-Keeper 了

在做后台管理项目的时候，产品经理提出：从列表页填写查询条件，然后查询出结果，点击某一条结果进入编辑页面，编辑完了之后返回列表页，还想看到之前查询的条件和查询的结果；（目前是返回直接刷新页面，等于查询条件为空）

## Mork

mork 数据引入 umi mork 抽离出来的中间键

## 网络处理

独立从浏览器中创建 XMLHttpRequests,使用 Typescript 重新实现 Axios 进行独立封装

- - 从浏览器中创建 XMLHttpRequests
- - 从 node.js 创建 http 请求
- - 支持 Promise API
- - 拦截请求和响应
- - 转换请求数据和响应数据
- - 取消请求
- - 自动转换 JSON 数据
- - 客户端支持防御 XSRF

## Eslint 配合 Git （Husky）

为了保证每次提交的 git 代码是正确的，为此我们可以使用 eslint 配合 git hook， 在进行 git commit 的时候验证 eslint 规范

如果 eslint 验证不通过，则不能提交。

```
 "scripts": {
   "lint": "eslint src --fix --ext .ts,.tsx "
  }
   "husky": {
    "hooks": {
      "pre-commit": "echo 'husky' && npm run lint && git add ."
    }
  }
```

## Setup

```
$ npm install
```

## Running

```
$ npm start
```

## Build

```
$ npm run build
```

## Code Format

```
$ npm run prettier
```

## Code lint(引入 eslint --fit 静态检查)

```
$ npm run lint
```

# License

MIT
