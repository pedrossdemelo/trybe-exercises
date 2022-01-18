import React from "react";
import { render } from "react-dom";
import App, { Provider } from "./App";
import "./index.css";


render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById("root")
);
