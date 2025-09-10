import type { Preset } from '@pandacss/types';
import { breakpoints } from './breakpoints';
import { colors, semanticColors } from './colors';
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

const definePreset = <T extends Preset>(config: T) => config;

export const preset = definePreset({
  name: '@togana/digital-go-jp-panda-preset',
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
      sizes: sizes,
      shadows: shadows,
    },
    semanticTokens: {
      colors: semanticColors,
    },
    textStyles: textStyles,
  },
});
