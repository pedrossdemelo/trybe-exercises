import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import { combinedReducers } from './redux';

const renderWithRedux = (
  component,
  { initialState, store = createStore(combinedReducers, initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  }
}

describe("Testing the cars movement with redux", () => {
  it("should render the initial states", () => {
    renderWithRedux(<App />)
    const redCar = screen.getByTestId("red-car");
    const blueCar = screen.getByTestId("blue-car");
    const yellowCar = screen.getByTestId("yellow-car");
    expect(redCar).toHaveClass("car-left");
    expect(blueCar).toHaveClass("car-left");
    expect(yellowCar).toHaveClass("car-left");
  })
  it("should change states when an action is dispatched", () => {
    const { store } = renderWithRedux(<App />)
    const redCar = screen.getByTestId("red-car");
    const blueCar = screen.getByTestId("blue-car");
    const yellowCar = screen.getByTestId("yellow-car");
    store.dispatch({ type: "MOVE_CAR", car: "red", side: true});
    expect(redCar).toHaveClass("car-right");
    store.dispatch({ type: "MOVE_CAR", car: "blue", side: true});
    expect(blueCar).toHaveClass("car-right");
    store.dispatch({ type: "MOVE_CAR", car: "yellow", side: true});
    expect(yellowCar).toHaveClass("car-right");
  })
})