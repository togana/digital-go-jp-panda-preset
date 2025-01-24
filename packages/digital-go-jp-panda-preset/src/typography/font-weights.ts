import tokens from '@digital-go-jp/design-tokens';
import type { Tokens } from '@pandacss/types';

// https://design.digital.go.jp/foundations/typography/#h3-%E6%9B%B8%E4%BD%93%E3%81%AE%E5%A4%AA%E3%81%95%EF%BC%88font-weight%EF%BC%89
export const fontWeights: Tokens['fontWeights'] = {
  N: { value: tokens.FontWeight[400].$value },
  M: { value: tokens.FontWeight[500].$value },
  B: { value: tokens.FontWeight[700].$value },
};
