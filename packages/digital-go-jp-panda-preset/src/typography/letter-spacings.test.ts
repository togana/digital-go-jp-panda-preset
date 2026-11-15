import { expect, it } from 'vitest';
import { letterSpacings } from './letter-spacings';

it('文字間隔がデザインシステムの値で定義されている', () => {
  expect(letterSpacings).toEqual({
    0: { value: '0' },
    0.01: { value: '0.01em' },
    0.02: { value: '0.02em' },
  });
});
