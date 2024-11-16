import { defineConfig } from "@pandacss/dev";
import { config } from "@togana/digital-go-jp-panda-styled-system";

export default defineConfig({
  preflight: true,

  include: ["./src/components/**/*.{ts,tsx,js,jsx}", "./src/app/**/*.{ts,tsx,js,jsx}"],

  exclude: [],

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

  ...config,
});
