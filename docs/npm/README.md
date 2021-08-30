# 如何开发一个 npm 包

## 1. npm 介绍

npm（全称 Node Package Manager，即“node 包管理器”）是 Node.js 默认的、用 JavaScript 编写的软件包管理系统。

## 2. npm 注册

通过[NPM 官网](https://www.npmjs.com/signup)注册

**记住用户名和密码，在发布时要用到。**

## 3. 初始化一个 NPM 项目

### 3.1 初始化包项目

```
mkdir npm-package
npm init -y
```

### 3.2 编辑 package.json

先来看一下 package.json 的相关属性

- name：即项目名
- version：即包的版本
- description：描述信息
- main：指定入口文件
- scripts：脚本命令
- repository：源码仓库地址
- keywords：关键词
- author：作者信息
- license：版权类型
- bugs：bug 反馈
- homepage：项目主页

:::tip 注意项
name、version——必填
:::

修改后的 package.json

```js
{
  "name": "my-demo-js", // 你准备发布的npm的包名, 必填
  "version": "1.0.0", // 你当前的npm的版本号，每次发布都需要递增, 必填
  "description": "",
  "main": "index.js", // 你的npm包的主入口文件
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  // 这是仓库地址，可填可不填
  "repository": {
    "type": "git",
    "url": "git+https://github.com/XXX/my-demo-js.git"
  },
  // issues，可填可不填
  "bugs": {
    "url": "https://github.com/XXX/my-demo-js/issues"
  },
  // readme，可填可不填
  "homepage": "https://github.com/XXX/my-demo-js#readme",
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

### 3.3 主入口文件 index.js

```js
// 先随便写点什么
console.log('hello styd!')
```

## 4. 登录发布与删除

### 4.1 登录

```
npm login
npm whoami // 查看当前npm登录用户名
```

<img :src="$withBase('/npm/2.png')" alt="2">

### 4.2 发布

```
npm publish
```

<img :src="$withBase('/npm/3.png')" alt="3">

#### npm 后台

<img :src="$withBase('/npm/4.png')" alt="4">

### 4.3 删除

#### 4.3.1 查看版本

<img :src="$withBase('/npm/8.png')" alt="8">

#### 4.3.2 删除版本 0.0.2

```
npm unpublish my-demo-js@0.0.2
```

#### 4.3.3 删除整个包(**谨慎操作**)

:::tip 小提示

1. 删除的版本 24 小时后方可重发!
2. 只有发布 72 小时之内的包可以删除!
   :::

```
npm unpublish --force my-demo-js
```

## 5. 项目使用发布的包

### 5.1 项目目录

<img :src="$withBase('/npm/5.png')" alt="5">

### 5.2 安装 npm 包

```
npm i my-demo-js
```

### 5.3 html 引入

<img :src="$withBase('/npm/6.png')" alt="6">

### 5.4 效果展示

<img :src="$withBase('/npm/7.png')" alt="7">

## 6. 实例

[help.css](https://www.npmjs.com/package/help.css)
