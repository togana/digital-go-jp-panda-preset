import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // テストファイルのパターン
    include: ['src/**/*.test.ts'],
    
    // テスト環境
    environment: 'node',
    
    // カバレッジ設定
    coverage: {
      provider: 'v8',
      include: ['src/**/*.ts'],
      exclude: [
        'src/**/*.d.ts',
        'src/**/*.test.ts',
      ],
      thresholds: {
        global: {
          branches: 100,
          functions: 100,
          lines: 100,
          statements: 100,
        },
      },
    },
  },
});
