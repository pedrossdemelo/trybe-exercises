beforeEach(() => console.log('1 - beforeEach')); // #1
afterEach(() => console.log('1 - afterEach')); // #3

test('', () => console.log('1 - test')); // #2

describe('Scoped / Nested block', () => {
  beforeEach(() => console.log('2 - beforeEach')); // #4
  afterEach(() => console.log('2 - afterEach')); // #6

  test('', () => console.log('2 - test')); // #5
});