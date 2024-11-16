# @togana/digital-go-jp-panda-styled-system

[@digital-go-jp/design-tokens](https://www.npmjs.com/package/@digital-go-jp/design-tokens) をベースにした Panda CSS のプリセットから styled-system を生成したもの。

## インストール

```sh
npm install @togana/digital-go-jp-panda-styled-system
```

panda.config.ts の defineConfig 部分を以下のように設定します。

```diff
+ import { defineConfig } from '@togana/digital-go-jp-panda-styled-system';

export default defineConfig({
  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
    },
  },
});
```
