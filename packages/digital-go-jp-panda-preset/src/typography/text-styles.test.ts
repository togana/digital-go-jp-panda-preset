import { expect, it } from 'vitest';
import { fontSizes } from './font-sizes';
import { fontWeights } from './font-weights';
import { fonts } from './fonts';
import { letterSpacings } from './letter-spacings';
import { lineHeights } from './line-heights';
import { textStyles } from './text-styles';

it('モノスペーステキストスタイルがコードフォントファミリーを使用する', () => {
  const monoStyles = [
    'Mono-17B-150',
    'Mono-17N-150',
    'Mono-16B-150',
    'Mono-16N-150',
    'Mono-14B-150',
    'Mono-14N-150',
  ] as const;

  monoStyles.forEach((styleName) => {
    const textStyle = textStyles[styleName];
    expect(textStyle).toBeDefined();
    expect(textStyle.value.fontFamily).toBe(fonts.code.value);
  });
});

it('デンステキストスタイルが適切な行間を持つ', () => {
  const denseStyles = ['Dns-17B-130', 'Dns-17N-130', 'Dns-16B-120', 'Dns-16N-120'] as const;

  denseStyles.forEach((styleName) => {
    const textStyle = textStyles[styleName];
    expect(textStyle).toBeDefined();
    expect(textStyle.value.lineHeight).toBeDefined();

    // Denseスタイルは比較的小さな行間を持つ
    const lineHeightValue = textStyle.value.lineHeight;
    expect([lineHeights[120].value, lineHeights[130].value]).toContain(lineHeightValue);
  });
});

it('アウトラインテキストスタイルが100%の行間を持つ', () => {
  const outlineStyles = [
    'Oln-17B-100',
    'Oln-17N-100',
    'Oln-16B-100',
    'Oln-16N-100',
    'Oln-14B-100',
    'Oln-14N-100',
  ] as const;

  outlineStyles.forEach((styleName) => {
    const textStyle = textStyles[styleName];
    expect(textStyle).toBeDefined();
    expect(textStyle.value.lineHeight).toBe(lineHeights[100].value);
  });
});

it('テキストスタイルが一貫した命名パターンを持つ', () => {
  Object.keys(textStyles).forEach((styleName) => {
    // パターン: {Category}-{Size}{Weight}-{LineHeight}
    expect(styleName).toMatch(/^(Dsp|Std|Dns|Oln|Mono)-\d+[BN]-\d+$/);
  });
});

it('すべてのテキストスタイルが必要なプロパティを持つ', () => {
  Object.entries(textStyles).forEach(([_styleName, textStyle]) => {
    expect(textStyle.value.fontFamily).toBeDefined();
    expect(textStyle.value.fontWeight).toBeDefined();
    expect(textStyle.value.fontSize).toBeDefined();
    expect(textStyle.value.lineHeight).toBeDefined();
    expect(textStyle.value.letterSpacing).toBeDefined();
  });
});

it('テキストスタイルが定義済みトークン値のみを使用する', () => {
  Object.entries(textStyles).forEach(([_styleName, textStyle]) => {
    const { fontFamily, fontWeight, fontSize, lineHeight, letterSpacing } = textStyle.value;

    // フォントファミリーがfontsオブジェクトの値であることを確認
    expect([fonts.body.value, fonts.code.value]).toContain(fontFamily);

    // フォントウェイトがfontWeightsオブジェクトの値であることを確認
    expect([fontWeights.N.value, fontWeights.B.value]).toContain(fontWeight);

    // フォントサイズがfontSizesオブジェクトの値であることを確認
    expect(Object.entries(fontSizes).map((f) => f[1].value)).toContain(fontSize);

    // 行間がlineHeightsオブジェクトの値であることを確認
    expect(Object.entries(lineHeights).map((l) => l[1].value)).toContain(lineHeight);

    // 文字間隔がletterSpacingsオブジェクトからの値であることを確認
    expect(Object.entries(letterSpacings).map((l) => l[1].value)).toContain(letterSpacing);
  });
});

it('デジタル庁デザインシステムの命名規則に従う', () => {
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
