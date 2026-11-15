import { expect, it } from 'vitest';
import { colors, semanticColors } from './index';
import { colors as primitiveColors } from './primitive';
import { semanticColors as semanticColorsFromSemantic } from './semantic';

it('colors が primitive.ts の colors と同一である', () => {
  expect(colors).toBe(primitiveColors);
});

it('semanticColors が semantic.ts の semanticColors と同一である', () => {
  expect(semanticColors).toBe(semanticColorsFromSemantic);
});
