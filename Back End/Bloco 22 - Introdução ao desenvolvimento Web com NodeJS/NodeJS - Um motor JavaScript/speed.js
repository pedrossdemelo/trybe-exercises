const readline = require("readline-sync");

const getSpeed = (distance, time) => distance / time;

function speed() {
  const distance = readline.questionInt("What's the distance in meters? ");
  const time = readline.questionInt("What's the time in seconds? ");

  const response = `Your speed is ${getSpeed(distance, time).toFixed(
    1
  )} m/s or ${(getSpeed(distance, time) * 3.6).toFixed(1)} km/h`;
  console.log(response);
}
speed();
module.exports = speed;