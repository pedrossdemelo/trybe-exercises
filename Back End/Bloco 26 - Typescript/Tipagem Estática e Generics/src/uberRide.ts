import { Car, Doors, Directions, Colors } from "./car";

const Uber = new Car("Volkswagen", Colors.Black, 4);

function getPassenger(car: Car): void {
  car.openTheDoor(Doors.FrontLeft);
  car.closeTheDoor(Doors.FrontLeft);
  car.turnOn();
  car.turn(Directions.Forward);
  car.speedUp();
  car.turn(Directions.Left);
  car.turn(Directions.Left);
  car.turn(Directions.Right);
  car.turn(Directions.Forward);
  car.turn(Directions.Right);
  car.turn(Directions.Right);
  car.turn(Directions.Forward);
  car.speedDown();
  car.stop();
  car.openTheDoor(Doors.BackLeft);
  car.closeTheDoor(Doors.BackLeft);
  console.log(`The passenger is in the ${car.color} ${car.brand}`);
}

function deliverPassenger(car: Car): void {
  car.turnOn();
  car.turn(Directions.Forward);
  car.speedUp();
  car.turn(Directions.Right);
  car.turn(Directions.Right);
  car.turn(Directions.Forward);
  car.turn(Directions.Left);
  car.turn(Directions.Left);
  car.turn(Directions.Right);
  car.turn(Directions.Right);
  car.turn(Directions.Forward);
  car.speedDown();
  car.stop();
  car.openTheDoor(Doors.BackLeft);
  car.closeTheDoor(Doors.BackLeft);
  console.log(`The passenger is out of the ${car.color} ${car.brand}`);
}

getPassenger(Uber);
deliverPassenger(Uber);