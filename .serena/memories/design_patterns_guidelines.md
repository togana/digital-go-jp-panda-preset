# デザインパターンとガイドライン

## アーキテクチャパターン

### 1. モジュラー設計
```typescript
// ディレクトリ別機能分割
src/
├── colors/           # カラー関連
│   ├── primitive.ts  # プリミティブカラー
│   ├── semantic.ts   # セマンティックカラー
│   └── index.ts      # re-export
├── typography/       # タイポグラフィ関連
│   ├── font-sizes.ts
│   ├── font-weights.ts
│   ├── fonts.ts
│   ├── letter-spacings.ts
│   ├── line-heights.ts
│   ├── text-styles.ts
│   └── index.ts
└── index.ts          # メインエントリーポイント
```

### 2. デザイントークン設計パターン
```typescript
// パターン: デザイントークン参照
import tokens from '@digital-go-jp/design-tokens';
import type { Tokens } from '@pandacss/types';

export const example = {
  key: { value: tokens.Category.SubCategory[value].$value },
} as const satisfies Tokens['category'];
```

## 命名規約

### テキストスタイル命名
```
{Category}-{Size}{Weight}-{LineHeight}
例: 'Std-32B-150' = Standard 32px Bold 150%

Categories:
- Dsp: Display (表示用大見出し)
- Std: Standard (標準見出し・本文)  
- Dns: Dense (密な表示)
- Oln: Outline (アウトライン表示)
- Mono: Monospace (等幅フォント)

Weight:
- N: Normal (400)
- B: Bold (700)
```

### カラー命名
```typescript
// プリミティブ: 色名-明度
'blue-500', 'grey-100'

// セマンティック: 意味-レベル  
'success-1', 'error-2', 'warning-yellow-1'
```

## 設計原則

### 1. デジタル庁デザインシステム準拠
- デジタル庁公式デザイントークン使用必須
- ユーザビリティとアクセシビリティ重視
- 一貫性のあるデザイン言語

### 2. 型安全性
```typescript
// 良い例: 型制約付きconst assertion
export const colors = {
  primary: { value: tokens.Color.Blue[500].$value }
} as const satisfies Tokens['colors'];

// 避ける例: any型や型なし
export const colors = {
  primary: someValue // 型情報なし
};
```

### 3. 拡張性
```typescript
// Presetパターン: 設定可能な構造
const preset = definePreset({
  name: '@togana/digital-go-jp-panda-preset',
  theme: {
    tokens: { /* ... */ },
    semanticTokens: { /* ... */ },
    textStyles: { /* ... */ }
  }
});
```

### 4. 後方互換性
- 破壊的変更は major バージョン更新
- 新機能は minor バージョン更新  
- バグ修正は patch バージョン更新