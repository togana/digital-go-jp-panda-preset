import tokens from '@digital-go-jp/design-tokens';
import { expect, it } from 'vitest';
import { fontSizes } from './font-sizes';

it('フォントサイズのトークン名が固定されている', () => {
  expect(Object.keys(fontSizes)).toEqual([
    '14',
    '16',
    '17',
    '18',
    '20',
    '22',
    '24',
    '26',
    '28',
    '32',
    '36',
    '45',
    '48',
    '57',
    '64',
  ]);
});

it('フォントサイズが design-tokens の FontSize と同じキーと値を持つ', () => {
  const upstream = tokens.FontSize;

  expect(Object.keys(fontSizes)).toEqual(Object.keys(upstream));
  for (const key of Object.keys(upstream) as (keyof typeof upstream)[]) {
    expect(fontSizes[key].value).toBe(upstream[key].$value);
  }
});
