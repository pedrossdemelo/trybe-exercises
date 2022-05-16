const {decode, encode} = require('./encodeDecode');

describe('encodeDecode', () => {
  test('encode e decode são funções', () => {
    expect(typeof encode).toBe('function');
    expect(typeof decode).toBe('function');
  });

  test('encode e decode devem retornar strings', () => {
    expect(typeof encode('aeiou')).toBe('string');
    expect(typeof decode('12345')).toBe('string');
  });

  test('encode deve retornar a string "12345"', () => {
    expect(encode('aeiou')).toBe('12345');
  });

  test('decode deve retornar a string "aeiou"', () => {
    expect(decode('12345')).toBe('aeiou');
  });

  test('outras letras e números não devem ser codificadas', () => {
    expect(encode('a b c d e f g h i j k l m n o p q r s t u v w x y z')).toBe('1 b c d 2 f g h 3 j k l m n 4 p q r s t 5 v w x y z');
    expect(decode('67890')).toBe('67890');
  });
});