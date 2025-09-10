import { expect, it } from 'vitest';
import { fontSizes as fontSizesFromFile } from './font-sizes';
import { fontWeights as fontWeightsFromFile } from './font-weights';
import { fonts as fontsFromFile } from './fonts';
import { fontSizes, fonts, fontWeights, letterSpacings, lineHeights, textStyles } from './index';
import { letterSpacings as letterSpacingsFromFile } from './letter-spacings';
import { lineHeights as lineHeightsFromFile } from './line-heights';
import { textStyles as textStylesFromFile } from './text-styles';

it('すべてのタイポグラフィエクスポートが存在する', () => {
  expect(fontSizes).toBeDefined();
  expect(fontWeights).toBeDefined();
  expect(fonts).toBeDefined();
  expect(letterSpacings).toBeDefined();
  expect(lineHeights).toBeDefined();
  expect(textStyles).toBeDefined();
});

it('fontSizes再エクスポートが正しく動作する', () => {
  expect(fontSizes).toBe(fontSizesFromFile);
});

it('fontWeights再エクスポートが正しく動作する', () => {
  expect(fontWeights).toBe(fontWeightsFromFile);
});

it('fonts再エクスポートが正しく動作する', () => {
  expect(fonts).toBe(fontsFromFile);
});

it('letterSpacings再エクスポートが正しく動作する', () => {
  expect(letterSpacings).toBe(letterSpacingsFromFile);
});

it('lineHeights再エクスポートが正しく動作する', () => {
  expect(lineHeights).toBe(lineHeightsFromFile);
});

it('textStyles再エクスポートが正しく動作する', () => {
  expect(textStyles).toBe(textStylesFromFile);
});
