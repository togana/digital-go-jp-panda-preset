import tokens from '@digital-go-jp/design-tokens';
import { expect, it } from 'vitest';
import { semanticColors } from './semantic';

// プリセットのトークン名 → 値の出どころの design-tokens のトークン
// focus-* は design-tokens に対応するトークンがないため、デザインシステムのサイトの指定に合わせて
// Color.Primitive から作っている
// https://design.digital.go.jp/foundations/color/?tab=overview#h3-%E3%82%BB%E3%83%9E%E3%83%B3%E3%83%86%E3%82%A3%E3%83%83%E3%82%AF%E3%82%AB%E3%83%A9%E3%83%BC
const sources = {
  'success-1': tokens.Color.Semantic.Success[1],
  'success-2': tokens.Color.Semantic.Success[2],
  'error-1': tokens.Color.Semantic.Error[1],
  'error-2': tokens.Color.Semantic.Error[2],
  'warning-yellow-1': tokens.Color.Semantic.Warning.Yellow[1],
  'warning-yellow-2': tokens.Color.Semantic.Warning.Yellow[2],
  'warning-orange-1': tokens.Color.Semantic.Warning.Orange[1],
  'warning-orange-2': tokens.Color.Semantic.Warning.Orange[2],
  'focus-yellow': tokens.Color.Primitive.Yellow[700],
  'focus-blue': tokens.Color.Primitive.LightBlue[700],
};

// design-tokens のトークン（$value を持つ葉）をすべて集める
const leaves = (node: object): object[] =>
  '$value' in node ? [node] : Object.values(node).flatMap(leaves);

it('セマンティックカラーのトークン名が固定されている', () => {
  expect(Object.keys(semanticColors)).toEqual([
    'success-1',
    'success-2',
    'error-1',
    'error-2',
    'warning-yellow-1',
    'warning-yellow-2',
    'warning-orange-1',
    'warning-orange-2',
    'focus-yellow',
    'focus-blue',
  ]);
});

it('セマンティックカラーが対応する design-tokens のトークンと同じ値を持つ', () => {
  expect(Object.keys(semanticColors)).toEqual(Object.keys(sources));
  for (const [name, source] of Object.entries(sources)) {
    expect(semanticColors[name as keyof typeof sources].value).toEqual({ base: source.$value });
  }
});

it('design-tokens の Color.Semantic のトークンがすべてプリセットに対応付けられている', () => {
  const mapped = Object.values(sources);

  for (const token of leaves(tokens.Color.Semantic)) {
    expect(mapped).toContain(token);
  }
});
