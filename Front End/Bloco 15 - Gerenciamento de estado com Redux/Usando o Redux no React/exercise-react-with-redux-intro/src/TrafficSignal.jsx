import React from 'react';
import redSignal from './images/redSignal.jpeg';
import greenSignal from './images/greenSignal.jpeg';
import yellowSignal from './images/yellowSignal.jpeg';

const renderSignal = (signalColor) => {
  if (signalColor === 'red') {
    return redSignal;
  }
  if (signalColor === 'green') {
    return greenSignal;
  }
  if (signalColor === 'yellow') {
    return yellowSignal;
  }
  return null;
};

export default function TrafficSignal({ signalColor, changeSignal }) {
  return (
    <div>
      <div className="button-container">
        <button type="button">Red</button>
        <button type="button">Yellow</button>
        <button type="button">Green</button>
      </div>
      <img className="signal" src={renderSignal(signalColor)} alt="" />
    </div>
  );
}

const mapStateToProps = () => ({
  signalColor: /* Coloque seu código aqui... */
});

const mapDispatchToProps = () => ({
  changeSignal: /* Coloque seu código aqui... */
});
