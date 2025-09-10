# コーディングスタイルと規約

## Biome設定 (.biome.json)

### フォーマット設定
- **インデント**: 2スペース
- **行幅**: 100文字
- **引用符**: シングルクォート ('single')
- **JSX引用符**: シングルクォート
- **末尾カンマ**: 常に追加 ('all')  
- **セミコロン**: 常に追加 ('always')
- **アロー関数の括弧**: 常に追加 ('always')

### リント規則
- **推奨ルール**: 有効
- **パラメータ再代入**: エラー
- **as const アサーション**: エラー
- **デフォルトパラメータ位置**: エラー
- **enum初期化**: エラー
- **自己終了要素**: エラー
- **単一変数宣言**: エラー

## TypeScript規約
- **型定義**: `@pandacss/types` を活用
- **const assertions**: `as const satisfies Type` パターン使用
- **型安全性**: 厳密な型チェック
- **エクスポート**: `export { name } from './module'` パターン

## ファイル命名規約
- **ディレクトリ**: kebab-case (`colors/`, `typography/`)
- **ファイル**: kebab-case (`font-sizes.ts`, `semantic.ts`)
- **変数**: camelCase (`fontSizes`, `semanticColors`)
- **定数**: camelCase with const assertion

## コード構造パターン
```typescript
// 1. インポート
import tokens from '@digital-go-jp/design-tokens';
import type { Tokens } from '@pandacss/types';

// 2. 型定義とデータ構造
export const example = {
  key: { value: tokens.Something.$value },
} as const satisfies Tokens['example'];
```