import React, { useEffect, useState } from "react";
import { useWeb3React } from '@web3-react/core'
import { connectors } from './web3/connectors';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Connect from "./views/connect";
import Navigation from "./views/navigation";
import Manage from "./views/manage";
import Create from "./views/create";
import Privacy from "./views/privacy";
import Terms from "./views/terms";

export default function App () {

  const [isActive, setIsActive] = useState('');

  let { 
    activate,
    active
  } = useWeb3React();

  useEffect(() => {
    const provider = window.localStorage.getItem('provider');
    if (provider) activate(connectors[provider])
  }, []);

  function handleClick() {
    setIsActive('hide');
  }

  return (
    <Router>
      <div
        className={"banner " + isActive}
        onClick={handleClick}
      >Kollab Share is currently in beta. In order to use please ensure you are on the Goerli testnet.</div>
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