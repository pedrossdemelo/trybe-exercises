import { createStore } from 'redux';
import { CHANGE_SIGNAL } from './actionCreators';

const initialState = {
  signal: {
    color: 'red',
  },
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SIGNAL:
      return { ...state, signal: { ...state.signal, color: action.payload } };
    default:
      return state;
  }
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
