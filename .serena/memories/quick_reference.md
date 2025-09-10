# クイックリファレンス

## プロジェクト基本情報
- **名前**: `@togana/digital-go-jp-panda-preset`
- **種類**: Panda CSSプリセットライブラリ
- **ベース**: デジタル庁デザイントークン
- **言語**: TypeScript
- **パッケージマネージャー**: pnpm

## 重要なディレクトリ
```
packages/digital-go-jp-panda-preset/
├── src/
│   ├── index.ts              # エントリーポイント（re-export）
│   ├── preset.ts             # プリセット実装
│   ├── colors/               # カラートークン
│   │   ├── index.ts          # re-export
│   │   ├── primitive.ts      # プリミティブカラー
│   │   └── semantic.ts       # セマンティックカラー
│   ├── typography/           # タイポグラフィトークン
│   │   ├── index.ts          # re-export
│   │   ├── font-sizes.ts     # フォントサイズ
│   │   ├── font-weights.ts   # フォントウェイト
│   │   ├── fonts.ts          # フォントファミリー
│   │   ├── letter-spacings.ts # 文字間隔
│   │   ├── line-heights.ts   # 行間
│   │   └── text-styles.ts    # テキストスタイル
│   ├── breakpoints.ts        # ブレークポイント
│   ├── radii.ts             # 角丸
│   ├── shadows.ts           # シャドウ
│   ├── spacing.ts           # スペーシング（空）
│   └── sizes.ts             # サイズ（空）
└── *.test.ts                # 各ファイルに対応するテスト
```

## よく使うコマンド
```bash
# 開発時
pnpm test          # テスト実行
pnpm build         # ビルド
pnpm format        # フォーマット

# 確認時
pnpm ci            # リント+テスト
pnpm test:coverage # カバレッジ確認
```

## ファイル作成時のルール
1. 新実装ファイル → 対応する`.test.ts`必須
2. `index.ts`は再エクスポートのみ
3. テストは日本語名、フラット構造
4. `as const satisfies`で型安全性確保

## デザイントークン構造
```typescript
preset.theme = {
  breakpoints,           # ブレークポイント
  tokens: {              # メイントークン
    colors, radii, fontSizes, fontWeights,
    lineHeights, letterSpacings, fonts,
    spacing, sizes, shadows
  },
  semanticTokens: {      # セマンティックトークン
    colors: semanticColors
  },
  textStyles             # テキストスタイル（88種類）
}
```

## トラブルシューティング
- **ビルドエラー**: 型定義確認、`pnpm build`
- **テスト失敗**: `pnpm test`で詳細確認
- **リントエラー**: `pnpm format`で自動修正
- **カバレッジ不足**: 新ファイルのテスト追加必要
