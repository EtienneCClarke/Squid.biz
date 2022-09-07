import React, { useEffect } from "react";
import { useWeb3React } from '@web3-react/core'
import { connectors } from './web3/connectors';
import { Redirect, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Connect from "./views/connect";
import Navigation from "./views/navigation";

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
        <Route path="/">
          {active ? <Navigation /> : <Connect />}
        </Route>
        <Route path="/connect">
          {active ? <Navigation /> : <Connect />}
        </Route>
        <Route path="/navigation">
          {!active ? <Connect /> : <Navigation />}
        </Route>
      </Switch>
    </Router>
  );
};