const {professionalBoard, searchEmployee} = require('./searchEmployee');

describe('searchEmployee', () => {
  test('Deve retornar os detalhes do funcionário se o ID dele estiver na lista', () => {
    expect(searchEmployee('8579-6', 'lastName')).toBe('Gates');
  });

  test('Deve retornar um erro se o ID do funcionário não existir na lista', () => {
    expect(() => {
      searchEmployee('6969-420', 'lastName');
    }).toThrowError('ID não identificada');
  });

  test('Deve retornar um erro se o ID do funcionário não conter o detalhe especificado', () => {
    expect(() => {
      searchEmployee('8579-6', 'age');
    }).toThrowError('Informação indisponível');
  });
});
