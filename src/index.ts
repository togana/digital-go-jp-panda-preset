import { definePreset } from '@pandacss/dev';
import tokens from '@digital-go-jp/design-tokens';

export const digitalGoJpPreset = definePreset({
  theme: {
    extend: {
      tokens: {
        colors: {
          // プリミティブカラー
          // https://design.digital.go.jp/foundations/color/?tab=color-palette#h3-%E3%83%97%E3%83%AA%E3%83%9F%E3%83%86%E3%82%A3%E3%83%96%E3%82%AB%E3%83%A9%E3%83%BC
          blue: {
            50: { value: { base: tokens.Color.Primitive.Blue[50].value } },
            100: { value: { base: tokens.Color.Primitive.Blue[100].value } },
            200: { value: { base: tokens.Color.Primitive.Blue[200].value } },
            300: { value: { base: tokens.Color.Primitive.Blue[300].value } },
            400: { value: { base: tokens.Color.Primitive.Blue[400].value } },
            500: { value: { base: tokens.Color.Primitive.Blue[500].value } },
            600: { value: { base: tokens.Color.Primitive.Blue[600].value } },
            700: { value: { base: tokens.Color.Primitive.Blue[700].value } },
            800: { value: { base: tokens.Color.Primitive.Blue[800].value } },
            900: { value: { base: tokens.Color.Primitive.Blue[900].value } },
            1000: { value: { base: tokens.Color.Primitive.Blue[1000].value } },
            1100: { value: { base: tokens.Color.Primitive.Blue[1100].value } },
            1200: { value: { base: tokens.Color.Primitive.Blue[1200].value } },
          },
          'light-blue': {
            50: { value: { base: tokens.Color.Primitive.LightBlue[50].value } },
            100: { value: { base: tokens.Color.Primitive.LightBlue[100].value } },
            200: { value: { base: tokens.Color.Primitive.LightBlue[200].value } },
            300: { value: { base: tokens.Color.Primitive.LightBlue[300].value } },
            400: { value: { base: tokens.Color.Primitive.LightBlue[400].value } },
            500: { value: { base: tokens.Color.Primitive.LightBlue[500].value } },
            600: { value: { base: tokens.Color.Primitive.LightBlue[600].value } },
            700: { value: { base: tokens.Color.Primitive.LightBlue[700].value } },
            800: { value: { base: tokens.Color.Primitive.LightBlue[800].value } },
            900: { value: { base: tokens.Color.Primitive.LightBlue[900].value } },
            1000: { value: { base: tokens.Color.Primitive.LightBlue[1000].value } },
            1100: { value: { base: tokens.Color.Primitive.LightBlue[1100].value } },
            1200: { value: { base: tokens.Color.Primitive.LightBlue[1200].value } },
          },
          cyan: {
            50: { value: { base: tokens.Color.Primitive.Cyan[50].value } },
            100: { value: { base: tokens.Color.Primitive.Cyan[100].value } },
            200: { value: { base: tokens.Color.Primitive.Cyan[200].value } },
            300: { value: { base: tokens.Color.Primitive.Cyan[300].value } },
            400: { value: { base: tokens.Color.Primitive.Cyan[400].value } },
            500: { value: { base: tokens.Color.Primitive.Cyan[500].value } },
            600: { value: { base: tokens.Color.Primitive.Cyan[600].value } },
            700: { value: { base: tokens.Color.Primitive.Cyan[700].value } },
            800: { value: { base: tokens.Color.Primitive.Cyan[800].value } },
            900: { value: { base: tokens.Color.Primitive.Cyan[900].value } },
            1000: { value: { base: tokens.Color.Primitive.Cyan[1000].value } },
            1100: { value: { base: tokens.Color.Primitive.Cyan[1100].value } },
            1200: { value: { base: tokens.Color.Primitive.Cyan[1200].value } },
          },
          green: {
            50: { value: { base: tokens.Color.Primitive.Green[50].value } },
            100: { value: { base: tokens.Color.Primitive.Green[100].value } },
            200: { value: { base: tokens.Color.Primitive.Green[200].value } },
            300: { value: { base: tokens.Color.Primitive.Green[300].value } },
            400: { value: { base: tokens.Color.Primitive.Green[400].value } },
            500: { value: { base: tokens.Color.Primitive.Green[500].value } },
            600: { value: { base: tokens.Color.Primitive.Green[600].value } },
            700: { value: { base: tokens.Color.Primitive.Green[700].value } },
            800: { value: { base: tokens.Color.Primitive.Green[800].value } },
            900: { value: { base: tokens.Color.Primitive.Green[900].value } },
            1000: { value: { base: tokens.Color.Primitive.Green[1000].value } },
            1100: { value: { base: tokens.Color.Primitive.Green[1100].value } },
            1200: { value: { base: tokens.Color.Primitive.Green[1200].value } },
          },
          lime: {
            50: { value: { base: tokens.Color.Primitive.Lime[50].value } },
            100: { value: { base: tokens.Color.Primitive.Lime[100].value } },
            200: { value: { base: tokens.Color.Primitive.Lime[200].value } },
            300: { value: { base: tokens.Color.Primitive.Lime[300].value } },
            400: { value: { base: tokens.Color.Primitive.Lime[400].value } },
            500: { value: { base: tokens.Color.Primitive.Lime[500].value } },
            600: { value: { base: tokens.Color.Primitive.Lime[600].value } },
            700: { value: { base: tokens.Color.Primitive.Lime[700].value } },
            800: { value: { base: tokens.Color.Primitive.Lime[800].value } },
            900: { value: { base: tokens.Color.Primitive.Lime[900].value } },
            1000: { value: { base: tokens.Color.Primitive.Lime[1000].value } },
            1100: { value: { base: tokens.Color.Primitive.Lime[1100].value } },
            1200: { value: { base: tokens.Color.Primitive.Lime[1200].value } },
          },
          yellow: {
            50: { value: { base: tokens.Color.Primitive.Yellow[50].value } },
            100: { value: { base: tokens.Color.Primitive.Yellow[100].value } },
            200: { value: { base: tokens.Color.Primitive.Yellow[200].value } },
            300: { value: { base: tokens.Color.Primitive.Yellow[300].value } },
            400: { value: { base: tokens.Color.Primitive.Yellow[400].value } },
            500: { value: { base: tokens.Color.Primitive.Yellow[500].value } },
            600: { value: { base: tokens.Color.Primitive.Yellow[600].value } },
            700: { value: { base: tokens.Color.Primitive.Yellow[700].value } },
            800: { value: { base: tokens.Color.Primitive.Yellow[800].value } },
            900: { value: { base: tokens.Color.Primitive.Yellow[900].value } },
            1000: { value: { base: tokens.Color.Primitive.Yellow[1000].value } },
            1100: { value: { base: tokens.Color.Primitive.Yellow[1100].value } },
            1200: { value: { base: tokens.Color.Primitive.Yellow[1200].value } },
          },
          orange: {
            50: { value: { base: tokens.Color.Primitive.Orange[50].value } },
            100: { value: { base: tokens.Color.Primitive.Orange[100].value } },
            200: { value: { base: tokens.Color.Primitive.Orange[200].value } },
            300: { value: { base: tokens.Color.Primitive.Orange[300].value } },
            400: { value: { base: tokens.Color.Primitive.Orange[400].value } },
            500: { value: { base: tokens.Color.Primitive.Orange[500].value } },
            600: { value: { base: tokens.Color.Primitive.Orange[600].value } },
            700: { value: { base: tokens.Color.Primitive.Orange[700].value } },
            800: { value: { base: tokens.Color.Primitive.Orange[800].value } },
            900: { value: { base: tokens.Color.Primitive.Orange[900].value } },
            1000: { value: { base: tokens.Color.Primitive.Orange[1000].value } },
            1100: { value: { base: tokens.Color.Primitive.Orange[1100].value } },
            1200: { value: { base: tokens.Color.Primitive.Orange[1200].value } },
          },
          red: {
            50: { value: { base: tokens.Color.Primitive.Red[50].value } },
            100: { value: { base: tokens.Color.Primitive.Red[100].value } },
            200: { value: { base: tokens.Color.Primitive.Red[200].value } },
            300: { value: { base: tokens.Color.Primitive.Red[300].value } },
            400: { value: { base: tokens.Color.Primitive.Red[400].value } },
            500: { value: { base: tokens.Color.Primitive.Red[500].value } },
            600: { value: { base: tokens.Color.Primitive.Red[600].value } },
            700: { value: { base: tokens.Color.Primitive.Red[700].value } },
            800: { value: { base: tokens.Color.Primitive.Red[800].value } },
            900: { value: { base: tokens.Color.Primitive.Red[900].value } },
            1000: { value: { base: tokens.Color.Primitive.Red[1000].value } },
            1100: { value: { base: tokens.Color.Primitive.Red[1100].value } },
            1200: { value: { base: tokens.Color.Primitive.Red[1200].value } },
          },
          magenta: {
            50: { value: { base: tokens.Color.Primitive.Magenta[50].value } },
            100: { value: { base: tokens.Color.Primitive.Magenta[100].value } },
            200: { value: { base: tokens.Color.Primitive.Magenta[200].value } },
            300: { value: { base: tokens.Color.Primitive.Magenta[300].value } },
            400: { value: { base: tokens.Color.Primitive.Magenta[400].value } },
            500: { value: { base: tokens.Color.Primitive.Magenta[500].value } },
            600: { value: { base: tokens.Color.Primitive.Magenta[600].value } },
            700: { value: { base: tokens.Color.Primitive.Magenta[700].value } },
            800: { value: { base: tokens.Color.Primitive.Magenta[800].value } },
            900: { value: { base: tokens.Color.Primitive.Magenta[900].value } },
            1000: { value: { base: tokens.Color.Primitive.Magenta[1000].value } },
            1100: { value: { base: tokens.Color.Primitive.Magenta[1100].value } },
            1200: { value: { base: tokens.Color.Primitive.Magenta[1200].value } },
          },
          purple: {
            50: { value: { base: tokens.Color.Primitive.Purple[50].value } },
            100: { value: { base: tokens.Color.Primitive.Purple[100].value } },
            200: { value: { base: tokens.Color.Primitive.Purple[200].value } },
            300: { value: { base: tokens.Color.Primitive.Purple[300].value } },
            400: { value: { base: tokens.Color.Primitive.Purple[400].value } },
            500: { value: { base: tokens.Color.Primitive.Purple[500].value } },
            600: { value: { base: tokens.Color.Primitive.Purple[600].value } },
            700: { value: { base: tokens.Color.Primitive.Purple[700].value } },
            800: { value: { base: tokens.Color.Primitive.Purple[800].value } },
            900: { value: { base: tokens.Color.Primitive.Purple[900].value } },
            1000: { value: { base: tokens.Color.Primitive.Purple[1000].value } },
            1100: { value: { base: tokens.Color.Primitive.Purple[1100].value } },
            1200: { value: { base: tokens.Color.Primitive.Purple[1200].value } },
          },

          // ニュートラルカラー
          // https://design.digital.go.jp/foundations/color/?tab=color-palette#h3-%E3%83%8B%E3%83%A5%E3%83%BC%E3%83%88%E3%83%A9%E3%83%AB%E3%82%AB%E3%83%A9%E3%83%BC
          white: { value: { base: tokens.Color.Neutral.White.value } },
          black: { value: { base: tokens.Color.Neutral.Black.value } },
          // TODO: SolidGrey を指定しているがカラーパレットを見る限り grey になるはずなので命名を変更している
          // https://design.digital.go.jp/foundations/color/?tab=color-palette
          grey: {
            50: { value: { base: tokens.Color.Neutral.SolidGrey[50].value } },
            100: { value: { base: tokens.Color.Neutral.SolidGrey[100].value } },
            200: { value: { base: tokens.Color.Neutral.SolidGrey[200].value } },
            300: { value: { base: tokens.Color.Neutral.SolidGrey[300].value } },
            400: { value: { base: tokens.Color.Neutral.SolidGrey[400].value } },
            420: { value: { base: tokens.Color.Neutral.SolidGrey[420].value } },
            500: { value: { base: tokens.Color.Neutral.SolidGrey[500].value } },
            536: { value: { base: tokens.Color.Neutral.SolidGrey[536].value } },
            600: { value: { base: tokens.Color.Neutral.SolidGrey[600].value } },
            700: { value: { base: tokens.Color.Neutral.SolidGrey[700].value } },
            800: { value: { base: tokens.Color.Neutral.SolidGrey[800].value } },
            900: { value: { base: tokens.Color.Neutral.SolidGrey[900].value } },
          },
        },
        // https://design.digital.go.jp/foundations/typography/#h3-%E3%83%95%E3%82%A9%E3%83%B3%E3%83%88%E3%83%95%E3%82%A1%E3%83%9F%E3%83%AA%E3%83%BC%EF%BC%88font-family%EF%BC%89
        fonts: {
          body: {
            value: ['Noto Sans JP', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
          },
          code: {
            value: ['Noto Sans Mono', 'monospace'],
          },
        },
        // https://design.digital.go.jp/foundations/typography/#h3-%E6%9B%B8%E4%BD%93%E3%81%AE%E5%A4%A7%E3%81%8D%E3%81%95%EF%BC%88font-size%EF%BC%89
        fontSizes: {
          14: { value: tokens.FontSize[14].value },
          16: { value: tokens.FontSize[16].value },
          17: { value: tokens.FontSize[17].value },
          18: { value: tokens.FontSize[18].value },
          20: { value: tokens.FontSize[20].value },
          22: { value: tokens.FontSize[22].value },
          24: { value: tokens.FontSize[24].value },
          26: { value: tokens.FontSize[26].value },
          28: { value: tokens.FontSize[28].value },
          32: { value: tokens.FontSize[32].value },
          36: { value: tokens.FontSize[36].value },
          45: { value: tokens.FontSize[45].value },
          48: { value: tokens.FontSize[48].value },
          57: { value: tokens.FontSize[57].value },
          64: { value: tokens.FontSize[64].value },
        },
        // https://design.digital.go.jp/foundations/typography/#h3-%E6%9B%B8%E4%BD%93%E3%81%AE%E5%A4%AA%E3%81%95%EF%BC%88font-weight%EF%BC%89
        fontWeights: {
          N: { value: tokens.FontWeight[400].value },
          M: { value: tokens.FontWeight[500].value },
          B: { value: tokens.FontWeight[700].value },
        },
        // token としては設定されていないが semanticTokens で指定するために定義
        // https://design.digital.go.jp/foundations/typography/
        letterSpacings: {
          0: { value: '0' },
          0.02: { value: '0.02em' },
        },
        // https://design.digital.go.jp/foundations/typography/#h3-%E8%A1%8C%E3%83%9C%E3%83%83%E3%82%AF%E3%82%B9%E3%81%AE%E9%AB%98%E3%81%95%EF%BC%88line-height%EF%BC%89
        lineHeights: {
          1: { value: tokens.LineHeight['1_0'].value },
          2: { value: tokens.LineHeight['1_2'].value },
          3: { value: tokens.LineHeight['1_3'].value },
          4: { value: tokens.LineHeight['1_4'].value },
          5: { value: tokens.LineHeight['1_5'].value },
          6: { value: tokens.LineHeight['1_6'].value },
          7: { value: tokens.LineHeight['1_7'].value },
        },
      },
      semanticTokens: {
        colors: {
          // セマンティックカラー
          // https://design.digital.go.jp/foundations/color/?tab=overview#h3-%E3%82%BB%E3%83%9E%E3%83%B3%E3%83%86%E3%82%A3%E3%83%83%E3%82%AF%E3%82%AB%E3%83%A9%E3%83%BC
          'success-1': { value: { base: tokens.Color.Success[1].value } },
          'success-2': { value: { base: tokens.Color.Success[2].value } },
          'error-1': { value: { base: tokens.Color.Error[1].value } },
          'error-2': { value: { base: tokens.Color.Error[2].value } },
          'warning-yellow-1': { value: { base: tokens.Color.Warning.Yellow[1].value } },
          'warning-yellow-2': { value: { base: tokens.Color.Warning.Yellow[2].value } },
          'warning-orange-1': { value: { base: tokens.Color.Warning.Orange[1].value } },
          'warning-orange-2': { value: { base: tokens.Color.Warning.Orange[2].value } },
          'focus-yellow': { value: { base: tokens.Color.Focus.Yellow[700].value } },
          'focus-blue': { value: { base: tokens.Color.Focus.Blue[700].value } },
        },
      },
      textStyles: {
        'Dsp-64N-4': {
          value: {
            fontFamily: '{fonts.body}',
            fontWeight: '{fontWeights.N}',
            fontSize: '{fontSizes.64}',
            lineHeight: '{lineHeights.4}',
            letterSpacing: '{letterSpacings.0}',
          },
        },
        'Dsp-57N-4': {
          value: {
            fontFamily: '{fonts.body}',
            fontWeight: '{fontWeights.N}',
            fontSize: '{fontSizes.57}',
            lineHeight: '{lineHeights.4}',
            letterSpacing: '{letterSpacings.0}',
          },
        },
        'Dsp-48N-4': {
          value: {
            fontFamily: '{fonts.body}',
            fontWeight: '{fontWeights.N}',
            fontSize: '{fontSizes.48}',
            lineHeight: '{lineHeights.4}',
            letterSpacing: '{letterSpacings.0}',
          },
        },
        'Std-45B-4': {
          value: {
            fontFamily: '{fonts.body}',
            fontWeight: '{fontWeights.B}',
            fontSize: '{fontSizes.45}',
            lineHeight: '{lineHeights.4}',
            letterSpacing: '{letterSpacings.0.02}',
          },
        },
        'Std-36B-4': {
          value: {
            fontFamily: '{fonts.body}',
            fontWeight: '{fontWeights.B}',
            fontSize: '{fontSizes.36}',
            lineHeight: '{lineHeights.4}',
            letterSpacing: '{letterSpacings.0.02}',
          },
        },
        'Std-32B-5': {
          value: {
            fontFamily: '{fonts.body}',
            fontWeight: '{fontWeights.B}',
            fontSize: '{fontSizes.32}',
            lineHeight: '{lineHeights.5}',
            letterSpacing: '{letterSpacings.0.02}',
          },
        },
        'Std-28B-5': {
          value: {
            fontFamily: '{fonts.body}',
            fontWeight: '{fontWeights.B}',
            fontSize: '{fontSizes.28}',
            lineHeight: '{lineHeights.5}',
            letterSpacing: '{letterSpacings.0.02}',
          },
        },
        'Std-24B-5': {
          value: {
            fontFamily: '{fonts.body}',
            fontWeight: '{fontWeights.B}',
            fontSize: '{fontSizes.24}',
            lineHeight: '{lineHeights.5}',
            letterSpacing: '{letterSpacings.0.02}',
          },
        },
        'Std-22B-5': {
          value: {
            fontFamily: '{fonts.body}',
            fontWeight: '{fontWeights.B}',
            fontSize: '{fontSizes.22}',
            lineHeight: '{lineHeights.5}',
            letterSpacing: '{letterSpacings.0.02}',
          },
        },
        'Std-20B-5': {
          value: {
            fontFamily: '{fonts.body}',
            fontWeight: '{fontWeights.B}',
            fontSize: '{fontSizes.20}',
            lineHeight: '{lineHeights.5}',
            letterSpacing: '{letterSpacings.0.02}',
          },
        },
        'Std-18B-6': {
          value: {
            fontFamily: '{fonts.body}',
            fontWeight: '{fontWeights.B}',
            fontSize: '{fontSizes.18}',
            lineHeight: '{lineHeights.6}',
            letterSpacing: '{letterSpacings.0.02}',
          },
        },
        'Std-17B-7': {
          value: {
            fontFamily: '{fonts.body}',
            fontWeight: '{fontWeights.B}',
            fontSize: '{fontSizes.17}',
            lineHeight: '{lineHeights.7}',
            letterSpacing: '{letterSpacings.0.02}',
          },
        },
        'Std-16B-7': {
          value: {
            fontFamily: '{fonts.body}',
            fontWeight: '{fontWeights.B}',
            fontSize: '{fontSizes.16}',
            lineHeight: '{lineHeights.7}',
            letterSpacing: '{letterSpacings.0.02}',
          },
        },
        'Std-32M-5': {
          value: {
            fontFamily: '{fonts.body}',
            fontWeight: '{fontWeights.M}',
            fontSize: '{fontSizes.32}',
            lineHeight: '{lineHeights.5}',
            letterSpacing: '{letterSpacings.0.02}',
          },
        },
        'Std-28M-5': {
          value: {
            fontFamily: '{fonts.body}',
            fontWeight: '{fontWeights.M}',
            fontSize: '{fontSizes.28}',
            lineHeight: '{lineHeights.5}',
            letterSpacing: '{letterSpacings.0.02}',
          },
        },
        'Std-24M-5': {
          value: {
            fontFamily: '{fonts.body}',
            fontWeight: '{fontWeights.M}',
            fontSize: '{fontSizes.24}',
            lineHeight: '{lineHeights.5}',
            letterSpacing: '{letterSpacings.0.02}',
          },
        },
        'Std-20M-5': {
          value: {
            fontFamily: '{fonts.body}',
            fontWeight: '{fontWeights.M}',
            fontSize: '{fontSizes.20}',
            lineHeight: '{lineHeights.5}',
            letterSpacing: '{letterSpacings.0.02}',
          },
        },
        'Std-17M-7': {
          value: {
            fontFamily: '{fonts.body}',
            fontWeight: '{fontWeights.M}',
            fontSize: '{fontSizes.17}',
            lineHeight: '{lineHeights.7}',
            letterSpacing: '{letterSpacings.0.02}',
          },
        },
        'Std-16M-7': {
          value: {
            fontFamily: '{fonts.body}',
            fontWeight: '{fontWeights.M}',
            fontSize: '{fontSizes.16}',
            lineHeight: '{lineHeights.7}',
            letterSpacing: '{letterSpacings.0.02}',
          },
        },
        'Std-45N-4': {
          value: {
            fontFamily: '{fonts.body}',
            fontWeight: '{fontWeights.N}',
            fontSize: '{fontSizes.45}',
            lineHeight: '{lineHeights.4}',
            letterSpacing: '{letterSpacings.0.02}',
          },
        },
        'Std-36N-4': {
          value: {
            fontFamily: '{fonts.body}',
            fontWeight: '{fontWeights.N}',
            fontSize: '{fontSizes.36}',
            lineHeight: '{lineHeights.4}',
            letterSpacing: '{letterSpacings.0.02}',
          },
        },
        'Std-32N-5': {
          value: {
            fontFamily: '{fonts.body}',
            fontWeight: '{fontWeights.N}',
            fontSize: '{fontSizes.32}',
            lineHeight: '{lineHeights.5}',
            letterSpacing: '{letterSpacings.0.02}',
          },
        },
        'Std-28N-5': {
          value: {
            fontFamily: '{fonts.body}',
            fontWeight: '{fontWeights.N}',
            fontSize: '{fontSizes.28}',
            lineHeight: '{lineHeights.5}',
            letterSpacing: '{letterSpacings.0.02}',
          },
        },
        'Std-26N-5': {
          value: {
            fontFamily: '{fonts.body}',
            fontWeight: '{fontWeights.N}',
            fontSize: '{fontSizes.26}',
            lineHeight: '{lineHeights.5}',
            letterSpacing: '{letterSpacings.0.02}',
          },
        },
        'Std-24N-5': {
          value: {
            fontFamily: '{fonts.body}',
            fontWeight: '{fontWeights.N}',
            fontSize: '{fontSizes.24}',
            lineHeight: '{lineHeights.5}',
            letterSpacing: '{letterSpacings.0.02}',
          },
        },
        'Std-22N-5': {
          value: {
            fontFamily: '{fonts.body}',
            fontWeight: '{fontWeights.N}',
            fontSize: '{fontSizes.22}',
            lineHeight: '{lineHeights.5}',
            letterSpacing: '{letterSpacings.0.02}',
          },
        },
        'Std-20N-5': {
          value: {
            fontFamily: '{fonts.body}',
            fontWeight: '{fontWeights.N}',
            fontSize: '{fontSizes.20}',
            lineHeight: '{lineHeights.5}',
            letterSpacing: '{letterSpacings.0.02}',
          },
        },
        'Std-18N-6': {
          value: {
            fontFamily: '{fonts.body}',
            fontWeight: '{fontWeights.N}',
            fontSize: '{fontSizes.18}',
            lineHeight: '{lineHeights.6}',
            letterSpacing: '{letterSpacings.0.02}',
          },
        },
        'Std-17N-7': {
          value: {
            fontFamily: '{fonts.body}',
            fontWeight: '{fontWeights.N}',
            fontSize: '{fontSizes.17}',
            lineHeight: '{lineHeights.7}',
            letterSpacing: '{letterSpacings.0.02}',
          },
        },
        'Std-16N-7': {
          value: {
            fontFamily: '{fonts.body}',
            fontWeight: '{fontWeights.N}',
            fontSize: '{fontSizes.16}',
            lineHeight: '{lineHeights.7}',
            letterSpacing: '{letterSpacings.0.02}',
          },
        },
        'Dns-17B-3': {
          value: {
            fontFamily: '{fonts.body}',
            fontWeight: '{fontWeights.B}',
            fontSize: '{fontSizes.17}',
            lineHeight: '{lineHeights.3}',
            letterSpacing: '{letterSpacings.0}',
          },
        },
        'Dns-17N-3': {
          value: {
            fontFamily: '{fonts.body}',
            fontWeight: '{fontWeights.N}',
            fontSize: '{fontSizes.17}',
            lineHeight: '{lineHeights.3}',
            letterSpacing: '{letterSpacings.0}',
          },
        },
        'Dns-17B-2': {
          value: {
            fontFamily: '{fonts.body}',
            fontWeight: '{fontWeights.B}',
            fontSize: '{fontSizes.17}',
            lineHeight: '{lineHeights.2}',
            letterSpacing: '{letterSpacings.0}',
          },
        },
        'Dns-17N-2': {
          value: {
            fontFamily: '{fonts.body}',
            fontWeight: '{fontWeights.N}',
            fontSize: '{fontSizes.17}',
            lineHeight: '{lineHeights.2}',
            letterSpacing: '{letterSpacings.0}',
          },
        },
        'Dns-16B-3': {
          value: {
            fontFamily: '{fonts.body}',
            fontWeight: '{fontWeights.B}',
            fontSize: '{fontSizes.16}',
            lineHeight: '{lineHeights.3}',
            letterSpacing: '{letterSpacings.0}',
          },
        },
        'Dns-16N-3': {
          value: {
            fontFamily: '{fonts.body}',
            fontWeight: '{fontWeights.N}',
            fontSize: '{fontSizes.16}',
            lineHeight: '{lineHeights.3}',
            letterSpacing: '{letterSpacings.0}',
          },
        },
        'Dns-16B-2': {
          value: {
            fontFamily: '{fonts.body}',
            fontWeight: '{fontWeights.B}',
            fontSize: '{fontSizes.16}',
            lineHeight: '{lineHeights.2}',
            letterSpacing: '{letterSpacings.0}',
          },
        },
        'Dns-16N-2': {
          value: {
            fontFamily: '{fonts.body}',
            fontWeight: '{fontWeights.N}',
            fontSize: '{fontSizes.16}',
            lineHeight: '{lineHeights.2}',
            letterSpacing: '{letterSpacings.0}',
          },
        },
        'Dns-14B-3': {
          value: {
            fontFamily: '{fonts.body}',
            fontWeight: '{fontWeights.B}',
            fontSize: '{fontSizes.14}',
            lineHeight: '{lineHeights.3}',
            letterSpacing: '{letterSpacings.0}',
          },
        },
        'Dns-14N-3': {
          value: {
            fontFamily: '{fonts.body}',
            fontWeight: '{fontWeights.N}',
            fontSize: '{fontSizes.14}',
            lineHeight: '{lineHeights.3}',
            letterSpacing: '{letterSpacings.0}',
          },
        },
        'Dns-14B-2': {
          value: {
            fontFamily: '{fonts.body}',
            fontWeight: '{fontWeights.B}',
            fontSize: '{fontSizes.14}',
            lineHeight: '{lineHeights.2}',
            letterSpacing: '{letterSpacings.0}',
          },
        },
        'Dns-14N-2': {
          value: {
            fontFamily: '{fonts.body}',
            fontWeight: '{fontWeights.N}',
            fontSize: '{fontSizes.14}',
            lineHeight: '{lineHeights.2}',
            letterSpacing: '{letterSpacings.0}',
          },
        },
        'Oln-17B-1': {
          value: {
            fontFamily: '{fonts.body}',
            fontWeight: '{fontWeights.B}',
            fontSize: '{fontSizes.17}',
            lineHeight: '{lineHeights.1}',
            letterSpacing: '{letterSpacings.0.02}',
          },
        },
        'Oln-17M-1': {
          value: {
            fontFamily: '{fonts.body}',
            fontWeight: '{fontWeights.M}',
            fontSize: '{fontSizes.17}',
            lineHeight: '{lineHeights.1}',
            letterSpacing: '{letterSpacings.0.02}',
          },
        },
        'Oln-17N-1': {
          value: {
            fontFamily: '{fonts.body}',
            fontWeight: '{fontWeights.N}',
            fontSize: '{fontSizes.17}',
            lineHeight: '{lineHeights.1}',
            letterSpacing: '{letterSpacings.0.02}',
          },
        },
        'Oln-16B-1': {
          value: {
            fontFamily: '{fonts.body}',
            fontWeight: '{fontWeights.B}',
            fontSize: '{fontSizes.16}',
            lineHeight: '{lineHeights.1}',
            letterSpacing: '{letterSpacings.0.02}',
          },
        },
        'Oln-16M-1': {
          value: {
            fontFamily: '{fonts.body}',
            fontWeight: '{fontWeights.M}',
            fontSize: '{fontSizes.16}',
            lineHeight: '{lineHeights.1}',
            letterSpacing: '{letterSpacings.0.02}',
          },
        },
        'Oln-16N-1': {
          value: {
            fontFamily: '{fonts.body}',
            fontWeight: '{fontWeights.N}',
            fontSize: '{fontSizes.16}',
            lineHeight: '{lineHeights.1}',
            letterSpacing: '{letterSpacings.0.02}',
          },
        },
        'Oln-14B-1': {
          value: {
            fontFamily: '{fonts.body}',
            fontWeight: '{fontWeights.B}',
            fontSize: '{fontSizes.14}',
            lineHeight: '{lineHeights.1}',
            letterSpacing: '{letterSpacings.0.02}',
          },
        },
        'Oln-14M-1': {
          value: {
            fontFamily: '{fonts.body}',
            fontWeight: '{fontWeights.M}',
            fontSize: '{fontSizes.14}',
            lineHeight: '{lineHeights.1}',
            letterSpacing: '{letterSpacings.0.02}',
          },
        },
        'Oln-14N-1': {
          value: {
            fontFamily: '{fonts.body}',
            fontWeight: '{fontWeights.N}',
            fontSize: '{fontSizes.14}',
            lineHeight: '{lineHeights.1}',
            letterSpacing: '{letterSpacings.0.02}',
          },
        },
        'Mono-17B-5': {
          value: {
            fontFamily: '{fonts.code}',
            fontWeight: '{fontWeights.B}',
            fontSize: '{fontSizes.17}',
            lineHeight: '{lineHeights.5}',
            letterSpacing: '{letterSpacings.0}',
          },
        },
        'Mono-17N-5': {
          value: {
            fontFamily: '{fonts.code}',
            fontWeight: '{fontWeights.N}',
            fontSize: '{fontSizes.17}',
            lineHeight: '{lineHeights.5}',
            letterSpacing: '{letterSpacings.0}',
          },
        },
        'Mono-16B-5': {
          value: {
            fontFamily: '{fonts.code}',
            fontWeight: '{fontWeights.B}',
            fontSize: '{fontSizes.16}',
            lineHeight: '{lineHeights.5}',
            letterSpacing: '{letterSpacings.0}',
          },
        },
        'Mono-16N-5': {
          value: {
            fontFamily: '{fonts.code}',
            fontWeight: '{fontWeights.N}',
            fontSize: '{fontSizes.16}',
            lineHeight: '{lineHeights.5}',
            letterSpacing: '{letterSpacings.0}',
          },
        },
        'Mono-14B-5': {
          value: {
            fontFamily: '{fonts.code}',
            fontWeight: '{fontWeights.B}',
            fontSize: '{fontSizes.14}',
            lineHeight: '{lineHeights.5}',
            letterSpacing: '{letterSpacings.0}',
          },
        },
        'Mono-14N-5': {
          value: {
            fontFamily: '{fonts.code}',
            fontWeight: '{fontWeights.N}',
            fontSize: '{fontSizes.14}',
            lineHeight: '{lineHeights.5}',
            letterSpacing: '{letterSpacings.0}',
          },
        },
      },
    },
  },
});
