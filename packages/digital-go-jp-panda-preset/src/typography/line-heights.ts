import tokens from '@digital-go-jp/design-tokens';
import type { Tokens } from '@pandacss/types';

// https://design.digital.go.jp/foundations/typography/#h3-%E8%A1%8C%E3%83%9C%E3%83%83%E3%82%AF%E3%82%B9%E3%81%AE%E9%AB%98%E3%81%95%EF%BC%88line-height%EF%BC%89
export const lineHeights: Tokens['lineHeights'] = {
  1: { value: tokens.LineHeight['100'].$value },
  2: { value: tokens.LineHeight['120'].$value },
  3: { value: tokens.LineHeight['130'].$value },
  4: { value: tokens.LineHeight['140'].$value },
  5: { value: tokens.LineHeight['150'].$value },
  6: { value: tokens.LineHeight['160'].$value },
  7: { value: tokens.LineHeight['170'].$value },
  8: { value: tokens.LineHeight['175'].$value },
};
