import tokens from '@digital-go-jp/design-tokens';
import type { Tokens } from '@pandacss/types';

// https://design.digital.go.jp/foundations/corner-shapes/
export const radii: Tokens['radii'] = {
  8: { value: tokens.BorderRadius[8].value },
  16: { value: tokens.BorderRadius[16].value },
  32: { value: tokens.BorderRadius[32].value },
};
