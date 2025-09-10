import { expect, it } from 'vitest';
import { fontSizes } from './font-sizes';

it('期待されるすべてのフォントサイズが定義されている', () => {
  const expectedFontSizes = [14, 16, 17, 18, 20, 22, 24, 26, 28, 32, 36, 45, 48, 57, 64];

  expectedFontSizes.forEach((size) => {
    const fontSize = fontSizes[size as keyof typeof fontSizes];
    expect(fontSize).toBeDefined();
    expect(fontSize.value).toBeTruthy();
    expect(typeof fontSize.value).toBe('string');
  });
});

it('フォントサイズが有効なCSS値を持つ', () => {
  Object.entries(fontSizes).forEach(([_size, fontSizeToken]) => {
    // px または rem 単位のCSS値をチェック
    expect(fontSizeToken.value).toMatch(/^\d+(\.\d+)?(px|rem)$/);
  });
});
