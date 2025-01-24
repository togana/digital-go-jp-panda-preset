import tokens from '@digital-go-jp/design-tokens';
import type { SemanticTokens } from '@pandacss/types';

// https://design.digital.go.jp/foundations/color/?tab=overview#h3-%E3%82%BB%E3%83%9E%E3%83%B3%E3%83%86%E3%82%A3%E3%83%83%E3%82%AF%E3%82%AB%E3%83%A9%E3%83%BC
export const semanticColors: SemanticTokens['colors'] = {
  'success-1': { value: { base: tokens.Color.Success[1].$value } },
  'success-2': { value: { base: tokens.Color.Success[2].$value } },
  'error-1': { value: { base: tokens.Color.Error[1].$value } },
  'error-2': { value: { base: tokens.Color.Error[2].$value } },
  'warning-yellow-1': { value: { base: tokens.Color.Warning.Yellow[1].$value } },
  'warning-yellow-2': { value: { base: tokens.Color.Warning.Yellow[2].$value } },
  'warning-orange-1': { value: { base: tokens.Color.Warning.Orange[1].$value } },
  'warning-orange-2': { value: { base: tokens.Color.Warning.Orange[2].$value } },
  'focus-yellow': { value: { base: tokens.Color.Focus.Yellow.$value } },
  'focus-blue': { value: { base: tokens.Color.Focus.Blue.$value } },
};
