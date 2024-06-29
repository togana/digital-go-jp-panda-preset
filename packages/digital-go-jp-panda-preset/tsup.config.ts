import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    index: 'src/index.ts',
  },
  dts: true,
  format: ['cjs', 'esm'],
  splitting: false,
  sourcemap: true,
  clean: true,
  minify: true,
  treeshake: true,
});
