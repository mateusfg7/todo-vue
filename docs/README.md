<div align="center">

# Todo Vue.js

This is a simple to-do app made for learning some [Vue.js](https://vuejs.org/) basic concepts.

![](./screenshot.png)
    
![Vue.js](https://img.shields.io/badge/Vue.js-4FC08D?&style=for-the-badge&logo=vue.js&logoColor=fff)![Tailwind CSS](https://img.shields.io/badge/Tailwindcss-06B6D4?&style=for-the-badge&logo=tailwindcss&logoColor=fff)![Typescript](https://img.shields.io/badge/Typescript-007acc?&style=for-the-badge&logo=Typescript&logoColor=fff)![ESLint](https://img.shields.io/badge/ESLint-4B32C3?&style=for-the-badge&logo=ESLint)![Prettier](https://img.shields.io/badge/Prettier-F7B93E?&style=for-the-badge&logo=Prettier&logoColor=000)

</div>

<br>
<br>
<br>


## Features

🌟 Scroll when add new to-do <br>
🌟 Save to local storage <br>
🌟 Vue.js color pallet <br>

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Type-Check, Compile and Minify for Production

```sh
pnpm build
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
```
