const myFizzBuzz = require('./myFizzBuzz');

describe('myFizzBuzz', () => {
  test('should return FizzBuzz when number is divisible by 3 and 5', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });
  test('should return Fizz when number is divisible by 3', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  });
  test('should return Buzz when number is divisible by 5', () => {
    expect(myFizzBuzz(10)).toBe('buzz');
  });
  test('should return number when number is not divisible by 3 or 5', () => {
    expect(myFizzBuzz(7)).toBe(7);
  });
  test('should return false when the input isnt a number', () => {
    expect(myFizzBuzz('7')).toBe(false); 
  });
});