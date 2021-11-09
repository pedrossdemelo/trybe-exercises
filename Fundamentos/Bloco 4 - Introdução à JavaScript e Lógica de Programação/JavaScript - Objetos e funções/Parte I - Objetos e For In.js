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

// Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 
// 'Tio Patinhas',
// 'Christmas on Bear Mountain, Dell's Four Color Comics #178',
// 'O último MacPatinhas',
// 'Sim'.
// Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. Valor esperado no console:
// Margarida e Tio Patinhas
// Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178
// Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas
// Ambos recorrentes // Atenção para essa última linha!

let info2 = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dell\'s Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
};

function printBothValues(obj1, obj2) {
  for (let key in obj1) {
    if (obj1[key] === obj2[key]) {
      console.log(`Ambos ${key}s`);
    } else console.log(`${obj1[key]} e ${obj2[key]}`);
  }
}

printBothValues(info, info2);