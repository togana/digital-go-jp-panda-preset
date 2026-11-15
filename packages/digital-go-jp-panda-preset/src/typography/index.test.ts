import { expect, it } from 'vitest';
import { fontSizes as fontSizesFromFile } from './font-sizes';
import { fontWeights as fontWeightsFromFile } from './font-weights';
import { fonts as fontsFromFile } from './fonts';
import { fontSizes, fonts, fontWeights, letterSpacings, lineHeights, textStyles } from './index';
import { letterSpacings as letterSpacingsFromFile } from './letter-spacings';
import { lineHeights as lineHeightsFromFile } from './line-heights';
import { textStyles as textStylesFromFile } from './text-styles';

it('fontSizes が font-sizes.ts の fontSizes と同一である', () => {
  expect(fontSizes).toBe(fontSizesFromFile);
});

it('fontWeights が font-weights.ts の fontWeights と同一である', () => {
  expect(fontWeights).toBe(fontWeightsFromFile);
});

it('fonts が fonts.ts の fonts と同一である', () => {
  expect(fonts).toBe(fontsFromFile);
});

it('letterSpacings が letter-spacings.ts の letterSpacings と同一である', () => {
  expect(letterSpacings).toBe(letterSpacingsFromFile);
});

it('lineHeights が line-heights.ts の lineHeights と同一である', () => {
  expect(lineHeights).toBe(lineHeightsFromFile);
});

it('textStyles が text-styles.ts の textStyles と同一である', () => {
  expect(textStyles).toBe(textStylesFromFile);
});
