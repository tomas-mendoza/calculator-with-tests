import { calculate } from "../calculate"

describe('Testando a função precisáo', () => {
  test('Testando com 4 + 5', () => {
    expect(calculate('+', '4', '5')).toBe('9');
  });

  test('Testando com 4 - 5', () => {
    expect(calculate('-', '4', '5')).toBe('-1');
  });

  test('Testando com 5 x 5', () => {
    expect(calculate('x', '5', '5')).toBe('25');
  });

  test('Testando com 5/5', () => {
    expect(calculate('/', '5', '5')).toBe('1');
  });
});
