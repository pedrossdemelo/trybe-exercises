// src/TrafficSignal.jsx

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeSignal } from './redux/actionCreators';
import redSignal from './images/redSignal.jpeg';
import yellowSignal from './images/yellowSignal.jpeg';
import greenSignal from './images/greenSignal.jpeg';

const renderSignal = (signalColor) => {
  if (signalColor === 'red') return redSignal;
  if (signalColor === 'yellow') return yellowSignal;
  if (signalColor === 'green') return greenSignal;
  return null;
};

const TrafficSignal = ({ signalColor, changeSignal }) => {
  return (
    <div>
      <div className="button-container">
        <button onClick={() => changeSignal('red')} type="button">
          Red
        </button>
        <button onClick={() => changeSignal('yellow')} type="button">
          Yellow
        </button>
        <button onClick={() => changeSignal('green')} type="button">
          Green
        </button>
      </div>
      <img className="signal" src={renderSignal(signalColor)} alt="" />
    </div>
  );
};

const mapStateToProps = (state) => ({
  signalColor: state.trafficReducer.signal.color
});

const mapDispatchToProps = { changeSignal };

TrafficSignal.propTypes = {
  changeSignal: PropTypes.func.isRequired,
  signalColor: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(TrafficSignal);
