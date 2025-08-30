import tokens from '@digital-go-jp/design-tokens';
import type { Tokens } from '@pandacss/types';

// https://design.digital.go.jp/foundations/typography/#h3-%E8%A1%8C%E3%83%9C%E3%83%83%E3%82%AF%E3%82%B9%E3%81%AE%E9%AB%98%E3%81%95%EF%BC%88line-height%EF%BC%89
export const lineHeights = {
  100: { value: tokens.LineHeight['100'].$value },
  120: { value: tokens.LineHeight['120'].$value },
  130: { value: tokens.LineHeight['130'].$value },
  140: { value: tokens.LineHeight['140'].$value },
  150: { value: tokens.LineHeight['150'].$value },
  160: { value: tokens.LineHeight['160'].$value },
  170: { value: tokens.LineHeight['170'].$value },
  175: { value: tokens.LineHeight['175'].$value },
} as const satisfies Tokens['lineHeights'];
