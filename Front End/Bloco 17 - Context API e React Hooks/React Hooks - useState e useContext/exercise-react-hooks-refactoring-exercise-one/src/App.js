import React, { createContext } from "react";
import "./App.css";
import Cars from "./Cars";

const initialValue = {
  redCar: false,
  blueCar: false,
  yellowCar: false,
};

export const CarContext = createContext();

function App() {
  const [cars, setCars] = React.useState(initialValue);
  const moveCar = (car) => {
    setCars({
      ...cars,
      [car]: !cars[car],
    });
  };
  return (
    <CarContext.Provider value={[cars, moveCar]}>
      <Cars />
    </CarContext.Provider>
  );
}

export default App;
