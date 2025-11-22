# 技術アーキテクチャ

## 技術スタック
- **言語**: TypeScript 5.9.3（`@tsconfig/node24`ベース）
- **ビルドツール**: tsdown 0.16.6（CJS/ESM/型定義を同時生成）
- **パッケージマネージャー**: pnpm（ルートはTurboでワークスペースをまとめて実行）
- **リンター/フォーマッター**: Biome 2.3.7
- **テストフレームワーク**: Vitest 4.0.13 + `@vitest/coverage-v8`
- **依存関係**:
  - `@digital-go-jp/design-tokens`: 1.1.2（デジタル庁デザイントークン）
  - `@pandacss/types`: 1.5.1（Panda CSS型定義）

## ビルド設定
- **tsdown**: `tsdown.config.mts`で`src/index.ts`をエントリに指定し、`cjs`/`esm`/`d.ts`を出力。`clean`・`minify`・`treeshake`を有効化。
- **スクリプト**: `pnpm build`（=tsdown）、`pnpm prepare`/`prepublishOnly`はビルドをフック
- **TypeScript**: `extends: @tsconfig/node24`、`rootDir: src`。strictモード相当でトークン型検証を実施。
- **出力**: `dist/index.js`, `index.mjs`, `index.d.ts`, `index.d.mts`

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