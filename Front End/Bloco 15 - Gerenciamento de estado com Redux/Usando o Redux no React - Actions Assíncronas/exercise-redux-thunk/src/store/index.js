// Importe o método applyMiddleware
import { createStore } from 'redux';
// Importe o redux-thunk
import rootReducer from '../reducers';

// Aplique o middleware
const store = createStore(
  rootReducer,
);

export default store;
