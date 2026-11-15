import { expect, it } from 'vitest';
import preset from './index';
import { preset as namedPreset } from './preset';

it('デフォルトエクスポートが preset.ts の preset と同一である', () => {
  expect(preset).toBe(namedPreset);
});
