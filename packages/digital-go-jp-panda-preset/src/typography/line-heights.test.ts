import tokens from '@digital-go-jp/design-tokens';
import { expect, it } from 'vitest';
import { lineHeights } from './line-heights';

it('行の高さのトークン名が固定されている', () => {
  expect(Object.keys(lineHeights)).toEqual([
    '100',
    '120',
    '130',
    '140',
    '150',
    '160',
    '170',
    '175',
  ]);
});

it('行の高さが design-tokens の LineHeight と同じキーと値を持つ', () => {
  const upstream = tokens.LineHeight;

  expect(Object.keys(lineHeights)).toEqual(Object.keys(upstream));
  for (const key of Object.keys(upstream) as (keyof typeof upstream)[]) {
    expect(lineHeights[key].value).toBe(upstream[key].$value);
  }
});
