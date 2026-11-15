import tokens from '@digital-go-jp/design-tokens';
import { expect, it } from 'vitest';
import { fontWeights } from './font-weights';

// プリセットのトークン名 → design-tokens の FontWeight のキー
const upstreamKeys = { N: '400', B: '700' } as const;

it('フォントの太さのトークン名が固定されている', () => {
  expect(Object.keys(fontWeights)).toEqual(['N', 'B']);
});

it('フォントの太さが design-tokens の FontWeight の対応するキーと同じ値を持つ', () => {
  expect(Object.keys(fontWeights)).toEqual(Object.keys(upstreamKeys));
  for (const [name, key] of Object.entries(upstreamKeys)) {
    expect(fontWeights[name as keyof typeof upstreamKeys].value).toBe(
      tokens.FontWeight[key].$value,
    );
  }
});

it('design-tokens の FontWeight のキーがすべてプリセットに対応付けられている', () => {
  expect(Object.keys(tokens.FontWeight)).toEqual(Object.values(upstreamKeys));
});
