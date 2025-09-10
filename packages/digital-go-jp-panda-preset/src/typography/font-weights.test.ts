import { expect, it } from 'vitest';
import { fontWeights } from './font-weights';

it('ノーマルフォントウェイトが定義されている', () => {
  expect(fontWeights.N).toBeDefined();
  expect(fontWeights.N.value).toBeTruthy();
  expect(typeof fontWeights.N.value).toBe('string');
});

it('ボールドフォントウェイトが定義されている', () => {
  expect(fontWeights.B).toBeDefined();
  expect(fontWeights.B.value).toBeTruthy();
  expect(typeof fontWeights.B.value).toBe('string');
});

it('フォントウェイトが有効なCSS値を持つ', () => {
  // CSS font-weightの値は数値または文字列
  const normalWeight = fontWeights.N.value;
  const boldWeight = fontWeights.B.value;

  // 数値（400, 700など）または文字列（normal, boldなど）
  expect(normalWeight).toMatch(/^\d{3}$|^(normal|bold|lighter|bolder)$/);
  expect(boldWeight).toMatch(/^\d{3}$|^(normal|bold|lighter|bolder)$/);
});
