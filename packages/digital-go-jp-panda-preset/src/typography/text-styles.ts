import type { TextStyles } from '@pandacss/types';
import { fontSizes } from './font-sizes';
import { fontWeights } from './font-weights';
import { fonts } from './fonts';
import { letterSpacings } from './letter-spacings';
import { lineHeights } from './line-heights';

// https://design.digital.go.jp/foundations/typography/#h3-%E3%83%86%E3%82%AD%E3%82%B9%E3%83%88%E3%82%B9%E3%82%BF%E3%82%A4%E3%83%AB%E3%81%AE%E7%A8%AE%E9%A1%9E
export const textStyles = {
  'Dsp-64N-140': {
    value: {
      fontFamily: fonts.body,
      fontWeight: fontWeights.N.value,
      fontSize: fontSizes[64].value,
      lineHeight: lineHeights[140].value,
      letterSpacing: letterSpacings[0].value,
    },
  },
  'Dsp-57N-140': {
    value: {
      fontFamily: fonts.body,
      fontWeight: fontWeights.N.value,
      fontSize: fontSizes[57].value,
      lineHeight: lineHeights[140].value,
      letterSpacing: letterSpacings[0].value,
    },
  },
  'Dsp-48N-140': {
    value: {
      fontFamily: fonts.body,
      fontWeight: fontWeights.N.value,
      fontSize: fontSizes[48].value,
      lineHeight: lineHeights[140].value,
      letterSpacing: letterSpacings[0].value,
    },
  },
  'Std-45B-140': {
    value: {
      fontFamily: fonts.body,
      fontWeight: fontWeights.B.value,
      fontSize: fontSizes[45].value,
      lineHeight: lineHeights[140].value,
      letterSpacing: letterSpacings[0].value,
    },
  },
  'Std-36B-140': {
    value: {
      fontFamily: fonts.body,
      fontWeight: fontWeights.B.value,
      fontSize: fontSizes[36].value,
      lineHeight: lineHeights[140].value,
      letterSpacing: letterSpacings[0.01].value,
    },
  },
  'Std-32B-150': {
    value: {
      fontFamily: fonts.body,
      fontWeight: fontWeights.B.value,
      fontSize: fontSizes[32].value,
      lineHeight: lineHeights[150].value,
      letterSpacing: letterSpacings[0.01].value,
    },
  },
  'Std-28B-150': {
    value: {
      fontFamily: fonts.body,
      fontWeight: fontWeights.B.value,
      fontSize: fontSizes[28].value,
      lineHeight: lineHeights[150].value,
      letterSpacing: letterSpacings[0.01].value,
    },
  },
  'Std-26B-150': {
    value: {
      fontFamily: fonts.body,
      fontWeight: fontWeights.B.value,
      fontSize: fontSizes[26].value,
      lineHeight: lineHeights[150].value,
      letterSpacing: letterSpacings[0.02].value,
    },
  },
  'Std-24B-150': {
    value: {
      fontFamily: fonts.body,
      fontWeight: fontWeights.B.value,
      fontSize: fontSizes[24].value,
      lineHeight: lineHeights[150].value,
      letterSpacing: letterSpacings[0.02].value,
    },
  },
  'Std-22B-150': {
    value: {
      fontFamily: fonts.body,
      fontWeight: fontWeights.B.value,
      fontSize: fontSizes[22].value,
      lineHeight: lineHeights[150].value,
      letterSpacing: letterSpacings[0.02].value,
    },
  },
  'Std-20B-150': {
    value: {
      fontFamily: fonts.body,
      fontWeight: fontWeights.B.value,
      fontSize: fontSizes[20].value,
      lineHeight: lineHeights[150].value,
      letterSpacing: letterSpacings[0.02].value,
    },
  },
  'Std-18B-160': {
    value: {
      fontFamily: fonts.body,
      fontWeight: fontWeights.B.value,
      fontSize: fontSizes[18].value,
      lineHeight: lineHeights[160].value,
      letterSpacing: letterSpacings[0.02].value,
    },
  },
  'Std-17B-170': {
    value: {
      fontFamily: fonts.body,
      fontWeight: fontWeights.B.value,
      fontSize: fontSizes[17].value,
      lineHeight: lineHeights[170].value,
      letterSpacing: letterSpacings[0.02].value,
    },
  },
  'Std-16B-170': {
    value: {
      fontFamily: fonts.body,
      fontWeight: fontWeights.B.value,
      fontSize: fontSizes[16].value,
      lineHeight: lineHeights[170].value,
      letterSpacing: letterSpacings[0.02].value,
    },
  },
  'Std-16B-175': {
    value: {
      fontFamily: fonts.body,
      fontWeight: fontWeights.B.value,
      fontSize: fontSizes[16].value,
      lineHeight: lineHeights[175].value,
      letterSpacing: letterSpacings[0.02].value,
    },
  },
  'Std-45N-140': {
    value: {
      fontFamily: fonts.body,
      fontWeight: fontWeights.N.value,
      fontSize: fontSizes[45].value,
      lineHeight: lineHeights[140].value,
      letterSpacing: letterSpacings[0].value,
    },
  },
  'Std-36N-140': {
    value: {
      fontFamily: fonts.body,
      fontWeight: fontWeights.N.value,
      fontSize: fontSizes[36].value,
      lineHeight: lineHeights[140].value,
      letterSpacing: letterSpacings[0.01].value,
    },
  },
  'Std-32N-150': {
    value: {
      fontFamily: fonts.body,
      fontWeight: fontWeights.N.value,
      fontSize: fontSizes[32].value,
      lineHeight: lineHeights[150].value,
      letterSpacing: letterSpacings[0.01].value,
    },
  },
  'Std-28N-150': {
    value: {
      fontFamily: fonts.body,
      fontWeight: fontWeights.N.value,
      fontSize: fontSizes[28].value,
      lineHeight: lineHeights[150].value,
      letterSpacing: letterSpacings[0.01].value,
    },
  },
  'Std-26N-150': {
    value: {
      fontFamily: fonts.body,
      fontWeight: fontWeights.N.value,
      fontSize: fontSizes[26].value,
      lineHeight: lineHeights[150].value,
      letterSpacing: letterSpacings[0.02].value,
    },
  },
  'Std-24N-150': {
    value: {
      fontFamily: fonts.body,
      fontWeight: fontWeights.N.value,
      fontSize: fontSizes[24].value,
      lineHeight: lineHeights[150].value,
      letterSpacing: letterSpacings[0.02].value,
    },
  },
  'Std-22N-150': {
    value: {
      fontFamily: fonts.body,
      fontWeight: fontWeights.N.value,
      fontSize: fontSizes[22].value,
      lineHeight: lineHeights[150].value,
      letterSpacing: letterSpacings[0.02].value,
    },
  },
  'Std-20N-150': {
    value: {
      fontFamily: fonts.body,
      fontWeight: fontWeights.N.value,
      fontSize: fontSizes[20].value,
      lineHeight: lineHeights[150].value,
      letterSpacing: letterSpacings[0.02].value,
    },
  },
  'Std-18N-160': {
    value: {
      fontFamily: fonts.body,
      fontWeight: fontWeights.N.value,
      fontSize: fontSizes[18].value,
      lineHeight: lineHeights[160].value,
      letterSpacing: letterSpacings[0.02].value,
    },
  },
  'Std-17N-170': {
    value: {
      fontFamily: fonts.body,
      fontWeight: fontWeights.N.value,
      fontSize: fontSizes[17].value,
      lineHeight: lineHeights[170].value,
      letterSpacing: letterSpacings[0.02].value,
    },
  },
  'Std-16N-170': {
    value: {
      fontFamily: fonts.body,
      fontWeight: fontWeights.N.value,
      fontSize: fontSizes[16].value,
      lineHeight: lineHeights[170].value,
      letterSpacing: letterSpacings[0.02].value,
    },
  },
  'Std-16N-175': {
    value: {
      fontFamily: fonts.body,
      fontWeight: fontWeights.N.value,
      fontSize: fontSizes[16].value,
      lineHeight: lineHeights[175].value,
      letterSpacing: letterSpacings[0.02].value,
    },
  },
  'Dns-17B-130': {
    value: {
      fontFamily: fonts.body,
      fontWeight: fontWeights.B.value,
      fontSize: fontSizes[17].value,
      lineHeight: lineHeights[130].value,
      letterSpacing: letterSpacings[0].value,
    },
  },
  'Dns-17N-130': {
    value: {
      fontFamily: fonts.body,
      fontWeight: fontWeights.N.value,
      fontSize: fontSizes[17].value,
      lineHeight: lineHeights[130].value,
      letterSpacing: letterSpacings[0].value,
    },
  },
  'Dns-17B-120': {
    value: {
      fontFamily: fonts.body,
      fontWeight: fontWeights.B.value,
      fontSize: fontSizes[17].value,
      lineHeight: lineHeights[120].value,
      letterSpacing: letterSpacings[0].value,
    },
  },
  'Dns-17N-120': {
    value: {
      fontFamily: fonts.body,
      fontWeight: fontWeights.N.value,
      fontSize: fontSizes[17].value,
      lineHeight: lineHeights[120].value,
      letterSpacing: letterSpacings[0].value,
    },
  },
  'Dns-16B-130': {
    value: {
      fontFamily: fonts.body,
      fontWeight: fontWeights.B.value,
      fontSize: fontSizes[16].value,
      lineHeight: lineHeights[130].value,
      letterSpacing: letterSpacings[0].value,
    },
  },
  'Dns-16N-130': {
    value: {
      fontFamily: fonts.body,
      fontWeight: fontWeights.N.value,
      fontSize: fontSizes[16].value,
      lineHeight: lineHeights[130].value,
      letterSpacing: letterSpacings[0].value,
    },
  },
  'Dns-16B-120': {
    value: {
      fontFamily: fonts.body,
      fontWeight: fontWeights.B.value,
      fontSize: fontSizes[16].value,
      lineHeight: lineHeights[120].value,
      letterSpacing: letterSpacings[0].value,
    },
  },
  'Dns-16N-120': {
    value: {
      fontFamily: fonts.body,
      fontWeight: fontWeights.N.value,
      fontSize: fontSizes[16].value,
      lineHeight: lineHeights[120].value,
      letterSpacing: letterSpacings[0].value,
    },
  },
  'Dns-14B-130': {
    value: {
      fontFamily: fonts.body,
      fontWeight: fontWeights.B.value,
      fontSize: fontSizes[14].value,
      lineHeight: lineHeights[130].value,
      letterSpacing: letterSpacings[0].value,
    },
  },
  'Dns-14N-130': {
    value: {
      fontFamily: fonts.body,
      fontWeight: fontWeights.N.value,
      fontSize: fontSizes[14].value,
      lineHeight: lineHeights[130].value,
      letterSpacing: letterSpacings[0].value,
    },
  },
  'Dns-14B-120': {
    value: {
      fontFamily: fonts.body,
      fontWeight: fontWeights.B.value,
      fontSize: fontSizes[14].value,
      lineHeight: lineHeights[120].value,
      letterSpacing: letterSpacings[0].value,
    },
  },
  'Dns-14N-120': {
    value: {
      fontFamily: fonts.body,
      fontWeight: fontWeights.N.value,
      fontSize: fontSizes[14].value,
      lineHeight: lineHeights[120].value,
      letterSpacing: letterSpacings[0].value,
    },
  },
  'Oln-17B-100': {
    value: {
      fontFamily: fonts.body,
      fontWeight: fontWeights.B.value,
      fontSize: fontSizes[17].value,
      lineHeight: lineHeights[100].value,
      letterSpacing: letterSpacings[0.02].value,
    },
  },
  'Oln-17N-100': {
    value: {
      fontFamily: fonts.body,
      fontWeight: fontWeights.N.value,
      fontSize: fontSizes[17].value,
      lineHeight: lineHeights[100].value,
      letterSpacing: letterSpacings[0.02].value,
    },
  },
  'Oln-16B-100': {
    value: {
      fontFamily: fonts.body,
      fontWeight: fontWeights.B.value,
      fontSize: fontSizes[16].value,
      lineHeight: lineHeights[100].value,
      letterSpacing: letterSpacings[0.02].value,
    },
  },
  'Oln-16N-100': {
    value: {
      fontFamily: fonts.body,
      fontWeight: fontWeights.N.value,
      fontSize: fontSizes[16].value,
      lineHeight: lineHeights[100].value,
      letterSpacing: letterSpacings[0.02].value,
    },
  },
  'Oln-14B-100': {
    value: {
      fontFamily: fonts.body,
      fontWeight: fontWeights.B.value,
      fontSize: fontSizes[14].value,
      lineHeight: lineHeights[100].value,
      letterSpacing: letterSpacings[0.02].value,
    },
  },
  'Oln-14N-100': {
    value: {
      fontFamily: fonts.body,
      fontWeight: fontWeights.N.value,
      fontSize: fontSizes[14].value,
      lineHeight: lineHeights[100].value,
      letterSpacing: letterSpacings[0.02].value,
    },
  },
  'Mono-17B-150': {
    value: {
      fontFamily: fonts.code,
      fontWeight: fontWeights.B.value,
      fontSize: fontSizes[17].value,
      lineHeight: lineHeights[150].value,
      letterSpacing: letterSpacings[0].value,
    },
  },
  'Mono-17N-150': {
    value: {
      fontFamily: fonts.code,
      fontWeight: fontWeights.N.value,
      fontSize: fontSizes[17].value,
      lineHeight: lineHeights[150].value,
      letterSpacing: letterSpacings[0].value,
    },
  },
  'Mono-16B-150': {
    value: {
      fontFamily: fonts.code,
      fontWeight: fontWeights.B.value,
      fontSize: fontSizes[16].value,
      lineHeight: lineHeights[150].value,
      letterSpacing: letterSpacings[0].value,
    },
  },
  'Mono-16N-150': {
    value: {
      fontFamily: fonts.code,
      fontWeight: fontWeights.N.value,
      fontSize: fontSizes[16].value,
      lineHeight: lineHeights[150].value,
      letterSpacing: letterSpacings[0].value,
    },
  },
  'Mono-14B-150': {
    value: {
      fontFamily: fonts.code,
      fontWeight: fontWeights.B.value,
      fontSize: fontSizes[14].value,
      lineHeight: lineHeights[150].value,
      letterSpacing: letterSpacings[0].value,
    },
  },
  'Mono-14N-150': {
    value: {
      fontFamily: fonts.code,
      fontWeight: fontWeights.N.value,
      fontSize: fontSizes[14].value,
      lineHeight: lineHeights[150].value,
      letterSpacing: letterSpacings[0].value,
    },
  },
} as const satisfies TextStyles;
