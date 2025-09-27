import { expect, it } from 'vitest';
import { radii } from './radii';

it('期待される角丸値がすべて定義されている', () => {
  const expectedRadii = [4, 6, 8, 12, 16, 24, 32, 'Full'] as const;

  expectedRadii.forEach((radius) => {
    const radiiToken = radii[radius];
    expect(radiiToken).toBeDefined();
    expect(radiiToken.value).toBeTruthy();
    expect(typeof radiiToken.value).toBe('string');
  });
});

it('角丸値が有効なCSS値を持つ', () => {
  Object.entries(radii).forEach(([_radius, radiiToken]) => {
    // px または rem 単位のCSS値をチェック
    expect(radiiToken.value).toMatch(/^\d+(\.\d+)?(px|rem)$/);
  });
});

it('角丸値が8つ定義されている', () => {
  expect(Object.keys(radii)).toHaveLength(8);
});
