// Exercício 1 : Estruture os testes utilizando mocha e chai para um função que
// irá dizer se um número é "positivo", "negativo" ou "neutro":

// Essa função irá receber um número como parâmetro e retornar uma string como
// resposta; Quando o número passado for maior que 0 deverá retornar "positivo",
// quando for menor que 0 deverá retornar "negativo" e quando igual a 0 deverá
// retornar "neutro";

// Descreva todos os cenário de teste utilizando describes ; Descreva todos os
// testes que serão feitos utilizando its ; Crie as asserções validando se os
// retornos de cada cenário tem o tipo e o valor esperado.

const { expect } = require('chai');
const sinon = require('sinon');
const { evalNum } = require('../utils/index.js');

describe('Testando a função evalNum', () => {
  it('Deve retornar "positivo" quando o número for maior que 0', () => {
    const result = evalNum(1);
    expect(result).to.be.equal('positivo');
  });

  it('Deve retornar "negativo" quando o número for menor que 0', () => {
    const result = evalNum(-1);
    expect(result).to.be.equal('negativo');
  });

  it('Deve retornar "neutro" quando o número for igual a 0', () => {
    const result = evalNum(0);
    expect(result).to.be.equal('neutro');
  });
});