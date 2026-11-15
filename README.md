# panda-preset

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

## 使用例

examples ディレクトリを参照

- `examples/next`: Next.js で利用するサンプル実装
- `examples/studio`: トークン一覧を Panda Studio で確認するためのサンプル（GitHub Pages に配置）

## パッケージのリリース

下記のコマンドを実行してバージョンアップするパッケージを選んでサマリを記載し main にマージする。

```sh
pnpm changeset
```

Github Actions によって PR が作成されるのでマージするとリリースできる。
