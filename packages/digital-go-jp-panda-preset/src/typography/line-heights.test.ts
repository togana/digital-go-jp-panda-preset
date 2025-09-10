import { expect, it } from 'vitest';
import { lineHeights } from './line-heights';

it('期待される行間値がすべて定義されている', () => {
  const expectedLineHeights = [100, 120, 130, 140, 150, 160, 170, 175] as const;

  expectedLineHeights.forEach((height) => {
    const lineHeight = lineHeights[height];
    expect(lineHeight).toBeDefined();
    expect(lineHeight.value).toBeTruthy();
    expect(typeof lineHeight.value).toBe('number');
  });
});

it('行間値が有効なCSS line-height値を持つ', () => {
  Object.entries(lineHeights).forEach(([_height, lineHeightToken]) => {
    // 数値（1.5など）
    expect(typeof lineHeightToken.value).toBe('number');
    expect(lineHeightToken.value).toBeGreaterThan(0);
  });
});
