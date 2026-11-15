# examples/studio

プリセットのトークン一覧を [Panda Studio](https://studio.panda-css.com/) で確認するためのサンプルです。

Panda CSS v2 では Astro 製 Studio の静的ビルド（`panda studio --build`）が廃止されました。そのため GitHub Pages には、デザインシステムの spec（`design-system.json`）と、それをホスト版 Studio で開くためのページだけを配置しています。

## 事前準備

```sh
pnpm i
```

## 実行方法

ローカルのプロジェクトに接続した状態で Studio を開く（ブラウザで studio.panda-css.com が開きます）

```sh
pnpm run studio
```

GitHub Pages 用の成果物をビルドする（`dist/design-system.json` と `dist/index.html` が出力されます）

```sh
pnpm run build
```
