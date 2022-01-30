enum Colors {
  Black = "black",
  White = "white",
  Red = "red",
  Silver = "silver",
}

enum Doors {
  FrontLeft = "front left",
  FrontRight = "front right",
  BackLeft = "back left",
  BackRight = "back right",
}

enum Directions {
  Forward = "forwards",
  Backward = "backwards",
  Left = "left",
  Right = "right",
}

export class Car {
  brand: string;
  color: Colors;
  doors: number;
  constructor(brand: string, color: Colors, doors: number) {
    this.brand = brand;
    this.color = color;
    this.doors = doors;
  }
  honk(): void {
    console.log('Beep!');
  }
  openTheDoor(door: Doors): void {
    console.log(`Opening the ${door} door`);
  }
  closeTheDoor(door: Doors): void {
    console.log(`Closing the ${door} door`);
  }
  turnOn(): void {
    console.log('The car is on');
  }
  turnOff(): void {
    console.log('The car is off');
  }
  speedUp(): void {
    console.log('The car is speeding up');
  }
  speedDown(): void {
    console.log('The car is slowing down');
  }
  stop(): void {
    console.log('The car is stopped');
  }
  turn(direction: Directions): void {
    console.log(`The car is turning ${direction}`);
  }
}