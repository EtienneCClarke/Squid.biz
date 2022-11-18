import React, { useEffect, useState } from "react";
import { useWeb3React } from '@web3-react/core'
import { connectors } from './web3/connectors';
import { Route, BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import Landing from "./views/landing";
import Connect from "./views/connect";
import Navigation from "./views/navigation";
import Manage from "./views/manage";
import Create from "./views/create";
import Privacy from "./views/privacy";
import Terms from "./views/terms";

export default function App () {

  let { 
    activate,
    active
  } = useWeb3React();

  useEffect(() => {
    const provider = window.localStorage.getItem('provider');
    if (provider) activate(connectors[provider]);
  }, []);


  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route exact path="/create">
          {active ? <Create /> : <Redirect to="/" />}
        </Route>
        <Route exact path="/manage">
          {active ? <Manage /> : <Redirect tp="/" />}
        </Route>
        <Route exact path="/navigation">
          {active ? <Navigation /> : <Redirect to="/" />}
        </Route>
        <Route exact path="/connect">
          {active ? <Redirect to="/navigation" /> : <Connect />}
        </Route>
        <Route exact path="/privacy_policy">
          <Privacy />
        </Route>
        <Route exact path="/terms_and_conditions">
          <Terms />
        </Route>
      </Switch>
    </Router>
  );
};