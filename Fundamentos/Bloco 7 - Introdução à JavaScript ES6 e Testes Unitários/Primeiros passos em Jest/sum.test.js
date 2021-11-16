const sum = require('./sum');

describe('Sums two values', () => {
  test('4 + 5 = 9', () => {
    expect(sum(4, 5)).toBe(9);
  });
});