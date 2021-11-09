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

// Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.
// Valor de teste: N = 5 .
// Valor esperado no retorno da função: 1+2+3+4+5 = 15 .

function somatorioDeNumerosDe1AteN(n) {
  let somatorio = 0;
  for (let i = 1; i <= n; i++) {
    somatorio += i;
  }
  return somatorio;
}

console.log(somatorioDeNumerosDe1AteN(5));

// Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .
// Valor de teste: 'trybe' e 'be'
// Valor esperado no retorno da função: true
// verificaFimPalavra('trybe', 'be') ;
// Retorno esperado: true
// verificaFimPalavra('joaofernando', 'fernan') ;
// Retorno esperado: false

function verificaFimPalavra(word, ending) {
  let fimPalavra = false;
  for (let i = 0; i < ending.length; i++) {
    if (word[word.length - 1 - i] === ending[ending.length - 1 - i]) {
      fimPalavra = true;
    } else {
      fimPalavra = false;
      break;
    }
  }
  return fimPalavra;
}

console.log(verificaFimPalavra('trybe', 'be'));
console.log(verificaFimPalavra('joaofernando', 'fernan'));

// Bonus
// (Difícil) Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.
// Atenção! Esse exercício já apareceu no processo seletivo de uma grande multinacional!
// Dicas:
// Uma string é um array de caracteres, então cada elemento do array é uma letra.
// O valor de cada numeral romano é:
// Copiar
// | I   | 1    |
// | --- | ---- |
// | IV  | 4    |
// | V   | 5    |
// | IX  | 9    |
// | X   | 10   |
// | XL  | 40   |
// | L   | 50   |
// | XC  | 90   |
// | C   | 100  |
// | CD  | 400  |
// | D   | 500  |
// | CM  | 900  |
// | M   | 1000 |
// Que tal criar um objeto que associe cada letra a um numeral para fácil consulta?
// Atenção! Quando você tem um número pequeno à direita de um número grande, eles devem ser somados. Exemplo: XI = 10 + 1 = 11. No entanto, se o número pequeno está à esquerda de um número maior que ele, ele deve ser subtraído. Exemplo: IX = 10 - 1 = 9.

var romanToInt = function(s) {
  let result = 0;
  for (let i=0;i<s.length;i++){
      switch (s[i]) {
          case "I":
              result+=1;
              break;
          case "V":
              result+= s[i-1] !== "I" ? 5 : 3;
              break;
          case "X":
              result+= s[i-1] !== "I" ? 10 : 8;
              break;
          case "L":
              result+= s[i-1] !== "X" ? 50 : 30;
              break;
          case "C":
              result+= s[i-1] !== "X" ? 100 : 80;
              break;
          case "D":
              result+= s[i-1] !== "C" ? 500 : 300;
              break;
          case "M":
              result+= s[i-1] !== "C" ? 1000 : 800;
              break;
      }
  }
  return result;
};

console.log(romanToInt('MCMXCIV'));

// Disclaimer: Eu já fiz esse exercício no leetcode antes mesmo de entrar pra Trybe 😂, o link pro source é esse aqui:
// https://leetcode.com/submissions/detail/572726655/
// Obs: o meu runtime é mais rápido que 87,32% das submissões do leetcode e meu uso de memória é menor que 96,87% das submissões também 🤓.
// Obs2: essa função só é valida pra números romanos de 1 a 3999, como o leetcode especificou.