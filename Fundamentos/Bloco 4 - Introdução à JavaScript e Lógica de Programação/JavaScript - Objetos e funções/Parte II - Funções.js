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