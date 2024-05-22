import { multiply } from "../../operations";

describe('Testando a função multiply do operations', () => {
  test('Multiplicando números positivos', () => {
    expect(multiply(5, 5)).toBe(25);
  });

  test('Multiplicando números negativos', () => {
    expect(multiply(-10, -5)).toBe(50);
  });

  test('Multiplicando números decimais', () => {
    expect(multiply(2.8, 1.5)).toBeCloseTo(4.2);
  });
});
