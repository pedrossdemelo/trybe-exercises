// Escreva uma função que receba um número inteiro maior que 0 e retorne uma Promise.
// Se o número for múltiplo de 3, resolva a Promise com o valor "Fizz".
// Se o número for múltiplo de 5, resolva a Promise com o valor "Buzz".
// Se o número for múltiplo de 3 e 5, resolva a Promise com o valor "FizzBuzz".
// Caso contrário, rejeite a Promise com o valor do número.

const readline = require("readline-sync");

function promise(number) {
  return new Promise((resolve, reject) => {
    if (typeof number !== "number") reject("Argumentos inválidos");
    if (number < 1) reject("Argumentos inválidos");
    if (number % 3 === 0 && number % 5 === 0) resolve("FizzBuzz");
    if (number % 3 === 0) resolve("Fizz");
    if (number % 5 === 0) resolve("Buzz");
    reject(number);
  });
}

const number = readline.questionInt("Digite um número: ");

promise(number).then(console.log).catch(console.error);
