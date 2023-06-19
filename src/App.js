import React, { useEffect } from "react";
import { Route, BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import Landing from "./views/landing";
import Privacy from "./views/privacy";
import Terms from "./views/terms";
import FAQ from "./views/FAQ";

export default function App () {

  return (
    <Router>
      <Switch>
        <Route exact path="/privacy_policy">
          <Privacy />
        </Route>
        <Route exact path="/terms_and_conditions">
          <Terms />
        </Route>
        <Route exact path="/FAQs">
          <FAQ />
        </Route>
        <Route exact path="*">
          <Landing />
        </Route>
      </Switch>
    </Router>
  );
};