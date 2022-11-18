import React from "react";
import ReactDOM from "react-dom";
import Catalogo from "./Catalogo";

import "./index.css";

const App = () => (
  <div className="container">
    <div>Porta 4001</div>
    <Catalogo />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
