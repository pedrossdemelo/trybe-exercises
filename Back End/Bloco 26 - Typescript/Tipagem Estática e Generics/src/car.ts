export enum Colors {
  Black = "black",
  White = "white",
  Red = "red",
  Silver = "silver",
}

export enum Doors {
  FrontLeft = "front left",
  FrontRight = "front right",
  BackLeft = "back left",
  BackRight = "back right",
}

export enum Directions {
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
    console.log("Beep!");
  }

  openTheDoor(door: Doors): void {
    console.log(`Opening the ${door} door`);
  }

  closeTheDoor(door: Doors): void {
    console.log(`Closing the ${door} door`);
  }

  turnOn(): void {
    console.log(`The ${this.color} ${this.brand} is on`);
  }

  turnOff(): void {
    console.log(`The ${this.color} ${this.brand} is off`);
  }

  speedUp(): void {
    console.log(`The ${this.color} ${this.brand} is speeding up`);
  }

  speedDown(): void {
    console.log(`The ${this.color} ${this.brand} is slowing down`);
  }

  stop(): void {
    console.log(`The ${this.color} ${this.brand} stopped`);
  }

  turn(direction: Directions): void {
    console.log(`The ${this.color} ${this.brand} is turning ${direction}`);
  }
}
