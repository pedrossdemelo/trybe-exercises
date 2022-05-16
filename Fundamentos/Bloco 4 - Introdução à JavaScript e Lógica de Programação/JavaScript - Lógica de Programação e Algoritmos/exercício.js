// Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:
// n = 5
// *****
// *****
// *****
// *****
// *****

function asteriskSquare(n) {
  for (let i = 0; i < n; i++) {
    console.log('*'.repeat(n));
  }
}

// Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:
// n = 5
// *
// **
// ***
// ****
// *****

function asteriskTriangle(n) {
  for (let i = 0; i < n; i++) {
    console.log('*'.repeat(i + 1));
  }
}

// Agora espelhe o lado do triângulo. Por exemplo:
// n = 5
//     *
//    **
//   ***
//  ****
// *****

function asteriskTriangleMirrored(n) {
  for (let i = 0; i < n; i++) {
    console.log(`${' '.repeat(n - i - 1)}${'*'.repeat(i + 1)}`);
  }
}

// Depois, faça uma pirâmide com n asteriscos de base. Por exempo:
// n = 5
//   *
//  ***
// *****

function asteriskPyramid(n) {
  if (n % 2 !== 0) {
    for (let i = 0; i < n; i++) {
      nAsterisk = 1 + 2 * i;
      nSpace = (n - nAsterisk) / 2;
      if (nAsterisk <= n) console.log(`${' '.repeat(nSpace)}${'*'.repeat(nAsterisk)}`);
    }
  }
}

// Bonus
// Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:
// Por último, façamos com que a variável seja incrementada com o valor correspondente a cada loop;
// n = 7
//    *
//   * *
//  *   *
// *******

function asteriskPyramidEmpty(n) {
  if (n % 2 !== 0) {
    for (let i = 0; i < n; i++) {
      nAsterisk = 1 + 2 * i;
      nSpace = (n - nAsterisk) / 2;
      if (nAsterisk <= n) {
        if (i === 0) console.log(`${' '.repeat(nSpace)}*`);
        if (nAsterisk < n && i > 0) console.log(`${' '.repeat(nSpace)}*${' '.repeat(nAsterisk - 2)}*`);
        if (nAsterisk === n) console.log(`${'*'.repeat(nAsterisk)}`);
      }
    }
  }
}

// Faça um programa que diz se um número definido numa variável é primo ou não.
// Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão dele com quaisquer outros números dá resto diferente de zero.
// Dica: você vai precisar de fazer um loop que vá de 0 ao número definido; Além disso, vai precisar de fazer uma checagem a cada iteração e armazenar os resultados em algum lugar.

function isPrime(n) {
  let isPrime = true;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      isPrime = false;
      break;
    }
  }
  return isPrime;
}
