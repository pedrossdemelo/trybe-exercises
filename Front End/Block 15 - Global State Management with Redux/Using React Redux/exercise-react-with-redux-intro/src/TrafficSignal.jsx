import React from "react";
import redSignal from "./images/redSignal.jpeg";
import greenSignal from "./images/greenSignal.jpeg";
import yellowSignal from "./images/yellowSignal.jpeg";
import { connect } from "react-redux";
import { changeSignal } from "./redux/actionCreators.js";

const renderSignal = (signalColor) => {
  switch (signalColor) {
    case "red":
      return redSignal;
    case "green":
      return greenSignal;
    case "yellow":
      return yellowSignal;
    default:
      return null;
  }
};

function TrafficSignal({ signalColor, changeSignal }) {
  return (
    <div>
      <div className="button-container">
        <button type="button" onClick={() => changeSignal("red")}>
          Red
        </button>
        <button type="button" onClick={() => changeSignal("yellow")}>
          Yellow
        </button>
        <button type="button" onClick={() => changeSignal("green")}>
          Green
        </button>
      </div>
      <img className="signal" src={renderSignal(signalColor)} alt="" />
    </div>
  );
}

const mapStateToProps = (state) => ({
  signalColor: state.signal.color,
});

const mapDispatchToProps = (dispatch) => ({
  changeSignal: (color) => dispatch(changeSignal(color)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TrafficSignal);
