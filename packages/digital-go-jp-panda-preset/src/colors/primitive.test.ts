import tokens from '@digital-go-jp/design-tokens';
import { expect, it, vi } from 'vitest';
import { colors } from './primitive';

type DesignToken = { $value?: unknown };

// プリセットの色相名（kebab-case）→ design-tokens の Color.Primitive の色相名
const hues = {
  blue: 'Blue',
  'light-blue': 'LightBlue',
  cyan: 'Cyan',
  green: 'Green',
  lime: 'Lime',
  yellow: 'Yellow',
  orange: 'Orange',
  red: 'Red',
  magenta: 'Magenta',
  purple: 'Purple',
} as const;

const hueShades = [
  '50',
  '100',
  '200',
  '300',
  '400',
  '500',
  '600',
  '700',
  '800',
  '900',
  '1000',
  '1100',
  '1200',
];
const greyShades = [
  '50',
  '100',
  '200',
  '300',
  '400',
  '420',
  '500',
  '536',
  '600',
  '700',
  '800',
  '900',
];

it('色のトークン名が固定されている', () => {
  expect(Object.keys(colors)).toEqual([
    ...Object.keys(hues),
    'key',
    'white',
    'black',
    'grey',
    'opacity-grey',
  ]);
  for (const hue of Object.keys(hues) as (keyof typeof hues)[]) {
    expect(Object.keys(colors[hue])).toEqual(hueShades);
  }
  expect(Object.keys(colors.key)).toEqual(hueShades);
  expect(Object.keys(colors.grey)).toEqual(greyShades);
  expect(Object.keys(colors['opacity-grey'])).toEqual(greyShades);
});

it('design-tokens の Color のグループがすべてプリセットに対応付けられている', () => {
  expect(Object.keys(tokens.Color)).toEqual(['Primitive', 'Neutral', 'Semantic', 'Key']);
  expect(Object.keys(tokens.Color.Primitive)).toEqual(Object.values(hues));
  expect(Object.keys(tokens.Color.Neutral)).toEqual(['White', 'Black', 'SolidGray', 'OpacityGray']);
});

it('各色相が design-tokens の Color.Primitive と同じ階調と値を持つ', () => {
  for (const [name, upstreamName] of Object.entries(hues)) {
    const preset: Record<string, { value: string }> = colors[name as keyof typeof hues];
    const upstream: Record<string, DesignToken> = tokens.Color.Primitive[upstreamName];

    expect(Object.keys(preset)).toEqual(Object.keys(upstream));
    for (const shade of Object.keys(upstream)) {
      expect(preset[shade].value).toBe(upstream[shade].$value);
    }
  }
});

it('white と black が design-tokens の Color.Neutral と同じ値を持つ', () => {
  expect(colors.white.value).toBe(tokens.Color.Neutral.White.$value);
  expect(colors.black.value).toBe(tokens.Color.Neutral.Black.$value);
});

it('grey が design-tokens の SolidGray と同じ階調と値を持つ', () => {
  const grey: Record<string, { value: string }> = colors.grey;
  const upstream: Record<string, DesignToken> = tokens.Color.Neutral.SolidGray;

  expect(Object.keys(grey)).toEqual(Object.keys(upstream));
  for (const shade of Object.keys(upstream)) {
    expect(grey[shade].value).toBe(upstream[shade].$value);
  }
});

it('opacity-grey が design-tokens の OpacityGray と同じ階調と値を持つ', () => {
  const opacityGrey: Record<string, { value: string }> = colors['opacity-grey'];
  const upstream: Record<string, DesignToken> = tokens.Color.Neutral.OpacityGray;

  expect(Object.keys(opacityGrey)).toEqual(Object.keys(upstream));
  for (const shade of Object.keys(upstream)) {
    expect(opacityGrey[shade].value).toBe(upstream[shade].$value);
  }
});

it('キーカラーが design-tokens の Color.Key と同じ階調を持ち、同じ値のプリミティブカラーを参照する', () => {
  const key: Record<string, { value: string }> = colors.key;
  const upstream: Record<string, DesignToken> = tokens.Color.Key;

  expect(Object.keys(key)).toEqual(Object.keys(upstream));
  for (const shade of Object.keys(upstream)) {
    // 値をコピーせず、利用者が差し替えられるよう {colors.<色相>.<階調>} の参照にしている
    const match = /^\{colors\.([a-z-]+)\.(\d+)\}$/.exec(key[shade].value);
    expect(match).not.toBeNull();
    const [, hue, step] = match as RegExpExecArray;
    const referenced: Record<string, { value: string }> = colors[hue as keyof typeof hues];
    expect(referenced[step].value).toBe(upstream[shade].$value);
  }
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

  // 動的 import は CJS 扱いの .ts でも ESM の解決規則になり、nodenext では拡張子が必須（TS2835）
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

  // 動的 import は CJS 扱いの .ts でも ESM の解決規則になり、nodenext では拡張子が必須（TS2835）
  const { colors: mockedColors } = await import('./primitive.js');
  expect(mockedColors.key[50].value).toBe('#123456');
  expect(mockedColors.key[100].value).toBe('#abcdef');
  vi.doUnmock('@digital-go-jp/design-tokens');
});
