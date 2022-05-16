"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const car_1 = require("./car");
const Uber = new car_1.Car("Volkswagen", car_1.Colors.Black, 4);
function getPassenger(car) {
    car.openTheDoor(car_1.Doors.FrontLeft);
    car.closeTheDoor(car_1.Doors.FrontLeft);
    car.turnOn();
    car.turn(car_1.Directions.Forward);
    car.speedUp();
    car.turn(car_1.Directions.Left);
    car.turn(car_1.Directions.Left);
    car.turn(car_1.Directions.Right);
    car.turn(car_1.Directions.Forward);
    car.turn(car_1.Directions.Right);
    car.turn(car_1.Directions.Right);
    car.turn(car_1.Directions.Forward);
    car.speedDown();
    car.stop();
    car.openTheDoor(car_1.Doors.BackLeft);
    car.closeTheDoor(car_1.Doors.BackLeft);
    console.log(`The passenger is in the ${car.color} ${car.brand}`);
}
function deliverPassenger(car) {
    car.turnOn();
    car.turn(car_1.Directions.Forward);
    car.speedUp();
    car.turn(car_1.Directions.Right);
    car.turn(car_1.Directions.Right);
    car.turn(car_1.Directions.Forward);
    car.turn(car_1.Directions.Left);
    car.turn(car_1.Directions.Left);
    car.turn(car_1.Directions.Right);
    car.turn(car_1.Directions.Right);
    car.turn(car_1.Directions.Forward);
    car.speedDown();
    car.stop();
    car.openTheDoor(car_1.Doors.BackLeft);
    car.closeTheDoor(car_1.Doors.BackLeft);
    console.log(`The passenger is out of the ${car.color} ${car.brand}`);
}
getPassenger(Uber);
deliverPassenger(Uber);
