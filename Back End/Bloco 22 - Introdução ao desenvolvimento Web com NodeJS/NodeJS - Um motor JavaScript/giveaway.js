const readline = require('readline-sync');

const randomInt = Math.floor(Math.random() * 11);
const guess = readline.questionInt('Guess a number between 0 and 10: ');

const response = guess === randomInt ? 'You guessed it!' : 'You didn\'t guess it! The number was ' + randomInt;

console.log(response);