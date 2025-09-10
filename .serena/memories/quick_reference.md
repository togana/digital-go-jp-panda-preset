# クイックリファレンス

## 🚀 最初にすること
```bash
# 1. 依存関係インストール
pnpm install

# 2. 準備処理
pnpm prepare

# 3. 開発環境確認
pnpm example-next dev  # Next.js サンプル
pnpm example-studio studio  # Studio サンプル
```

## 📝 よく使うコマンド
```bash
# コード品質チェック
pnpm digital-go-jp-panda-preset format  # フォーマット
pnpm digital-go-jp-panda-preset lint    # リント
pnpm ci                                  # 全体チェック

# ビルド
pnpm build                              # 全体ビルド
pnpm digital-go-jp-panda-preset build  # メインパッケージのみ

# 変更リリース
pnpm changeset                          # バージョン管理
```

## 🎨 デザイントークン構造
```typescript
// カラー: 10色系 × 13段階 + セマンティック
colors.blue[500]     // プリミティブ
semanticColors['success-1']  // セマンティック

// タイポグラフィ: 88種類のテキストスタイル
textStyles['Std-32B-150']  // Standard 32px Bold 150%
textStyles['Mono-14N-150'] // Monospace 14px Normal 150%

// その他
breakpoints.md    // 768px
radii[16]        // 16px角丸
shadows[3]       // Elevation 3
```

## 📁 重要ファイル
- `packages/digital-go-jp-panda-preset/src/index.ts` - メインエントリー
- `packages/digital-go-jp-panda-preset/biome.json` - コード品質設定
- `turbo.json` - モノレポタスク設定
- `pnpm-workspace.yaml` - ワークスペース設定

## 🐛 トラブルシューティング
- **ビルドエラー**: 型定義とimport確認
- **フォーマットエラー**: `pnpm format`で自動修正
- **依存関係エラー**: `pnpm install`で再インストール