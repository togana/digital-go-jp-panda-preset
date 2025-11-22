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
- `packages/digital-go-jp-panda-preset/`: 実際のプリセットパッケージ
  - `src/`: メインのソースコード
    - `preset.ts`: プリセット定義（tokens/semantic/textStylesを集約）
    - `index.ts`: `preset`の再エクスポート
    - `colors/`: プリミティブ・セマンティックカラー
    - `typography/`: フォント、サイズ、ウェイト、テキストスタイル
    - `breakpoints.ts` / `radii.ts` / `shadows.ts`
    - `spacing.ts` / `sizes.ts`: 空オブジェクトで将来拡張予定
  - `dist/`: `tsdown`ビルド成果物（CJS/ESM/型定義）
  - `tsdown.config.mts`, `vitest.config.ts`, `biome.json`: ビルド/テスト/整形設定
- `examples/`: 動作確認用サンプル
  - `next/`: Next.js 16 + Panda CSS構成のデモアプリ
  - `studio/`: Panda Studioでトークンをブラウズするスタンドアロンページ

## パッケージ情報
- 名前: `@togana/digital-go-jp-panda-preset`
- バージョン: 0.0.35
- ライセンス: MIT
- CommonJS・ESModules両対応
