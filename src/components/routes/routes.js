import React from "react";
import { Route, Switch } from "react-router-dom";
import Support from "../containers/Support";
import AboutWhyLeave from "../containers/AboutWhyLeave";
import Learn from "../containers/Learn";
import Map from "../map/map";

export default function Routes() {
  return (
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
  );
}
