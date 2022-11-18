import React from "react";
import ReactDOM from "react-dom";
import Dettaglio from "./Dettaglio";

import "./index.css";

const App = () => (
  <div className="container">
    <Dettaglio />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
