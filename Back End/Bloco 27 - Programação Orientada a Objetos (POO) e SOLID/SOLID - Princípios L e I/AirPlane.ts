import { IFlyingVehicle } from "./interfaces";

export default class AirPlane implements IFlyingVehicle {
  fly(): void { console.log('Flying an airplane'); }
}