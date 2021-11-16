const { describe } = require('yargs');
const sum = require('./sum');

describe('Sums two values', () => {
  test('2 + 3 = 5', () => {
    expect(sum(2, 3)).toBe(5);
  });
});