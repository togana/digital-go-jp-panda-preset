# 技術アーキテクチャ

## 技術スタック
- **言語**: TypeScript 7.0.2（`@tsconfig/node26`ベース）
- **ビルドツール**: tsdown 0.23.7（CJS/ESM/型定義を同時生成）
- **パッケージマネージャー**: pnpm 12（ルートはTurboでワークスペースをまとめて実行）
- **リンター/フォーマッター**: Biome 2.6.7
- **テストフレームワーク**: Vitest 4.1.12 + `@vitest/coverage-v8`
- **依存関係**:
  - `@digital-go-jp/design-tokens`: 2.1.0（デジタル庁デザイントークン）
  - `@pandacss/types`: 2.5.0（Panda CSS v2 の型定義。型のみ利用するため devDependencies）

## ビルド設定
- **tsdown**: `tsdown.config.mts`で`src/index.ts`をエントリに指定し、`cjs`/`esm`/`d.ts`を出力。`clean`・`minify`・`treeshake`を有効化。
- **スクリプト**: `pnpm build`（=tsdown）、`pnpm prepare`/`prepublishOnly`はビルドをフック
- **TypeScript**: `extends: @tsconfig/node26`、`rootDir: src`。strictモード相当でトークン型検証を実施。
- **出力**: `dist/index.cjs`, `index.mjs`, `index.d.cts`, `index.d.mts`

## モジュール構造
- **index.ts**: preset.tsからの単純な再エクスポート
- **preset.ts**: 実際のプリセット定義
- **colors/index.ts**: primitive.ts、semantic.tsからの再エクスポート
- **typography/index.ts**: 6つのタイポグラフィファイルからの再エクスポート
- **examples/next & studio**: プリセットをNext.jsアプリとPanda Studioで検証するためのサンプル

## デザイントークン構造
```typescript
preset = {
  name: '@togana/digital-go-jp-panda-preset',
  theme: {
    breakpoints: {...},
    tokens: {
      colors, radii, fontSizes, fontWeights, 
      lineHeights, letterSpacings, fonts, 
      spacing, sizes, shadows
    },
    semanticTokens: { colors: semanticColors },
    textStyles: {...}
  }
}
```