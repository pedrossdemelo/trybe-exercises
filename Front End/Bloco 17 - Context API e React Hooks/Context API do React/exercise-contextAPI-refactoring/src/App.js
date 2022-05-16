import React, { createContext } from "react";
import TrafficSignal from "./TrafficSignal";
import "./App.css";
import Cars from "./Cars";

export const TrafficContext = createContext();
export const CarContext = createContext();

function App() {
  const [signalColor, changeSignal] = React.useState("red");
  const [cars, setCars] = React.useState({
    red: false,
    blue: false,
    green: false,
  });
  const moveCar = (color) => setCars({ ...cars, [color]: !cars[color] });
  return (
    <div className="container">
      <CarContext.Provider value={[cars, moveCar]}>
        <Cars />
      </CarContext.Provider>
      <TrafficContext.Provider value={[signalColor, changeSignal]}>
        <TrafficSignal />
      </TrafficContext.Provider>
    </div>
  );
}

export default App;
