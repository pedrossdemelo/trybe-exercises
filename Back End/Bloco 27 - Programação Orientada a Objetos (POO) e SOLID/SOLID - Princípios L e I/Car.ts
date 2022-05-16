import { IDrivingVehicle } from "./interfaces";

export default class Car implements IDrivingVehicle {
  drive(): void { console.log('Drive a car'); }
}