# デザインパターンとガイドライン

## アーキテクチャパターン

### 1. Re-exportパターン
```typescript
// index.ts（エントリーポイント）
export { preset as default } from './preset';

// colors/index.ts（中間aggregator）
export { colors } from './primitive';
export { semanticColors } from './semantic';
```
- **目的**: モジュールの境界を明確にし、利用者に分かりやすいAPIを提供
- **利点**: 内部構造変更時の影響範囲限定

### 2. definePresetパターン
```typescript
const definePreset = <T extends Preset>(config: T) => config;

export const preset = definePreset({
  name: '@togana/digital-go-jp-panda-preset',
  theme: { ... }
});
```
- **目的**: 型安全性を保ちつつ設定オブジェクトを定義
- **利点**: Panda CSS Preset型との整合性保証

### 3. satisfiesパターン
```typescript
export const sizes = {} as const satisfies Tokens['sizes'];
```
- **目的**: 型制約を満たしつつ型推論を保持
- **利点**: 将来の拡張性と現在の型安全性の両立

## デザイントークン設計原則

### 1. プリミティブ vs セマンティック分離
- **プリミティブ**: `colors/primitive.ts`（blue, red, greyなど）
- **セマンティック**: `colors/semantic.ts`（success, error, warningなど）
- **理由**: 用途と実装の分離、再利用性向上

### 2. テキストスタイル命名規則
```
{Category}-{Size}{Weight}-{LineHeight}
例: Dsp-64N-140, Std-16B-170, Mono-14N-150
```
- **Category**: Dsp(Display), Std(Standard), Dns(Dense), Oln(Outline), Mono(Monospace)
- **Weight**: N(Normal), B(Bold)
- **LineHeight**: 100-175の数値

### 3. 空オブジェクトパターン
```typescript
export const spacing = {} as const satisfies Tokens['spacing'];
```
- **目的**: 将来拡張予定だが現在は未使用の領域
- **利点**: APIの一貫性保持、段階的実装

## テストパターン

### 1. フラット構造原則
```typescript
// ❌ 避ける
describe('colors', () => {
  describe('primitive', () => {
    it('should work', () => {});
  });
});

// ✅ 推奨
it('プリミティブカラーが正しく定義されている', () => {});
```

### 2. 再エクスポート検証パターン
```typescript
it('primitive.tsからのcolors再エクスポートが正しく動作する', () => {
  expect(colors).toBe(primitiveColors);
});
```

## 拡張性ガイドライン

### 新トークン追加時
1. 対応する型定義確認
2. 実装ファイル作成
3. index.tsで再エクスポート
4. preset.tsでトークン追加
5. テストファイル作成

### 新カテゴリ追加時
1. 新ディレクトリ作成
2. index.ts作成（再エクスポート用）
3. 個別実装ファイル作成
4. メインpreset.tsに統合
5. 統合テスト追加
