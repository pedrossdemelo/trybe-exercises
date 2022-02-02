import { IVehicle } from "./interfaces";

export default class AirPlane implements IVehicle {
  drive(): void {}

  fly(): void { console.log('Flying an airplane'); }
}