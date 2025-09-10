import { expect, it } from 'vitest';
import { breakpoints } from './breakpoints';

it('ブレークポイントがmdを定義している', () => {
  expect(breakpoints.md).toBeDefined();
  expect(breakpoints.md).toBe('768px');
});
