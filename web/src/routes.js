import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import NewSpot from "./pages/NewSpot";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Login} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/newspot" component={NewSpot} />
    </BrowserRouter>
  );
};

export default Routes;
