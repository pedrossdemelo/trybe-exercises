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

