import { createStore } from "redux";
import { MOVE_CAR } from "./actionCreators";
import { CHANGE_SIGNAL } from "./actionCreators";
import { combineReducers } from "redux";

const initialCarState = {
  red: false,
  blue: false,
  yellow: false,
};

const initialSignalState = {
  color: "red",
};

function reducer(state = initialCarState, action) {
  switch (action.type) {
    case MOVE_CAR:
      return { [action.car]: action.side };
    default:
      return state;
  }
}

function reducer1(state = initialSignalState, action) {
  switch (action.type) {
    case CHANGE_SIGNAL:
      return { color: action.payload };
    default:
      return state;
  }
}

const combinedReducers = combineReducers({
  cars: reducer,
  signal: reducer1,
});

const store = createStore(
  combinedReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
