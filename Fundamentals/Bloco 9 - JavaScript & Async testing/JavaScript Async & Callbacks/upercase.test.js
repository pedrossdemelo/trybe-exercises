const uppercase = require('./uppercase');

test('Testando função uppercase frase => FRASE', (done) => {
  uppercase('frase', (result) => {
    try {
      expect(result).toBe('FRASE');
      done();
    } catch (error) {
      done(error);
    }
  });
});