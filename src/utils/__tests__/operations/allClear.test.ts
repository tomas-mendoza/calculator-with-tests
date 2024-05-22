import { allClear } from "../../operations"

describe('Testando a função allClear do operations', () => {
  test('Testando se retorna 0', () => {
    expect(allClear()).toBe(0);
  });
});
