import { IFlyingVehicle, IDrivingVehicle } from './interfaces';

export default class FuturisticCar implements IFlyingVehicle, IDrivingVehicle {
  drive(): void { console.log('Drive a futuristic car'); }

  fly(): void { console.log('Flying a futuristic car'); }
}