"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = exports.Directions = exports.Doors = exports.Colors = void 0;
var Colors;
(function (Colors) {
    Colors["Black"] = "black";
    Colors["White"] = "white";
    Colors["Red"] = "red";
    Colors["Silver"] = "silver";
})(Colors = exports.Colors || (exports.Colors = {}));
var Doors;
(function (Doors) {
    Doors["FrontLeft"] = "front left";
    Doors["FrontRight"] = "front right";
    Doors["BackLeft"] = "back left";
    Doors["BackRight"] = "back right";
})(Doors = exports.Doors || (exports.Doors = {}));
var Directions;
(function (Directions) {
    Directions["Forward"] = "forwards";
    Directions["Backward"] = "backwards";
    Directions["Left"] = "left";
    Directions["Right"] = "right";
})(Directions = exports.Directions || (exports.Directions = {}));
class Car {
    constructor(brand, color, doors) {
        this.brand = brand;
        this.color = color;
        this.doors = doors;
    }
    honk() {
        console.log("Beep!");
    }
    openTheDoor(door) {
        console.log(`Opening the ${door} door`);
    }
    closeTheDoor(door) {
        console.log(`Closing the ${door} door`);
    }
    turnOn() {
        console.log(`The ${this.color} ${this.brand} is on`);
    }
    turnOff() {
        console.log(`The ${this.color} ${this.brand} is off`);
    }
    speedUp() {
        console.log(`The ${this.color} ${this.brand} is speeding up`);
    }
    speedDown() {
        console.log(`The ${this.color} ${this.brand} is slowing down`);
    }
    stop() {
        console.log(`The ${this.color} ${this.brand} stopped`);
    }
    turn(direction) {
        console.log(`The ${this.color} ${this.brand} is turning ${direction}`);
    }
}
exports.Car = Car;
