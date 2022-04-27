# Vue 3 + Typescript + Vite

This template should help get you started developing with Vue 3 and Typescript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's Take Over mode by following these steps:

1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette, look for `TypeScript and JavaScript Language Features`, then right click and select `Disable (Workspace)`. By default, Take Over mode will enable itself if the default TypeScript extension is disabled.
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

You can learn more about Take Over mode [here](https://github.com/johnsoncodehk/volar/discussions/471).

# learn vue

- 代码架构
- public 公共数据
- src 源代码
  - assets 静态文件
  - components 组件
- App.vue 根组件
- env.d.ts ts 的声明文件
- main.ts 入口文件
- index.html 模版文件
- package.json 包管理的配置文件
- tsconfig.json ts 的配置文件
- vite 打包工具的配置文件
- yarn 文件的锁定文件

# TypeScript

JavaScript 的超集解决 JavaScript 弱类型的弊端

App.vue 是根组件，相当于 html 中的 body

# 安装插件

yarn add -D path

# 使用的包需要有类型声明,类型声明，有更好的类型声明。

yarn add -d @types/node

# javascript 是弱类型 typescript 是强类型

- 通过 as 做类型断言
- js 传递参数，带一个大括号表示参数类型为一个对象

# ts 可以支持更好的代码提示功能

- yarn add -D @types/node
- yarn add -D @types/lodash
- Tailwind官网安装
- mock.js
# vscode 插件
- vim vscode 插件中平滑移动
```shell
defaults write com.microsoft.VSCode ApplePressAndHoldEnabled -bool false
```
- tailwindcss 插件实现tailwindcss补全


