interface IVehicle {
}

export interface IFlyingVehicle extends IVehicle {
  fly(): void;
}

export interface IDrivingVehicle extends IVehicle {
  drive(): void;
}

export interface IDrivingFlyingVehicle extends IFlyingVehicle, IDrivingVehicle {
}