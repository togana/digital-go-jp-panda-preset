# プロジェクト概要

## プロジェクトの目的
`@togana/digital-go-jp-panda-preset` は、日本のデジタル庁が提供するデザインシステム（[@digital-go-jp/design-tokens](https://www.npmjs.com/package/@digital-go-jp/design-tokens)）をベースにした Panda CSS のプリセットパッケージです。

## 主要機能
- デジタル庁公式デザイントークンをPanda CSSで利用可能
- 88種類の包括的なテキストスタイル定義
- プリミティブカラー（10色系 × 13段階）とセマンティックカラー
- TypeScript完全対応で型安全性確保
- 日本デジタル庁デザインガイドライン準拠のWebアプリケーション構築支援

## 技術スタック
- **言語**: TypeScript
- **ビルドツール**: tsup
- **リント・フォーマット**: Biome
- **モノレポ管理**: Turbo
- **パッケージマネージャー**: pnpm
- **CSS フレームワーク**: Panda CSS
- **依存関係**: @digital-go-jp/design-tokens, @pandacss/types

## プロジェクト構造
```
/
├── packages/digital-go-jp-panda-preset/  # メインパッケージ
├── examples/next/                        # Next.js サンプル
├── examples/studio/                      # Panda Studio サンプル
├── turbo.json                           # Turbo設定
├── pnpm-workspace.yaml                  # ワークスペース設定
└── package.json                         # ルートパッケージ設定
```

## 出力形式
- CommonJS (index.js)
- ES Modules (index.mjs)  
- TypeScript型定義 (index.d.ts, index.d.mts)