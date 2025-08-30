import tokens from '@digital-go-jp/design-tokens';
import type { Tokens } from '@pandacss/types';

// https://design.digital.go.jp/foundations/typography/#h3-%E6%9B%B8%E4%BD%93%E3%81%AE%E5%A4%A7%E3%81%8D%E3%81%95%EF%BC%88font-size%EF%BC%89
export const fontSizes = {
  14: { value: tokens.FontSize[14].$value },
  16: { value: tokens.FontSize[16].$value },
  17: { value: tokens.FontSize[17].$value },
  18: { value: tokens.FontSize[18].$value },
  20: { value: tokens.FontSize[20].$value },
  22: { value: tokens.FontSize[22].$value },
  24: { value: tokens.FontSize[24].$value },
  26: { value: tokens.FontSize[26].$value },
  28: { value: tokens.FontSize[28].$value },
  32: { value: tokens.FontSize[32].$value },
  36: { value: tokens.FontSize[36].$value },
  45: { value: tokens.FontSize[45].$value },
  48: { value: tokens.FontSize[48].$value },
  57: { value: tokens.FontSize[57].$value },
  64: { value: tokens.FontSize[64].$value },
} as const satisfies Tokens['fontSizes'];
