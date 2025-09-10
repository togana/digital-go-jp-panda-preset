import { expect, it } from 'vitest';
import { semanticColors } from './semantic';

it('すべての必要なセマンティックカラーが定義されている', () => {
  const expectedSemanticColors = [
    'success-1',
    'success-2',
    'error-1',
    'error-2',
    'warning-yellow-1',
    'warning-yellow-2',
    'warning-orange-1',
    'warning-orange-2',
    'focus-yellow',
    'focus-blue',
  ] as const;

  expectedSemanticColors.forEach((colorName) => {
    expect(semanticColors[colorName]).toBeDefined();
  });
});

it('セマンティックカラーが適切な構造を持つ', () => {
  Object.entries(semanticColors).forEach(([_colorName, semanticColor]) => {
    expect(semanticColor.value).toBeDefined();
    expect(semanticColor.value.base).toBeDefined();
    expect(typeof semanticColor.value.base).toBe('string');
  });
});

it('すべてのセマンティックカラーが有効な16進数カラー値を持つ', () => {
  Object.entries(semanticColors).forEach(([_colorName, semanticColor]) => {
    expect(semanticColor.value.base).toMatch(/^#[0-9a-f]{6}$/i);
  });
});

it('成功色が2つのバリエーションを持つ', () => {
  expect(semanticColors['success-1']).toBeDefined();
  expect(semanticColors['success-2']).toBeDefined();

  const success1 = semanticColors['success-1'].value.base;
  const success2 = semanticColors['success-2'].value.base;
  expect(success1).not.toBe(success2);
});

it('エラー色が2つのバリエーションを持つ', () => {
  expect(semanticColors['error-1']).toBeDefined();
  expect(semanticColors['error-2']).toBeDefined();

  const error1 = semanticColors['error-1'].value.base;
  const error2 = semanticColors['error-2'].value.base;
  expect(error1).not.toBe(error2);
});

it('警告色がイエローとオレンジの両方のバリエーションを持つ', () => {
  const warningColors = [
    'warning-yellow-1',
    'warning-yellow-2',
    'warning-orange-1',
    'warning-orange-2',
  ] as const;

  warningColors.forEach((colorName) => {
    expect(semanticColors[colorName]).toBeDefined();
    expect(semanticColors[colorName].value.base).toMatch(/^#[0-9a-f]{6}$/i);
  });
});

it('フォーカス色がアクセシビリティのために2つの選択肢を持つ', () => {
  expect(semanticColors['focus-yellow']).toBeDefined();
  expect(semanticColors['focus-blue']).toBeDefined();

  const focusYellow = semanticColors['focus-yellow'].value.base;
  const focusBlue = semanticColors['focus-blue'].value.base;

  expect(focusYellow).toMatch(/^#[0-9a-f]{6}$/i);
  expect(focusBlue).toMatch(/^#[0-9a-f]{6}$/i);
});
