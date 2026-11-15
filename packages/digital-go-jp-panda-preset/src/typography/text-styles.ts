import type { TextStyles } from '@pandacss/types';
import { fontSizes } from './font-sizes';
import { fontWeights } from './font-weights';
import { letterSpacings } from './letter-spacings';
import { lineHeights } from './line-heights';

type Category = 'Dsp' | 'Std' | 'Dns' | 'Oln' | 'Mono';
type FontSize = keyof typeof fontSizes;
type FontWeight = keyof typeof fontWeights;
type LineHeight = keyof typeof lineHeights;
type LetterSpacing = keyof typeof letterSpacings;

// {Category}-{Size}{Weight}-{LineHeight} 形式のテキストスタイル名（例: Dsp-64B-140）
// Size / Weight / LineHeight はそれぞれ fontSizes / fontWeights / lineHeights のキーに限られる
export type TextStyleName = `${Category}-${FontSize}${FontWeight}-${LineHeight}`;

type FontFamily<Name extends TextStyleName> = Name extends `Mono-${string}`
  ? '{fonts.code}'
  : '{fonts.body}';

// 名前から fontFamily / fontWeight / fontSize / lineHeight を決め、名前から決まらない letterSpacing だけを引数で受け取る
export const textStyle = <Name extends TextStyleName, Spacing extends LetterSpacing>(
  name: Name,
  letterSpacing: Spacing,
) => {
  const [category, sizeWeight, lineHeight] = name.split('-');
  const fontSize = Number(sizeWeight.slice(0, -1)) as FontSize;
  const fontWeight = sizeWeight.slice(-1) as FontWeight;
  const fontFamily = (category === 'Mono' ? '{fonts.code}' : '{fonts.body}') as FontFamily<Name>;

  return {
    value: {
      fontFamily,
      fontWeight: fontWeights[fontWeight].value,
      fontSize: fontSizes[fontSize].value,
      lineHeight: lineHeights[Number(lineHeight) as LineHeight].value,
      letterSpacing: letterSpacings[letterSpacing]
        .value as (typeof letterSpacings)[Spacing]['value'],
    },
  } as const;
};

// fontFamily は fonts トークンを参照し、利用側で fonts.body / fonts.code を上書きした場合（next/font など）にも追従させる
// https://design.digital.go.jp/foundations/typography/#h3-%E3%83%86%E3%82%AD%E3%82%B9%E3%83%88%E3%82%B9%E3%82%BF%E3%82%A4%E3%83%AB%E3%81%AE%E7%A8%AE%E9%A1%9E
export const textStyles = {
  'Dsp-64B-140': textStyle('Dsp-64B-140', 0),
  'Dsp-57B-140': textStyle('Dsp-57B-140', 0),
  'Dsp-48B-140': textStyle('Dsp-48B-140', 0),
  'Dsp-64N-140': textStyle('Dsp-64N-140', 0),
  'Dsp-57N-140': textStyle('Dsp-57N-140', 0),
  'Dsp-48N-140': textStyle('Dsp-48N-140', 0),
  'Std-45B-140': textStyle('Std-45B-140', 0),
  'Std-36B-140': textStyle('Std-36B-140', 0.01),
  'Std-32B-150': textStyle('Std-32B-150', 0.01),
  'Std-28B-150': textStyle('Std-28B-150', 0.01),
  'Std-26B-150': textStyle('Std-26B-150', 0.02),
  'Std-24B-150': textStyle('Std-24B-150', 0.02),
  'Std-22B-150': textStyle('Std-22B-150', 0.02),
  'Std-20B-150': textStyle('Std-20B-150', 0.02),
  'Std-18B-160': textStyle('Std-18B-160', 0.02),
  'Std-17B-170': textStyle('Std-17B-170', 0.02),
  'Std-16B-170': textStyle('Std-16B-170', 0.02),
  'Std-16B-175': textStyle('Std-16B-175', 0.02),
  'Std-45N-140': textStyle('Std-45N-140', 0),
  'Std-36N-140': textStyle('Std-36N-140', 0.01),
  'Std-32N-150': textStyle('Std-32N-150', 0.01),
  'Std-28N-150': textStyle('Std-28N-150', 0.01),
  'Std-26N-150': textStyle('Std-26N-150', 0.02),
  'Std-24N-150': textStyle('Std-24N-150', 0.02),
  'Std-22N-150': textStyle('Std-22N-150', 0.02),
  'Std-20N-150': textStyle('Std-20N-150', 0.02),
  'Std-18N-160': textStyle('Std-18N-160', 0.02),
  'Std-17N-170': textStyle('Std-17N-170', 0.02),
  'Std-16N-170': textStyle('Std-16N-170', 0.02),
  'Std-16N-175': textStyle('Std-16N-175', 0.02),
  'Dns-17B-130': textStyle('Dns-17B-130', 0),
  'Dns-17N-130': textStyle('Dns-17N-130', 0),
  'Dns-17B-120': textStyle('Dns-17B-120', 0),
  'Dns-17N-120': textStyle('Dns-17N-120', 0),
  'Dns-16B-130': textStyle('Dns-16B-130', 0),
  'Dns-16N-130': textStyle('Dns-16N-130', 0),
  'Dns-16B-120': textStyle('Dns-16B-120', 0),
  'Dns-16N-120': textStyle('Dns-16N-120', 0),
  'Dns-14B-130': textStyle('Dns-14B-130', 0),
  'Dns-14N-130': textStyle('Dns-14N-130', 0),
  'Dns-14B-120': textStyle('Dns-14B-120', 0),
  'Dns-14N-120': textStyle('Dns-14N-120', 0),
  'Oln-17B-100': textStyle('Oln-17B-100', 0.02),
  'Oln-17N-100': textStyle('Oln-17N-100', 0.02),
  'Oln-16B-100': textStyle('Oln-16B-100', 0.02),
  'Oln-16N-100': textStyle('Oln-16N-100', 0.02),
  'Oln-14B-100': textStyle('Oln-14B-100', 0.02),
  'Oln-14N-100': textStyle('Oln-14N-100', 0.02),
  'Mono-17B-150': textStyle('Mono-17B-150', 0),
  'Mono-17N-150': textStyle('Mono-17N-150', 0),
  'Mono-16B-150': textStyle('Mono-16B-150', 0),
  'Mono-16N-150': textStyle('Mono-16N-150', 0),
  'Mono-14B-150': textStyle('Mono-14B-150', 0),
  'Mono-14N-150': textStyle('Mono-14N-150', 0),
} as const satisfies TextStyles;
