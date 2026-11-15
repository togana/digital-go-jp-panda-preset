---
paths:
  - "packages/digital-go-jp-panda-preset/**"
---

# コーディング規約（digital-go-jp-panda-preset）

## フォーマット・リント

- 整形とリントは Biome（`packages/digital-go-jp-panda-preset/biome.json`）に従う。手で合わせず `pnpm format` を実行する
- 主な設定: 2 スペース、行幅 100、シングルクォート、セミコロンあり、トレイリングカンマあり、アロー関数の引数は常に括弧付き
- `noInferrableTypes` が有効なので、推論できる型注釈は書かない

## ファイル構成

- ファイル名は kebab-case（例: `font-sizes.ts`）
- トークンのカテゴリごとにファイルを分け、複数ファイルを持つカテゴリはディレクトリにまとめる（`colors/`, `typography/`）
- `index.ts` は再エクスポートだけを書く。実装は置かない
- プリセット本体は `src/preset.ts` の `definePreset` で定義し、`src/index.ts` は `preset` を `default` として再エクスポートするだけにする

## トークン定義

- トークンは `as const satisfies Tokens['<category>']` で定義し、Panda CSS の型に準拠させつつリテラル型を保つ

  ```ts
  import type { Tokens } from '@pandacss/types';

  export const sizes = {} as const satisfies Tokens['sizes'];
  ```

- 未使用のカテゴリも空オブジェクトで定義して API の形を揃える（`sizes`, `spacing` など）
- 色はプリミティブ（`colors/primitive.ts`）とセマンティック（`colors/semantic.ts`）を分ける
- テキストスタイル名は `{Category}-{Size}{Weight}-{LineHeight}` 形式（例: `Dsp-64N-140`, `Std-16B-170`）
  - Category: `Dsp` / `Std` / `Dns` / `Oln` / `Mono`
  - Weight: `N`（Normal）/ `B`（Bold）
- 値はデジタル庁デザインシステム（`@digital-go-jp/design-tokens`）の仕様に合わせる

## テスト

- 実装ファイル（`index.ts` を含む）ごとに同じディレクトリに `*.test.ts` を置く
- `describe` は使わず、トップレベルの `it` を並べるフラット構造にする
- テスト名は日本語で書く（例: `it('プリミティブカラーが正しく定義されている', ...)`）
- `index.ts` のテストでは、再エクスポートが元モジュールと同一参照であることを `toBe` で確認する
- カバレッジは 100% を維持する（`vitest.config.ts` で閾値を設定済み）

## 新しいトークンを追加するとき

1. 実装ファイルを作り、`satisfies` で型を合わせる
2. 対応する `index.ts` で再エクスポートする
3. `src/preset.ts` に組み込む
4. テストファイルを追加し、`index.test.ts` / `preset.test.ts` も更新する

## 変更後の確認

パッケージディレクトリで `pnpm ci`（`biome ci` + `tsc --noEmit` + `vitest run`）を通す。ビルドに関わる変更なら `pnpm build` も確認する。
