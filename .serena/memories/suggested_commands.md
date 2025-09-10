# 推奨コマンド一覧

## 開発環境セットアップ
```bash
# 依存関係インストール
pnpm install

# 準備処理（ビルド等）
pnpm prepare
```

## ビルド関連
```bash
# 全体ビルド
pnpm build

# メインパッケージのみビルド
pnpm digital-go-jp-panda-preset build

# Studioサンプルビルド
pnpm build:studio
```

## 開発サーバー
```bash
# Studioサンプル開発サーバー
pnpm example-studio studio

# Next.jsサンプル開発サーバー
pnpm example-next dev
```

## コード品質
```bash
# メインパッケージでのフォーマット
pnpm digital-go-jp-panda-preset format

# メインパッケージでのリント
pnpm digital-go-jp-panda-preset lint

# CI用チェック
pnpm ci
```

## パッケージ管理
```bash
# 特定パッケージでコマンド実行
pnpm -F '@togana/digital-go-jp-panda-preset' <command>
pnpm -F 'example-next' <command>
pnpm -F 'example-studio' <command>
```

## リリース関連
```bash
# changeset生成
pnpm changeset

# バージョンアップとリリース（GitHub Actions）
# main ブランチへマージ後自動実行
```

## Darwin (macOS) システムコマンド
```bash
# ファイル検索
find . -name "*.ts" -type f

# 内容検索  
grep -r "pattern" .

# ディレクトリ移動・リスト
cd path/to/dir
ls -la

# Git操作
git status
git add .
git commit -m "message"
git push
```