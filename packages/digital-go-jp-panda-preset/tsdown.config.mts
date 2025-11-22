import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: {
    index: 'src/index.ts',
  },
  dts: true,
  format: ['cjs', 'esm'],
  sourcemap: false,
  clean: true,
  minify: true,
  treeshake: true,
});
