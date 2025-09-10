import { expect, it } from 'vitest';
import { colors } from './primitive';

it('すべてのメインカラーファミリーが定義されている', () => {
  const expectedColorFamilies = [
    'blue',
    'light-blue',
    'cyan',
    'green',
    'lime',
    'yellow',
    'orange',
    'red',
    'magenta',
    'purple',
  ] as const;

  expectedColorFamilies.forEach((family) => {
    expect(colors[family]).toBeDefined();
    expect(typeof colors[family]).toBe('object');
  });
});

it('ニュートラルカラーが定義されている', () => {
  expect(colors.white).toBeDefined();
  expect(colors.black).toBeDefined();
  expect(colors.grey).toBeDefined();
});

it('すべてのカラー値が有効な16進数を持つ', () => {
  const testColorValue = (colorToken: { value: string }) => {
    expect(colorToken.value).toMatch(/^#[0-9a-f]{6}$/i);
  };

  // メインカラーファミリー
  const mainColorFamilies = [
    'blue',
    'light-blue',
    'cyan',
    'green',
    'lime',
    'yellow',
    'orange',
    'red',
    'magenta',
    'purple',
  ] as const;

  mainColorFamilies.forEach((family) => {
    Object.values(colors[family]).forEach(testColorValue);
  });

  // ニュートラルカラー
  testColorValue(colors.white);
  testColorValue(colors.black);
  Object.values(colors.grey).forEach(testColorValue);
});

it('メインカラーファミリーが一貫したシェード範囲を持つ', () => {
  const expectedShades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200];
  const mainColorFamilies = [
    'blue',
    'light-blue',
    'cyan',
    'green',
    'lime',
    'yellow',
    'orange',
    'red',
    'magenta',
    'purple',
  ] as const;

  mainColorFamilies.forEach((family) => {
    const colorFamily = colors[family];
    expectedShades.forEach((shade) => {
      expect(colorFamily[shade as keyof typeof colorFamily]).toBeDefined();
      expect(colorFamily[shade as keyof typeof colorFamily].value).toBeTruthy();
    });
  });
});

it('グレー系の色が期待されるシェードを持つ', () => {
  const expectedGrayShades = [50, 100, 200, 300, 400, 420, 500, 536, 600, 700, 800, 900];

  expectedGrayShades.forEach((shade) => {
    const greyColor = colors.grey[shade as keyof typeof colors.grey];
    expect(greyColor).toBeDefined();
    expect(greyColor.value).toMatch(/^#[0-9a-f]{6}$/i);
  });
});
