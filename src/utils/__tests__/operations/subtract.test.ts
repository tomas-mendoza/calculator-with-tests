import { subtract } from "../../operations"

describe('Testando a função subtract do operations', () => {
  test('Subtraindo números positivos', () => {
    expect(subtract(5, 5)).toBe(0);
  });

  test('Subtraindo números negativos', () => {
    expect(subtract(-10, -5)).toBe(-5);
  });

  test('Subtraindo números decimais', () => {
    expect(subtract(2.8, 1.5)).toBeCloseTo(1.3);
  });
});
