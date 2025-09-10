import { expect, it } from 'vitest';
import { shadows } from './shadows';

it('期待されるシャドウレベルがすべて定義されている', () => {
  const expectedShadows = [1, 2, 3, 4, 5, 6, 7, 8] as const;

  expectedShadows.forEach((level) => {
    const shadowToken = shadows[level];
    expect(shadowToken).toBeDefined();
    expect(shadowToken.value).toBeTruthy();
    expect(typeof shadowToken.value).toBe('string');
  });
});

it('シャドウ値が有効なCSS shadow値を持つ', () => {
  Object.entries(shadows).forEach(([_level, shadowToken]) => {
    // CSS shadow値の基本的な形式をチェック
    expect(shadowToken.value).toMatch(/^[\d\s\w(),#.-]+$/);
    expect(shadowToken.value.length).toBeGreaterThan(0);
  });
});

it('シャドウ値がエレベーション概念に基づいている', () => {
  // デジタル庁デザインシステムではElevation 1-8が定義されている
  expect(Object.keys(shadows)).toHaveLength(8);
});
