import type { Preset } from '@pandacss/types';
import { breakpoints } from './breakpoints';
import { colors, semanticColors } from './colors';
import { radii } from './radii';
import { shadows } from './shadows';
import { spacing } from './spacing';
import {
  fontSizes,
  fontWeights,
  fonts,
  letterSpacings,
  lineHeights,
  textStyles,
} from './typography';

const definePreset = <T extends Preset>(config: T) => config;

export const preset = definePreset({
  theme: {
    breakpoints: breakpoints,
    tokens: {
      colors: colors,
      radii: radii,
      fontSizes: fontSizes,
      fontWeights: fontWeights,
      lineHeights: lineHeights,
      letterSpacings: letterSpacings,
      fonts: fonts,
      spacing: spacing,
      shadows: shadows,
    },
    semanticTokens: {
      colors: semanticColors,
    },
    textStyles: textStyles,
  },
});

export default preset;
