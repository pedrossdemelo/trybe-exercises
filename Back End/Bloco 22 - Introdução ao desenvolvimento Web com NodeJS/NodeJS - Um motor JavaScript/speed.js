const readline = require('readline-sync');

const speed = (distance, time) => distance / time;

const distance = readline.questionInt('What\'s the distance in meters? ');
const time = readline.questionInt('What\'s the time in seconds? ');

const response = `Your speed is ${speed(distance, time).toFixed(1)} m/s or ${(speed(distance, time) * 3.6).toFixed(1)} km/h`;

console.log(response);