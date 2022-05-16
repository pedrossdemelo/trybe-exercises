// src/TrafficSignal.jsx

import React from "react";
import PropTypes from "prop-types";
import redSignal from "./images/redSignal.jpeg";
import yellowSignal from "./images/yellowSignal.jpeg";
import greenSignal from "./images/greenSignal.jpeg";
import { useContext } from "react";
import { TrafficContext } from "./App";

const renderSignal = (signalColor) => {
  if (signalColor === "red") return redSignal;
  if (signalColor === "yellow") return yellowSignal;
  if (signalColor === "green") return greenSignal;
  return null;
};

export default function TrafficSignal() {
  const [signalColor, changeSignal] = useContext(TrafficContext);
  return (
    <div>
      <div className="button-container">
        <button onClick={() => changeSignal("red")} type="button">
          Red
        </button>
        <button onClick={() => changeSignal("yellow")} type="button">
          Yellow
        </button>
        <button onClick={() => changeSignal("green")} type="button">
          Green
        </button>
      </div>
      <img className="signal" src={renderSignal(signalColor)} alt="" />
    </div>
  );
}
