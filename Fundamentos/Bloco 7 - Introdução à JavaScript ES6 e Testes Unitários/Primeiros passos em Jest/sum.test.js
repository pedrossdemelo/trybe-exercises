const sum = require('./sum');

describe('Sums two values', () => {
  test('4 + 5 = 9', () => {
    expect(sum(4, 5)).toBe(9);
  });
  test('0 + 0 = 0', () => {
    expect(sum(0, 0)).toBe(0);
  });
  test('4 + "5" = TypeError', () => {
    expect(() => {
      sum(4, '5');
    }).toThrow();
  });
});