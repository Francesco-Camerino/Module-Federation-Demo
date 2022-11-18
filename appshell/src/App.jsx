import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';



const App = () => {
  const Catalogo = React.lazy(() => import("catalogo/Catalogo"));
  const Dettaglio = React.lazy(() => import("dettaglio/Dettaglio"));
  const Template = React.lazy(() => import("home/Template"));
  const Home = React.lazy(() => import("home/Home"));
  const renderMFE = (MFE) => {
    return (
      <React.Suspense fallback="Loading...">
        <MFE />
      </React.Suspense>
    )
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={renderMFE(Template)}>
          <Route path="/" element={<Navigate to={"/Home"} replace={true} />} />
          <Route path={"/Home"} element={renderMFE(Home)} />
          <Route path={"/Catalogo"} element={renderMFE(Catalogo)} />
          <Route path={"/Dettaglio"} element={renderMFE(Dettaglio)} />
        </Route>
      </Routes>
    </Router>
  )

};
ReactDOM.render(<App />, document.getElementById("app"));
