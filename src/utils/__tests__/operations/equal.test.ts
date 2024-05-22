import { equal } from "../../operations";

describe('Testando a função equal do operations', () => {
  test('Testando com números positivos', () => {
    expect(equal(5, 5)).toBe(5);
  });

  test('Testando com números negativos', () => {
    expect(equal(-10, -10)).toBe(-10);
  });

  test('Testando com números decimais', () => {
    expect(equal(2.8, 1.5)).toBe(1.5);
  });
});
