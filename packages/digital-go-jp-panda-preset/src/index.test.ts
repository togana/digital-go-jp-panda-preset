import { expect, it } from 'vitest';
import preset from './index';
import { preset as namedPreset } from './preset';

it('デフォルトエクスポートが存在する', () => {
  expect(preset).toBeDefined();
  expect(typeof preset).toBe('object');
});

it('preset.tsからの再エクスポートが正しく動作する', () => {
  // index.tsのdefault exportとpreset.tsのnamed exportが同じであることを確認
  expect(preset).toBe(namedPreset);
});
