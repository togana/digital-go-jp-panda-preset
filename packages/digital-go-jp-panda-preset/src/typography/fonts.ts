import tokens from '@digital-go-jp/design-tokens';
import type { Tokens } from '@pandacss/types';

// https://design.digital.go.jp/foundations/typography/#h3-%E3%83%95%E3%82%A9%E3%83%B3%E3%83%88%E3%83%95%E3%82%A1%E3%83%9F%E3%83%AA%E3%83%BC%EF%BC%88font-family%EF%BC%89
export const fonts: Tokens['fonts'] = {
  body: {
    value: tokens.FontFamily['Sans'].$value,
  },
  code: {
    value: tokens.FontFamily['Mono'].$value,
  },
};
