// Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
// Exemplo de palíndromo: arara .
// verificaPalindrome('arara') ;
// Retorno esperado: true
// verificaPalindrome('desenvolvimento') ;
// Retorno esperado: false

function verificaPalindrome(palavra) {
    let palavraInvertida = '';
    for (let i = palavra.length - 1; i >= 0; i--) {
        palavraInvertida += palavra[i];
    }
    if (palavraInvertida === palavra) {
        return true;
    } else {
        return false;
    }
}

console.log(verificaPalindrome('arara'));
console.log(verificaPalindrome('desenvolvimento'));

// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1]; .
// Valor esperado no retorno da função: 4 .

function retornaIndiceMaiorValor(array) {
  let maiorValor = 0;
  let indiceMaiorValor = 0;
  for (let i = 0; i < array.length; i++) {
      if (array[i] > maiorValor) {
          maiorValor = array[i];
          indiceMaiorValor = i;
      }
  }
  return indiceMaiorValor;
}

console.log(retornaIndiceMaiorValor([2, 3, 6, 7, 10, 1]));

// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
// Valor esperado no retorno da função: 6 .

function retornaIndiceMenorValor(array) {
  let menorValor = array[0];
  let indiceMenorValor = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < menorValor) {
      menorValor = array[i];
      indiceMenorValor = i;
    }
  }
  return indiceMenorValor;
}

console.log(retornaIndiceMenorValor([2, 4, 6, 7, 10, 0, -3]));

// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
// Valor esperado no retorno da função: Fernanda .

function retornaNomeComMaiorQuantidadeDeCaracteres(array) {
  let nomeComMaiorQuantidadeDeCaracteres = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > nomeComMaiorQuantidadeDeCaracteres.length) {
      nomeComMaiorQuantidadeDeCaracteres = array[i];
    }
  }
  return nomeComMaiorQuantidadeDeCaracteres;
}

console.log(retornaNomeComMaiorQuantidadeDeCaracteres(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
// Valor esperado no retorno da função: 2 .

function retornaInteiroQueMaisRepete(array) {
  let inteiroQueMaisRepete = array[0];
  let quantidadeDeOcorrencias = 0;
  for (let i = 0; i < array.length; i++) {
    let quantidadeDeOcorrenciasAtual = 0;
    for (let j = 0; j < array.length; j++) {
      if (array[i] === array[j]) {
        quantidadeDeOcorrenciasAtual++;
      }
    }
    if (quantidadeDeOcorrenciasAtual > quantidadeDeOcorrencias) {
      quantidadeDeOcorrencias = quantidadeDeOcorrenciasAtual;
      inteiroQueMaisRepete = array[i];
    }
  }
  return inteiroQueMaisRepete;
}

console.log(retornaInteiroQueMaisRepete([2, 3, 2, 5, 8, 2, 3]));