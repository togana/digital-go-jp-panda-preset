# @togana/digital-go-jp-panda-preset

[@digital-go-jp/design-tokens](https://www.npmjs.com/package/@digital-go-jp/design-tokens) をベースにした Panda CSS のプリセット。

## インストール

```sh
npm install @togana/digital-go-jp-panda-preset
```

panda.config.ts の presets 部分を以下のように設定します。

```diff
import { defineConfig } from "@pandacss/dev";
+ import preset from '@togana/digital-go-jp-panda-preset';

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // プリセットを追加するとデフォルトのテーマが削除されます
  // 合わせて利用したい場合は ['@pandacss/preset-base', preset] としてください
+  presets: [preset],

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
```
