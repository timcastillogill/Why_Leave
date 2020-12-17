import React from "react";
import { Route, Switch } from "react-router-dom";
import Support from "../containers/Support";


export default function Routes() {
  return (
    <Switch>
      <Route exact path="/support">
        <Support />
      </Route>
    </Switch>
  );
}
