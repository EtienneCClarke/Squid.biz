import React, { useEffect } from "react";
import { useWeb3React } from '@web3-react/core'
import { connectors } from './web3/connectors';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Connect from "./views/connect";
import Navigation from "./views/navigation";
import Manage from "./views/manage";
import Create from "./views/create";

export default function App () {

  let { 
    activate,
    active
  } = useWeb3React();

  useEffect(() => {
    const provider = window.localStorage.getItem('provider');
    if (provider) activate(connectors[provider])
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/create">
          {active ? <Create /> : <Connect />}
        </Route>
        <Route exact path="/manage">
          {active ? <Manage /> : <Connect />}
        </Route>
        <Route exact path="/navigation">
          {active ? <Navigation /> : <Connect />}
        </Route>
        <Route exact path="/">
          {active ? <Navigation /> : <Connect />}
        </Route>
        <Route exact path="/connect">
          {active ? <Navigation /> : <Connect />}
        </Route>
      </Switch>
    </Router>
  );
};