import { expect, it } from 'vitest';
import { breakpoints } from './breakpoints';

it('ブレークポイントがデザインシステムの値で定義されている', () => {
  expect(breakpoints).toEqual({ md: '768px' });
});
