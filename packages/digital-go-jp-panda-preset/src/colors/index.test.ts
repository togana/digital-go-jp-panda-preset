import { expect, it } from 'vitest';
import { colors, semanticColors } from './index';
import { colors as primitiveColors } from './primitive';
import { semanticColors as semanticColorsFromSemantic } from './semantic';

it('colorsエクスポートが存在する', () => {
  expect(colors).toBeDefined();
  expect(typeof colors).toBe('object');
});

it('semanticColorsエクスポートが存在する', () => {
  expect(semanticColors).toBeDefined();
  expect(typeof semanticColors).toBe('object');
});

it('primitive.tsからのcolors再エクスポートが正しく動作する', () => {
  // index.tsのcolorsとprimitive.tsのcolorsが同じであることを確認
  expect(colors).toBe(primitiveColors);
});

it('semantic.tsからのsemanticColors再エクスポートが正しく動作する', () => {
  // index.tsのsemanticColorsとsemantic.tsのsemanticColorsが同じであることを確認
  expect(semanticColors).toBe(semanticColorsFromSemantic);
});
