import { expect, it } from 'vitest';
import { letterSpacings } from './letter-spacings';

it('期待される文字間隔値がすべて定義されている', () => {
  const expectedLetterSpacings = [0, 0.01, 0.02] as const;

  expectedLetterSpacings.forEach((spacing) => {
    const letterSpacing = letterSpacings[spacing];
    expect(letterSpacing).toBeDefined();
    expect(letterSpacing.value).toBeTruthy();
    expect(typeof letterSpacing.value).toBe('string');
  });
});

it('文字間隔値が正しいCSS値を持つ', () => {
  expect(letterSpacings[0].value).toBe('0');
  expect(letterSpacings[0.01].value).toBe('0.01em');
  expect(letterSpacings[0.02].value).toBe('0.02em');
});

it('文字間隔値が有効なCSS letter-spacing値である', () => {
  Object.entries(letterSpacings).forEach(([_spacing, letterSpacingToken]) => {
    // 0 または em単位の値
    expect(letterSpacingToken.value).toMatch(/^(0|\d+(\.\d+)?em)$/);
  });
});

it('テキストスタイルでの使用を想定した値である', () => {
  // 各値が適切なletter-spacing値であることを確認
  expect(letterSpacings[0].value).toBe('0'); // デフォルト
  expect(letterSpacings[0.01].value).toBe('0.01em'); // 少し広め
  expect(letterSpacings[0.02].value).toBe('0.02em'); // より広め
});
