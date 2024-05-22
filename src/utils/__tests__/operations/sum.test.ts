import { sum } from "../../operations";

describe('Testando a função sum do operations', () => {
  test('Somar números positivos', () => {
    expect(sum(5, 5)).toBe(10);
  });

  test('Somar números negativos', () => {
    expect(sum(-10, -5)).toBe(-15);
  });

  test('Somar números decimais', () => {
    expect(sum(2.8, 1.5)).toBeCloseTo(4.3);
  });
});
