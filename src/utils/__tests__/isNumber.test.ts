import { isNumber } from "../isNumber"

describe('Testando a função isNumber', () => {
  test('Testando com uma palavra', () => {
    expect(isNumber('batata')).toBeFalsy();
  });

  test('Testando com um símbolo', () => {
    expect(isNumber('!')).toBeFalsy();
  });

  test('Testando com um número', () => {
    expect(isNumber('5')).toBeTruthy();
  });

  test('Testando com vazio', () => {
    expect(isNumber(' ')).toBeFalsy();
  });
});
