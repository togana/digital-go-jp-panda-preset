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

## キーカラー

`key` はサービスの基調となる色で、デフォルトでは `blue` の各階調を参照しています（`key.500` → `blue.500`）。

```ts
css({ bg: 'key.600', color: 'white' });
```

別の色相をキーカラーにしたい場合は、`theme.extend` で参照先を差し替えます。

```ts
theme: {
  extend: {
    tokens: {
      colors: {
        key: {
          500: { value: '{colors.green.500}' },
          600: { value: '{colors.green.600}' },
          // ...
        },
      },
    },
  },
},
```
