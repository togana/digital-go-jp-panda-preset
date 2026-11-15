import tokens from '@digital-go-jp/design-tokens';
import { expect, it } from 'vitest';
import { breakpoints } from './breakpoints';
import { colors, semanticColors } from './colors';
import { preset } from './preset';
import { radii } from './radii';
import { shadows } from './shadows';
import { sizes } from './sizes';
import { spacing } from './spacing';
import {
  fontSizes,
  fonts,
  fontWeights,
  letterSpacings,
  lineHeights,
  textStyles,
} from './typography';

it('プリセットが正しい名前を持つ', () => {
  expect(preset.name).toBe('@togana/digital-go-jp-panda-preset');
});

it('テーマのカテゴリが固定されている', () => {
  expect(Object.keys(preset)).toEqual(['name', 'theme']);
  expect(Object.keys(preset.theme)).toEqual([
    'breakpoints',
    'tokens',
    'semanticTokens',
    'textStyles',
  ]);
  expect(Object.keys(preset.theme.tokens)).toEqual([
    'colors',
    'radii',
    'fontSizes',
    'fontWeights',
    'lineHeights',
    'letterSpacings',
    'fonts',
    'spacing',
    'sizes',
    'shadows',
  ]);
  expect(Object.keys(preset.theme.semanticTokens)).toEqual(['colors']);
});

it('テーマの各カテゴリに対応するモジュールの定義がそのまま入っている', () => {
  const { theme } = preset;

  expect(theme.breakpoints).toBe(breakpoints);
  expect(theme.tokens.colors).toBe(colors);
  expect(theme.tokens.radii).toBe(radii);
  expect(theme.tokens.fontSizes).toBe(fontSizes);
  expect(theme.tokens.fontWeights).toBe(fontWeights);
  expect(theme.tokens.lineHeights).toBe(lineHeights);
  expect(theme.tokens.letterSpacings).toBe(letterSpacings);
  expect(theme.tokens.fonts).toBe(fonts);
  expect(theme.tokens.spacing).toBe(spacing);
  expect(theme.tokens.sizes).toBe(sizes);
  expect(theme.tokens.shadows).toBe(shadows);
  expect(theme.semanticTokens.colors).toBe(semanticColors);
  expect(theme.textStyles).toBe(textStyles);
});

it('テキストスタイルの名前が固定されている', () => {
  // 値は text-styles.test.ts で扱う。ここでは利用者が使う名前の増減・改名だけを見る（並び順は問わない）
  expect(new Set(Object.keys(preset.theme.textStyles))).toEqual(
    new Set([
      'Dsp-64B-140',
      'Dsp-57B-140',
      'Dsp-48B-140',
      'Dsp-64N-140',
      'Dsp-57N-140',
      'Dsp-48N-140',
      'Std-45B-140',
      'Std-36B-140',
      'Std-32B-150',
      'Std-28B-150',
      'Std-26B-150',
      'Std-24B-150',
      'Std-22B-150',
      'Std-20B-150',
      'Std-18B-160',
      'Std-17B-170',
      'Std-16B-170',
      'Std-16B-175',
      'Std-45N-140',
      'Std-36N-140',
      'Std-32N-150',
      'Std-28N-150',
      'Std-26N-150',
      'Std-24N-150',
      'Std-22N-150',
      'Std-20N-150',
      'Std-18N-160',
      'Std-17N-170',
      'Std-16N-170',
      'Std-16N-175',
      'Dns-17B-130',
      'Dns-17N-130',
      'Dns-17B-120',
      'Dns-17N-120',
      'Dns-16B-130',
      'Dns-16N-130',
      'Dns-16B-120',
      'Dns-16N-120',
      'Dns-14B-130',
      'Dns-14N-130',
      'Dns-14B-120',
      'Dns-14N-120',
      'Oln-17B-100',
      'Oln-17N-100',
      'Oln-16B-100',
      'Oln-16N-100',
      'Oln-14B-100',
      'Oln-14N-100',
      'Mono-17B-150',
      'Mono-17N-150',
      'Mono-16B-150',
      'Mono-16N-150',
      'Mono-14B-150',
      'Mono-14N-150',
    ]),
  );
});

it('design-tokens のトップレベルのカテゴリがすべてプリセットに対応付けられている', () => {
  // カテゴリの中のキーの対応は各トークンのテストで見る。ここでは新しいカテゴリの追加に気づけるようにする
  expect(Object.keys(tokens)).toEqual([
    'Color',
    'FontWeight',
    'FontFamily',
    'FontSize',
    'LineHeight',
    'BorderRadius',
    'Elevation',
  ]);
});
