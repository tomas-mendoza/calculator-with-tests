import { isDot } from "../isDot"

describe('Testando a função isDot', () => {
  test('Testando com um ponto', () => {
    expect(isDot('.')).toBeTruthy();
  });

  test('Testando com uma palavra', () => {
    expect(isDot('batata')).toBeFalsy();
  });

  test('Testando com um símbolo', () => {
    expect(isDot('!')).toBeFalsy();
  });
});
