import tokens from '@digital-go-jp/design-tokens';
import type { Tokens } from '@pandacss/types';

// https://design.digital.go.jp/foundations/corner-shapes/
export const radii: Tokens['radii'] = {
  6: { value: tokens.BorderRadius[6].$value },
  8: { value: tokens.BorderRadius[8].$value },
  12: { value: tokens.BorderRadius[12].$value },
  16: { value: tokens.BorderRadius[16].$value },
  32: { value: tokens.BorderRadius[32].$value },
};
