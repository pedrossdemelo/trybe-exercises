// Usando o objeto abaixo, faça os exercícios a seguir:

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

// Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Valor esperado no console:
// Bem-vinda, Margarida

console.log(`Bem-vinda, ${info.personagem}`);

// Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console. Valor esperado no console:
// {
//   personagem: 'Margarida',
//   origem: 'Pato Donald',
//   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   recorrente: 'Sim'
// }

function addRecorrente(obj) {
  obj.recorrente = 'Sim';
  console.log(obj);
}

addRecorrente(info);

// Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:
// personagem
// origem
// nota
// recorrente

function showKeys(obj) {
  for (let key in obj) {
    console.log(key);
  }
}

showKeys(info);

// Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto. Valor esperado no console:
// Margarida
// Pato Donald
// Namorada do personagem principal nos quadrinhos do Pato Donald
// Sim

function showValues(obj) {
  for (let key in obj) {
    console.log(obj[key]);
  }
}

showValues(info);