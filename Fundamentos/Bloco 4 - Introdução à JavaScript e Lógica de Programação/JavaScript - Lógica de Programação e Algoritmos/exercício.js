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

