# プロジェクト概要

## プロジェクトの目的
`digital-go-jp-panda-preset`は、[@digital-go-jp/design-tokens](https://www.npmjs.com/package/@digital-go-jp/design-tokens)をベースにしたPanda CSSのプリセットライブラリです。デジタル庁のデザインシステムに準拠したデザイントークンをPanda CSSで使用できるように統合したパッケージです。

## 主な機能
- デジタル庁のデザイントークンをPanda CSS形式で提供
- ブレークポイント、カラー、タイポグラフィ、シャドウ、角丸などのデザイントークン
- セマンティックカラー（success、error、warning、focusなど）
- 88種類のテキストスタイル（Dsp、Std、Dns、Oln、Monoカテゴリ）
- TypeScript完全対応

## プロジェクト構造
- `src/`: メインのソースコード
  - `preset.ts`: プリセットの実装
  - `index.ts`: re-exportのみ
  - `colors/`: カラートークン（primitive、semantic）
  - `typography/`: タイポグラフィトークン（フォント、サイズ、スタイルなど）
  - `breakpoints.ts`: ブレークポイント
  - `radii.ts`: 角丸
  - `shadows.ts`: シャドウ
  - `spacing.ts`, `sizes.ts`: 空のオブジェクト（将来拡張用）
- `examples/`: 使用例
  - `next/`: Next.js例
  - `studio/`: Panda Studio例

## パッケージ情報
- 名前: `@togana/digital-go-jp-panda-preset`
- バージョン: 0.0.29
- ライセンス: MIT
- CommonJS・ESModules両対応
