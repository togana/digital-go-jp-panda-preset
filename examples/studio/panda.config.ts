import { defineConfig } from "@pandacss/dev";
import { preset } from '@togana/digital-go-jp-panda-preset';

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  presets: [preset],

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        // next のフォントを利用するために変数を読み込む
        fonts: {
          body: {
            value: "var(--font-noto-sans-jp), -apple-system, BlinkMacSystemFont, sans-serif",
          },
          code: {
            value: "var(--font-noto-sans-mono), monospace",
          },
        }
      }
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
