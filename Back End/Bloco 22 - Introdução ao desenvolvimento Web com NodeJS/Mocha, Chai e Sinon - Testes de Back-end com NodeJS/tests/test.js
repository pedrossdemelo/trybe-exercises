const { expect } = require('chai');
const fs = require('fs').promises;
const sinon = require('sinon');
const { evalNum, writeFile } = require('../utils/index.js');

sinon.stub(fs, 'writeFile').resolves('ok');

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

describe('Testando a função writeFile', () => {
  it('Deve retornar um ok quando o arquivo for escrito com sucesso', async () => {
    const result = await writeFile('teste.txt', 'teste');
    expect(result).to.be.equal('ok');
  });
})