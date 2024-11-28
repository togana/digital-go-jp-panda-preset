import { defineConfig } from "@pandacss/dev";
import preset from '@togana/digital-go-jp-panda-preset';

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
    },
  },

  // The output directory for your css system
  outdir: "styled-system",

  studio: {
    inject: {
      head: `
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100..900&family=Noto+Sans+Mono:wght@100..900&display=swap" rel="stylesheet">
      `,
    }
  }
});
