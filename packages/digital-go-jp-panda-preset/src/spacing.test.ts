import { expect, it } from 'vitest';
import { spacing } from './spacing';

it('スペーシングのトークンを定義していない', () => {
  expect(spacing).toEqual({});
});
