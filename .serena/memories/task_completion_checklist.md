# タスク完了時のチェックリスト

## コード変更後の必須手順

### 1. コード品質チェック
```bash
# Biomeでフォーマット・リント
pnpm digital-go-jp-panda-preset format
pnpm digital-go-jp-panda-preset lint

# CI全体チェック
pnpm ci
```

### 2. ビルド確認
```bash
# メインパッケージビルド
pnpm digital-go-jp-panda-preset build

# 全体ビルド確認
pnpm build
```

### 3. サンプル動作確認
```bash
# Studioサンプル確認
pnpm example-studio studio

# Next.jsサンプル確認  
pnpm example-next dev
```

### 4. 型チェック
```bash
# TypeScript型チェック（各パッケージで）
pnpm digital-go-jp-panda-preset tsc --noEmit
```

## リリース準備（必要に応じて）

### 1. Changeset作成
```bash
pnpm changeset
# 変更の種類選択（patch/minor/major）
# 変更内容サマリ記載
```

### 2. Git コミット
```bash
git add .
git commit -m "feat: 変更内容の説明"
git push
```

## 品質基準
- ✅ Biome チェック通過
- ✅ TypeScript型エラーなし
- ✅ ビルド成功
- ✅ サンプルアプリ動作確認
- ✅ 適切なcommitメッセージ
- ✅ 必要に応じてchangeset作成

## エラー対応
- **Biomeエラー**: `pnpm digital-go-jp-panda-preset format` で自動修正
- **型エラー**: TypeScript設定とimport文確認
- **ビルドエラー**: 依存関係とexport文確認