import { expect, it } from 'vitest';
import { sizes } from './sizes';

it('サイズオブジェクトが定義されている', () => {
  expect(sizes).toBeDefined();
  expect(typeof sizes).toBe('object');
});

it('サイズオブジェクトが空である', () => {
  // 現在の実装では空のオブジェクトが意図的に設定されている
  expect(Object.keys(sizes)).toHaveLength(0);
});
