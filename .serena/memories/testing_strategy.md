# テスト戦略

## 現状のテスト体制

### テストファイル
現在、専用のテストファイルは見つかりませんでした。プロジェクトは以下の方法で品質を保証しています：

### 1. 型レベルでの検証
```typescript
// TypeScript型制約による検証
export const colors = {
  blue: { 50: { value: tokens.Color.Primitive.Blue[50].$value } }
} as const satisfies Tokens['colors'];
```

### 2. ビルド時検証
```bash
# TypeScriptコンパイルによる型チェック
pnpm build

# サンプルアプリでの動作確認
pnpm example-next dev
pnpm example-studio studio
```

### 3. リント・フォーマットによる品質保証
```bash
# Biomeによるコード品質チェック
pnpm digital-go-jp-panda-preset lint
pnpm digital-go-jp-panda-preset format
```

## 推奨テスト手順

### 新機能開発時
1. **型安全性確認**: TypeScriptコンパイルエラーなし
2. **デザイントークン確認**: `@digital-go-jp/design-tokens`からの値参照
3. **ビルド確認**: dist/ファイル生成成功
4. **サンプル動作確認**: Next.js/Studioでの表示確認

### リリース前チェック
1. **全体ビルド**: `pnpm build`
2. **CI確認**: `pnpm ci`  
3. **サンプルアプリ確認**: 両方のexampleで動作テスト
4. **型定義確認**: `.d.ts`ファイルの妥当性

## 今後のテスト改善案

### 1. ユニットテスト追加
```typescript
// 例: デザイントークン値のテスト
describe('colors', () => {
  it('should have valid blue color values', () => {
    expect(colors.blue[500].value).toMatch(/^#[0-9a-f]{6}$/i);
  });
});
```

### 2. ビジュアルリグレッションテスト
- Storybook + Chromatic等でのスナップショットテスト
- デザイントークン変更時の影響確認

### 3. インテグレーションテスト
- Panda CSS設定の正常性確認
- 生成されるCSSの妥当性チェック