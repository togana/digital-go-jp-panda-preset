import { expect, it } from 'vitest';
import { preset } from './preset';

it('プリセットが正しい名前を持つ', () => {
  expect(preset.name).toBe('@togana/digital-go-jp-panda-preset');
});

it('プリセットがテーマオブジェクトを持つ', () => {
  expect(preset.theme).toBeDefined();
  expect(typeof preset.theme).toBe('object');
});

it('プリセットが必要なトークンカテゴリをすべて含む', () => {
  const { tokens } = preset.theme;

  expect(tokens).toBeDefined();
  expect(tokens.colors).toBeDefined();
  expect(tokens.radii).toBeDefined();
  expect(tokens.fontSizes).toBeDefined();
  expect(tokens.fontWeights).toBeDefined();
  expect(tokens.lineHeights).toBeDefined();
  expect(tokens.letterSpacings).toBeDefined();
  expect(tokens.fonts).toBeDefined();
  expect(tokens.spacing).toBeDefined();
  expect(tokens.sizes).toBeDefined();
  expect(tokens.shadows).toBeDefined();
});

it('プリセットがセマンティックトークンを含む', () => {
  const { semanticTokens } = preset.theme;

  expect(semanticTokens).toBeDefined();
  expect(semanticTokens.colors).toBeDefined();
});

it('プリセットがテキストスタイルを含む', () => {
  const { textStyles } = preset.theme;

  expect(textStyles).toBeDefined();
  expect(Object.keys(textStyles).length).toBeGreaterThan(0);
});

it('プリセットがブレークポイントを含む', () => {
  const { breakpoints: presetBreakpoints } = preset.theme;

  expect(presetBreakpoints).toBeDefined();
  expect(Object.keys(presetBreakpoints).length).toBeGreaterThan(0);
});

it('プリセットの各トークンが空でない値を持つ', () => {
  const { tokens } = preset.theme;

  // 各トークンカテゴリが空でないことを確認
  expect(Object.keys(tokens.colors).length).toBeGreaterThan(0);
  expect(Object.keys(tokens.radii).length).toBeGreaterThan(0);
  expect(Object.keys(tokens.fontSizes).length).toBeGreaterThan(0);
  expect(Object.keys(tokens.fontWeights).length).toBeGreaterThan(0);
  expect(Object.keys(tokens.lineHeights).length).toBeGreaterThan(0);
  expect(Object.keys(tokens.letterSpacings).length).toBeGreaterThan(0);
  expect(Object.keys(tokens.fonts).length).toBeGreaterThan(0);
  expect(Object.keys(tokens.shadows).length).toBeGreaterThan(0);
});

it('プリセットで有効な値を spacing と sizes は持たない', () => {
  const { tokens } = preset.theme;
  expect(Object.keys(tokens.spacing).length).toBe(0);
  expect(Object.keys(tokens.sizes).length).toBe(0);
});

it('プリセットがPanda CSS Preset型に準拠する', () => {
  // 基本的なPreset型の要件をチェック
  expect(preset).toHaveProperty('name');
  expect(preset).toHaveProperty('theme');
  expect(typeof preset.name).toBe('string');
  expect(typeof preset.theme).toBe('object');
});

it('テキストスタイルがデジタル庁デザインシステムの命名規則に従う', () => {
  const { textStyles } = preset.theme;
  const styleNames = Object.keys(textStyles);

  // 各カテゴリのスタイルが存在することを確認
  const hasDisplayStyles = styleNames.some((name) => name.startsWith('Dsp-'));
  const hasStandardStyles = styleNames.some((name) => name.startsWith('Std-'));
  const hasDenseStyles = styleNames.some((name) => name.startsWith('Dns-'));
  const hasOutlineStyles = styleNames.some((name) => name.startsWith('Oln-'));
  const hasMonoStyles = styleNames.some((name) => name.startsWith('Mono-'));

  expect(hasDisplayStyles).toBe(true);
  expect(hasStandardStyles).toBe(true);
  expect(hasDenseStyles).toBe(true);
  expect(hasOutlineStyles).toBe(true);
  expect(hasMonoStyles).toBe(true);
});

it('セマンティックカラーがデジタル庁デザインシステムの命名規則に従う', () => {
  const { semanticTokens } = preset.theme;
  const semanticColorNames = Object.keys(semanticTokens.colors);

  // デジタル庁サービスに必要なセマンティックカラーが存在することを確認
  const hasSuccessColors = semanticColorNames.some((name) => name.includes('success'));
  const hasErrorColors = semanticColorNames.some((name) => name.includes('error'));
  const hasWarningColors = semanticColorNames.some((name) => name.includes('warning'));
  const hasFocusColors = semanticColorNames.some((name) => name.includes('focus'));

  expect(hasSuccessColors).toBe(true);
  expect(hasErrorColors).toBe(true);
  expect(hasWarningColors).toBe(true);
  expect(hasFocusColors).toBe(true);
});
