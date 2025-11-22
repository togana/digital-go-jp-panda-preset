# テスト戦略

## テストフレームワーク
- **Vitest 4.0.13**: 高速テストランナー（`pnpm test`/`test:watch`で利用）
- **カバレッジ**: `@vitest/coverage-v8`によるV8カバレッジ。100%維持が前提。
- **環境**: Node.js（ESM/CJS双方をtsdown出力で検証）

## テストファイル構造
プロジェクトには17個のテストファイルがあり、合計69個のテスト：

### 個別ファイルテスト（index.tsを除く全実装ファイル）
- `breakpoints.test.ts`: ブレークポイント（1テスト）
- `radii.test.ts`: 角丸値（3テスト）
- `shadows.test.ts`: シャドウ（3テスト）
- `spacing.test.ts`: スペーシング（2テスト）
- `sizes.test.ts`: サイズ（2テスト）
- `colors/primitive.test.ts`: プリミティブカラー（5テスト）
- `colors/semantic.test.ts`: セマンティックカラー（7テスト）
- `typography/font-sizes.test.ts`: フォントサイズ（2テスト）
- `typography/font-weights.test.ts`: フォントウェイト（3テスト）
- `typography/fonts.test.ts`: フォントファミリー（4テスト）
- `typography/letter-spacings.test.ts`: 文字間隔（4テスト）
- `typography/line-heights.test.ts`: 行間（2テスト）
- `typography/text-styles.test.ts`: テキストスタイル（7テスト）

### 統合・re-exportテスト
- `index.test.ts`: メインindex.tsの再エクスポート（2テスト）
- `colors/index.test.ts`: colorsディレクトリindex.ts（4テスト）
- `typography/index.test.ts`: typographyディレクトリindex.ts（7テスト）
- `preset.test.ts`: プリセット全体統合テスト（11テスト）

## テスト方針
- **フラット構造**: describeブロックのネストを避ける
- **日本語記述**: テスト名は日本語で明確に
- **網羅性**: 各実装ファイルに対応するテストファイル必須
- **再エクスポート確認**: index.tsファイルの動作検証
- **型安全性**: TypeScriptコンパイル時の型チェック
- **デザインシステム準拠**: デジタル庁の仕様との整合性確認
