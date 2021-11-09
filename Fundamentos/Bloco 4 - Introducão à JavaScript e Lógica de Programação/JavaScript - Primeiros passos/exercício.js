const a = 1;
const b = 2;
const c = 3;

// Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:
// Adição (a + b)
// Subtração (a - b)
// Multiplicação (a * b)
// Divisão (a / b)
// Módulo (a % b)

function soma(a, b) {
  return a + b;
}

function subtracao(a, b) {
  return a - b;
}

function multiplicacao(a, b) {
  return a * b;
}

function divisao(a, b) {
  return a / b;
}

function modulo(a, b) {
  return a % b;
}

// Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.

function maior(a, b) {
  if (a > b) {
    return a;
  }
  if (b > a) {
    return b;
  }
  return "Os números são iguais";
}

// Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

function maior3(a, b, c) {
  if (a > b && a > c) {
    return a;
  }
  if (b > a && b > c) {
    return b;
  }
  if (c > a && c > b) {
    return c;
  }
  return "Dois ou mais números são iguais";
}

// Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

function positivoOuNegativo(a) {
  if (a > 0) {
    return "positive";
  }
  if (a < 0) {
    return "negative";
  }
  return "zero";
}

// Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

function angulosTriangulo(a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0) {
    return "Ângulo inválido";
  }
  if (a + b + c === 180) {
    return true;
  }
  return false;
}

// Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
// Exemplo: bishop (bispo) -> diagonals (diagonais)

function pecaXadrez(peca) {
  switch (peca.toLowerCase()) {
    case "peão":
      return "Movimentar apenas uma casa para frente";
    case "bispo":
      return "Movimentar nas diagonais";
    case "cavalo":
      return "Movimentar em L";
    case "rainha":
      return "Movimentar nas diagonais e horizontais";
    case "rei":
      return "Movimentar nas diagonais, horizontais e na vertical";
    case "torre":
      return "Movimentar nas horizontais e na vertical";
    default:
      return "Peça inválida";
  }
}