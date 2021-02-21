import React from "react";
import { Route, Switch } from "react-router-dom";
import Support from "../support/Support";
import AboutWhyLeave from "../about/About";
import Learn from "../learn/Learn";
import Map from "../map/Map";

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