const readline = require('readline-sync');
const calcIMC = (height, weight) =>  weight / (height * height);
const height = readline.question('What\'s your height in meters? ');
const weight = readline.question('What\'s your weight in kilograms? ');
const response = `Your IMC is ${calcIMC(height, weight).toFixed(2)}`;
console.log(response);