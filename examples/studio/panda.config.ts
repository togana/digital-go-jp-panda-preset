import { defineConfig } from "@pandacss/dev";
import preset from '@togana/digital-go-jp-panda-preset';

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Panda v2 では preset-base が自動で追加されないため明示的に指定する
  presets: ['@pandacss/preset-base', preset],

  // スタイルを書くソースファイルはないので空にする（Panda Studio とトークン一覧の spec を出すためだけの example）
  include: [],

  // Files to exclude
  exclude: [],

  // The output directory for your css system
  outdir: "styled-system",
});
