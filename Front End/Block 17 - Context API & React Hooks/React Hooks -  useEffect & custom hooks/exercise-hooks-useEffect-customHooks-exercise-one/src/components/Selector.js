import React, { useContext } from "react";
import { Context } from "../App";

const renderOptions = (options) =>
  options.map((option) => (
    <option value={option} key={option}>
      {option}
    </option>
  ));

export default function Selector() {
  const { sub, setSub } = useContext(Context);
  return (
    <div className="Selector">
      <h1>Selected sub: {sub}</h1>
      <select onChange={(e) => setSub(e.target.value)} value={sub}>
        {renderOptions(["reactjs", "frontend", "angular", "vuejs"])}
      </select>
    </div>
  );
}
