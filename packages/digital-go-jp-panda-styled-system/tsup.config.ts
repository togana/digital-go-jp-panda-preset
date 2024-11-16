import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    index: 'src/index.ts',
  },
  dts: true,
  format: ['esm'],
  splitting: false,
  sourcemap: false,
  clean: true,
  minify: true,
  treeshake: true,
});
