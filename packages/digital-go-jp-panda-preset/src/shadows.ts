import tokens from '@digital-go-jp/design-tokens';
import type { Tokens } from '@pandacss/types';

// https://design.digital.go.jp/foundations/elevation/
export const shadows = {
  1: { value: tokens.Elevation[1].$value },
  2: { value: tokens.Elevation[2].$value },
  3: { value: tokens.Elevation[3].$value },
  4: { value: tokens.Elevation[4].$value },
  5: { value: tokens.Elevation[5].$value },
  6: { value: tokens.Elevation[6].$value },
  7: { value: tokens.Elevation[7].$value },
  8: { value: tokens.Elevation[8].$value },
} as const satisfies Tokens['shadows'];
