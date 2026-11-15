import tokens from '@digital-go-jp/design-tokens';
import { expect, it, vi } from 'vitest';
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
  expect(colors['opacity-grey']).toBeDefined();
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

it('半透明グレーが design-tokens の OpacityGray と同じ階調と値を持つ', () => {
  const opacityGrey = colors['opacity-grey'];
  const upstream = tokens.Color.Neutral.OpacityGray;

  expect(Object.keys(opacityGrey)).toEqual(Object.keys(upstream));
  Object.keys(upstream).forEach((shade) => {
    const shadeKey = shade as keyof typeof upstream;
    expect(opacityGrey[shadeKey].value).toBe(upstream[shadeKey].$value);
    expect(opacityGrey[shadeKey].value).toMatch(/^rgba\(0, 0, 0, (0|0?\.\d+|1)\)$/);
  });
});

it('キーカラーがプリミティブカラーへの参照として定義されている', () => {
  const expectedShades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200];

  expect(Object.keys(colors.key).map(Number)).toEqual(expectedShades);
  expectedShades.forEach((shade) => {
    const shadeKey = shade as keyof typeof colors.key;
    expect(colors.key[shadeKey].value).toBe(`{colors.blue.${shade}}`);
  });
});

it('キーカラーの参照先のプリミティブカラー名を kebab-case に変換する', async () => {
  vi.resetModules();
  vi.doMock('@digital-go-jp/design-tokens', async (importOriginal) => {
    const { default: tokens } =
      await importOriginal<typeof import('@digital-go-jp/design-tokens')>();
    return {
      default: {
        ...tokens,
        Color: {
          ...tokens.Color,
          Key: {
            ...tokens.Color.Key,
            500: { $value: '#00a3bf', original: { $value: '{Color.Primitive.LightBlue.500}' } },
          },
        },
      },
    };
  });

  const { colors: mockedColors } = await import('./primitive.js');
  expect(mockedColors.key[500].value).toBe('{colors.light-blue.500}');
  vi.doUnmock('@digital-go-jp/design-tokens');
});

it('キーカラーがプリミティブカラーへの参照でなければ値をそのまま使う', async () => {
  vi.resetModules();
  vi.doMock('@digital-go-jp/design-tokens', async (importOriginal) => {
    const { default: tokens } =
      await importOriginal<typeof import('@digital-go-jp/design-tokens')>();
    return {
      default: {
        ...tokens,
        Color: {
          ...tokens.Color,
          Key: {
            ...tokens.Color.Key,
            50: { $value: '#123456' },
            100: { $value: '#abcdef', original: { $value: '#abcdef' } },
          },
        },
      },
    };
  });

  const { colors: mockedColors } = await import('./primitive.js');
  expect(mockedColors.key[50].value).toBe('#123456');
  expect(mockedColors.key[100].value).toBe('#abcdef');
  vi.doUnmock('@digital-go-jp/design-tokens');
});
