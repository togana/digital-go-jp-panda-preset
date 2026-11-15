import tokens from '@digital-go-jp/design-tokens';
import { expect, it } from 'vitest';
import { fonts } from './fonts';

it('フォントファミリーのトークン名が固定されている', () => {
  expect(Object.keys(fonts)).toEqual(['body', 'code']);
});

it('body が design-tokens の FontFamily.Sans と同じ値を持つ', () => {
  expect(fonts.body.value).toBe(tokens.FontFamily.Sans.$value);
});

it('code が design-tokens の FontFamily.Mono と同じ値を持つ', () => {
  expect(fonts.code.value).toBe(tokens.FontFamily.Mono.$value);
});

it('design-tokens の FontFamily のキーがすべてプリセットに対応付けられている', () => {
  expect(Object.keys(tokens.FontFamily)).toEqual(['Sans', 'Mono']);
});
