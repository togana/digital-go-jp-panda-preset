import { expect, it } from 'vitest';
import { spacing } from './spacing';

it('スペーシングオブジェクトが定義されている', () => {
  expect(spacing).toBeDefined();
  expect(typeof spacing).toBe('object');
});

it('スペーシングオブジェクトが空である', () => {
  // 現在の実装では空のオブジェクトが意図的に設定されている
  expect(Object.keys(spacing)).toHaveLength(0);
});
