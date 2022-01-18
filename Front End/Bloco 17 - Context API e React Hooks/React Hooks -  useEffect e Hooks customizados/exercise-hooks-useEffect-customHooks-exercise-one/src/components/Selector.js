import React from 'react';

const renderOptions = (options) => (
  options.map((option) => (
    <option
      value={option}
      key={option}
    >
      {option}
    </option>
  ))
);

export default function Selector() {
  return (
    <div className="Selector">
      <h1>Selector</h1>
      <select>
        {renderOptions(['Option 1', 'Option 2', 'Option 3'])}
      </select>
    </div>
  )
};