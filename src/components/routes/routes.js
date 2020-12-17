import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "../containers/About";
import Support from "../containers/Support";
import AboutWhyLeave from "../containers/AboutWhyLeave";
import Learn from "../containers/Learn";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/learn">
        <Learn />
      </Route>
      <Route exact path="/about">
        <About />
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
