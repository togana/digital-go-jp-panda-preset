import type { Tokens } from '@pandacss/types';

// token としては設定されていないが textStyles で指定するために定義
// https://design.digital.go.jp/foundations/typography/
export const letterSpacings = {
  0: { value: '0' },
  0.01: { value: '0.01em' },
  0.02: { value: '0.02em' },
} as const satisfies Tokens['letterSpacings'];
