import { defineConfig } from "@pandacss/dev";
import { preset } from '../../packages/digital-go-jp-panda-preset/src/index';

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
});
