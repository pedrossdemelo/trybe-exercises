import React from "react";
import carBlue from "./images/carBlue.jpeg";
import carRed from "./images/carRed.jpeg";
import carYellow from "./images/carYellow.jpeg";
import { connect } from "react-redux";
import { moveCar } from "./redux/actionCreators";

function Cars({ redCar, blueCar, yellowCar, moveCar }) {
  return (
    <div>
      <div>
        <img
          className={redCar ? "car-right" : "car-left"}
          src={carRed}
          alt="red car"
          data-testid="red-car"
        />
        <button onClick={() => moveCar("red", !redCar)} type="button">
          move
        </button>
      </div>
      <div>
        <img
          className={blueCar ? "car-right" : "car-left"}
          src={carBlue}
          alt="blue car"
          data-testid="blue-car"
        />
        <button onClick={() => moveCar("blue", !blueCar)} type="button">
          move
        </button>
      </div>
      <div>
        <img
          className={yellowCar ? "car-right" : "car-left"}
          src={carYellow}
          alt="yellow car"
          data-testid="yellow-car"
        />
        <button onClick={() => moveCar("yellow", !yellowCar)} type="button">
          move
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  redCar: state.cars.red,
  blueCar: state.cars.blue,
  yellowCar: state.cars.yellow,
});

const mapDispatchToProps = (dispatch) => ({
  moveCar: (car, side) => dispatch(moveCar(car, side))
});

export default connect(mapStateToProps, mapDispatchToProps)(Cars)