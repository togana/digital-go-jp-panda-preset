import { preset } from '@togana/digital-go-jp-panda-preset';
import { defineConfig as _defineConfig, type Config } from '@pandacss/dev';

export const presets = [preset];
export const importMap = '@togana/digital-go-jp-panda-styled-system';
export const defineConfig = (config: Omit<Config, 'preflight' | 'outdir' | 'importMap'>) =>
  _defineConfig({
    ...config,
    preflight: true,
    outdir: undefined,
    presets: [...(config?.presets ?? []), ...presets],
    importMap,
  });
