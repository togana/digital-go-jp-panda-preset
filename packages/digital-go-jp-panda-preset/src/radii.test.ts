import tokens from '@digital-go-jp/design-tokens';
import { expect, it } from 'vitest';
import { radii } from './radii';

it('角丸のトークン名が固定されている', () => {
  expect(Object.keys(radii)).toEqual(['4', '6', '8', '12', '16', '24', '32', 'Full']);
});

it('角丸が design-tokens の BorderRadius と同じキーと値を持つ', () => {
  const upstream = tokens.BorderRadius;

  expect(Object.keys(radii)).toEqual(Object.keys(upstream));
  for (const key of Object.keys(upstream) as (keyof typeof upstream)[]) {
    expect(radii[key].value).toBe(upstream[key].$value);
  }
});
