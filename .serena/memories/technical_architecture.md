# 技術アーキテクチャ

## パッケージ構成

### メインパッケージ (`@togana/digital-go-jp-panda-preset`)
```json
{
  "name": "@togana/digital-go-jp-panda-preset",
  "version": "0.0.29",
  "main": "./dist/index.js",
  "module": "./dist/index.mjs", 
  "types": "./dist/index.d.ts"
}
```

### 主要依存関係
- `@digital-go-jp/design-tokens`: "1.1.1" - デジタル庁デザインシステム
- `@pandacss/types`: "1.2.0" - Panda CSS型定義

### 開発依存関係
- `@biomejs/biome`: "2.2.2" - リント・フォーマット
- `tsup`: "8.5.0" - TypeScriptビルド
- `typescript`: "5.9.2" - TypeScript コンパイラ

## ビルドシステム

### tsup設定
```typescript
export default defineConfig({
  entry: { index: 'src/index.ts' },
  dts: true,           // 型定義生成
  format: ['cjs', 'esm'], // CommonJS + ES Modules
  splitting: false,
  sourcemap: false,
  clean: true,
  minify: true,
  treeshake: true
});
```

### 出力ファイル
- `dist/index.js` - CommonJS版
- `dist/index.mjs` - ES Modules版  
- `dist/index.d.ts` - CommonJS型定義
- `dist/index.d.mts` - ES Modules型定義

## モノレポ構造 (Turbo)

### ワークスペース
```yaml
packages:
  - packages/*    # メインパッケージ
  - examples/*    # サンプル実装
```

### Turboタスク
```json
{
  "prepare": { "dependsOn": ["^prepare"] },
  "build": { "dependsOn": ["^build"] },
  "build:studio": { "dependsOn": ["example-studio#build"] },
  "ci": {}
}
```

## エントリーポイント

### プリセット本体
`packages/digital-go-jp-panda-preset/src/index.ts`
```typescript
const preset = definePreset({
  name: '@togana/digital-go-jp-panda-preset',
  theme: { /* デザイントークン */ }
});
export default preset;
```

### サンプル実装
- **Next.js**: `examples/next/` - Webフォント最適化例
- **Studio**: `examples/studio/` - デザイントークンプレビュー

## 設計原則
1. **Zero Runtime**: ビルド時にCSS生成
2. **Type Safety**: 全てのトークンに型定義
3. **Tree Shaking**: 未使用トークンの除去対応
4. **Government Standards**: デジタル庁デザインガイドライン準拠