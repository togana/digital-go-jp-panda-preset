import tokens from '@digital-go-jp/design-tokens';
import type { Tokens } from '@pandacss/types';

// https://design.digital.go.jp/foundations/typography/#h3-%E8%A1%8C%E3%83%9C%E3%83%83%E3%82%AF%E3%82%B9%E3%81%AE%E9%AB%98%E3%81%95%EF%BC%88line-height%EF%BC%89
export const lineHeights: Tokens['lineHeights'] = {
  1: { value: tokens.LineHeight['1_0'].value },
  2: { value: tokens.LineHeight['1_2'].value },
  3: { value: tokens.LineHeight['1_3'].value },
  4: { value: tokens.LineHeight['1_4'].value },
  5: { value: tokens.LineHeight['1_5'].value },
  6: { value: tokens.LineHeight['1_6'].value },
  7: { value: tokens.LineHeight['1_7'].value },
};
