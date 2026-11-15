import { expect, it } from 'vitest';
import { sizes } from './sizes';

it('サイズのトークンを定義していない', () => {
  expect(sizes).toEqual({});
});
