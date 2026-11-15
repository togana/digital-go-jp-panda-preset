import tokens from '@digital-go-jp/design-tokens';
import { expect, it } from 'vitest';
import { shadows } from './shadows';

it('シャドウのトークン名が固定されている', () => {
  expect(Object.keys(shadows)).toEqual(['1', '2', '3', '4', '5', '6', '7', '8']);
});

it('シャドウが design-tokens の Elevation と同じキーと値を持つ', () => {
  const upstream = tokens.Elevation;

  expect(Object.keys(shadows)).toEqual(Object.keys(upstream));
  for (const key of Object.keys(upstream) as (keyof typeof upstream)[]) {
    expect(shadows[key].value).toBe(upstream[key].$value);
  }
});
