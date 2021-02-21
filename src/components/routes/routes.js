import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Support from "../containers/Support";
import AboutWhyLeave from "../containers/AboutWhyLeave";
import Learn from "../containers/Learn";
import Map from "../map/Map";

export default function Routes() {
  return (
  <Router>
    <Switch>
      <Route exact path="/">
        <Map />
      </Route>
      <Route exact path="/learn">
        <Learn />
      </Route>
      <Route exact path="/support">
        <Support />
      </Route>
      <Route exact path="/about-why-leave">
        <AboutWhyLeave />
      </Route>
    </Switch>
  </Router>
  );
}