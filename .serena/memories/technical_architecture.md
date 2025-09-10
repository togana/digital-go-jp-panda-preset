# 技術アーキテクチャ

## 技術スタック
- **言語**: TypeScript 5.9.2
- **ビルドツール**: tsup 8.5.0
- **パッケージマネージャー**: pnpm
- **リンター/フォーマッター**: Biome 2.2.2
- **テストフレームワーク**: Vitest 3.2.4
- **依存関係**:
  - `@digital-go-jp/design-tokens`: 1.1.1（デジタル庁デザイントークン）
  - `@pandacss/types`: 1.2.0（Panda CSS型定義）

## ビルド設定
- **tsup**: CommonJS・ESModules両対応、型定義ファイル生成
- **TypeScript**: Node20設定ベース、src/をルートディレクトリに設定
- **出力**: dist/にindex.js, index.mjs, index.d.ts, index.d.mtsを生成

## モジュール構造
- **index.ts**: preset.tsからの単純な再エクスポート
- **preset.ts**: 実際のプリセット定義
- **colors/index.ts**: primitive.ts、semantic.tsからの再エクスポート
- **typography/index.ts**: 6つのタイポグラフィファイルからの再エクスポート

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