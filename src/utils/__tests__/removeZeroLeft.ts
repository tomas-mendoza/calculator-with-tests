import { removeZeroLeft } from "../removeZeroLeft";

describe('Testando a função removeZeroLeft', () => {
  test('Testando com um zero a esquerda', () => {
    expect(removeZeroLeft('01')).toBe('1');
  });

  test('Testando com dois zero a esquerda', () => {
    expect(removeZeroLeft('001')).toBe('1');
  });

  test('Testando sem zeros', () => {
    expect(removeZeroLeft('1')).toBe('1');
  });

  test('Testando com número de duas casas sem zero a esquerda', () => {
    expect(removeZeroLeft('11')).toBe('11');
  });
});
