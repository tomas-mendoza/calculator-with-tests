import { divide } from "../../operations";

describe('Testando a função divide do operations', () => {
  test('Dividindo números positivos', () => {
    expect(divide(5, 5)).toBe(1);
  });

  test('Dividindo números negativos', () => {
    expect(divide(-10, -5)).toBe(2);
  });

  test('Dividindo números decimais', () => {
    expect(divide(2.8, 1.5)).toBeCloseTo(1.866666666666665);
  });

  test('Dividindo por número zero', () => {
    expect(divide(5, 0)).toThrowError();
  });
});
