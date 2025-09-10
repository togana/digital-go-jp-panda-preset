# 推奨コマンド

## 日常的な開発コマンド
```bash
# パッケージのビルド
pnpm build

# テスト実行
pnpm test

# テスト監視モード
pnpm test:watch

# カバレッジ付きテスト
pnpm test:coverage

# フォーマット（自動修正）
pnpm format

# リント
pnpm lint

# CI用（リント + テスト）
pnpm ci
```

## プロジェクト管理コマンド
```bash
# 依存関係インストール
pnpm install

# パッケージ準備（ビルド）
pnpm prepare

# リリース前のビルド
pnpm prepublishOnly
```

## リリース管理
```bash
# changeset作成（バージョンアップ準備）
pnpm changeset

# リリース
# -> GitHub ActionsでPR作成 -> マージでリリース
```

## システムコマンド（macOS）
```bash
# ファイル検索
find . -name "*.ts" -not -path "*/node_modules/*"

# 内容検索
grep -r "pattern" src/

# ディレクトリ構造表示
tree src/

# Git操作
git status
git add .
git commit -m "message"
git push

# ファイル操作
ls -la
cd path/to/directory
cat filename
```

## Vitest固有
```bash
# 特定ファイルのテスト
pnpm test index.test.ts

# テスト名でフィルタ
pnpm test -t "プリセット"

# UIモードでテスト
pnpm test --ui
```
