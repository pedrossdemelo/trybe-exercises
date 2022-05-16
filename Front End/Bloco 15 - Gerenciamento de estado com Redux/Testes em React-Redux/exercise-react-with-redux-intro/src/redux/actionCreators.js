export const MOVE_CAR = "MOVE_CAR";
export const CHANGE_SIGNAL = "CHANGE_SIGNAL";

export const moveCar = (car, side) => ({
  type: MOVE_CAR,
  car,
  side,
});

export const changeSignal = (payload) => ({
  type: CHANGE_SIGNAL,
  payload,
});
