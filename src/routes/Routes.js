import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import View from "../pages/View";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/view" component={View} />
      </Switch>
    </Router>
  );
};

export default Routes;