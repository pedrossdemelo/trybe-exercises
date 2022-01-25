// Exercício 1 : Estruture os testes utilizando mocha e chai para um função que
// irá dizer se um número é "positivo", "negativo" ou "neutro":

// Essa função irá receber um número como parâmetro e retornar uma string como
// resposta; Quando o número passado for maior que 0 deverá retornar "positivo",
// quando for menor que 0 deverá retornar "negativo" e quando igual a 0 deverá
// retornar "neutro";

// Descreva todos os cenário de teste utilizando describes ; Descreva todos os
// testes que serão feitos utilizando its ; Crie as asserções validando se os
// retornos de cada cenário tem o tipo e o valor esperado.

// Exercício 3 Adicione à função um tratamento para casos em que o parâmetro informado não seja do tipo Number .

// Adicione o cenário em seu arquivo de testes, passando um valor de tipo diferente a Number para a função;
// Adicione uma asserção para esperar que o valor retornado para esse caso seja igual uma string "o valor deve ser um número";
// Implemente em sua função tal validação para que o teste passe.

// Exercício 4 Crie testes para uma função que escreverá um conteúdo em um arquivo específico.

// Essa função deverá receber dois parâmetros: o nome do arquivo e o conteúdo desse arquivo.
// Após concluir a escrita do arquivo ela deverá retornar um ok .

// Descreva todos os cenários de teste utilizando describes ;
// Descreva todos os testes que serão feitos utilizando its ;
// Crie as asserções validando se o retorno da função possui o valor e tipo esperado.

// Exercício 5 Implemente a função descrita no exercício 4.

// Crie a função descrita no exercício 4 utilizando o módulo fs do node.
// Adapte os testes adicionando stub ao módulo utilizado do fs , isolando assim o teste.
// Garanta que todos os testes escritos no exercício 4 irão passar com sucesso.

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

  it('Deve retornar "o valor deve ser um número" quando o parametro fornecido for diferente de um numero', () => {
    const result = evalNum('a');
    expect(result).to.be.equal('o valor deve ser um número');
  })
});