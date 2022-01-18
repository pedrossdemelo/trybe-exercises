// src/redux/index.js

import { createStore, combineReducers } from 'redux';
import carReducer from './carReducer';
import trafficReducer from './trafficReducer';

const reducer = combineReducers({
  carReducer,
  trafficReducer});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;