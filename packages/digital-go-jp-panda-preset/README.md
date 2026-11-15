# @togana/digital-go-jp-panda-preset

[@digital-go-jp/design-tokens](https://www.npmjs.com/package/@digital-go-jp/design-tokens) をベースにした Panda CSS のプリセット。

## 対応バージョン

| プリセット  | Panda CSS |
| ----------- | --------- |
| 0.1.0 以降  | v2        |
| 0.0.37 以前 | v1        |

Panda CSS v1 を使っている場合は `@togana/digital-go-jp-panda-preset@0.0.37` をインストールしてください。

## インストール

```sh
npm install -D @togana/digital-go-jp-panda-preset @pandacss/preset-base
```

panda.config.ts の `presets` を以下のように設定します。

```diff
import { defineConfig } from "@pandacss/dev";
+ import preset from '@togana/digital-go-jp-panda-preset';

export default defineConfig({
  // Whether to use css reset
  preflight: true,

+  // Panda v2 ではプリセットが自動で追加されないため、
+  // ユーティリティや条件（_hover など）を提供する preset-base も明示的に指定します
+  presets: ['@pandacss/preset-base', preset],

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

Panda のデフォルトテーマ（`@pandacss/preset-panda`）のトークンも併用したい場合は、`presets: ['@pandacss/preset-base', '@pandacss/preset-panda', preset]` のように並べます。後ろに書いたプリセットの値が優先されます。

## トークン一覧

[Panda Studio でトークン一覧を見る](https://togana.github.io/digital-go-jp-panda-preset/)

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
