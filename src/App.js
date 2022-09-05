import React, { useEffect } from "react";
import { useWeb3React } from '@web3-react/core'
import { connectors } from './web3/connectors';
import { Redirect, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Connect from "./views/connect";

export default function App() {

  let { 
    activate,
    // deactivate,
    active
  } = useWeb3React();

  // const refreshState = () => {
  //   window.localStorage.setItem("provider", undefined);
  // }

  // const disconnect = () => {
  //   refreshState();
  //   deactivate();
  // }

  // useEffect(() => {
  //   const provider = window.localStorage.getItem('provider');
  //   if (provider) activate(connectors[provider])
  // }, []);

  return (
    <Router>
      <Switch>
        <Route path="/">
          {active ? <Redirect to="/menu" /> : <Connect />}
        </Route>
        <Route path="/connect">
          {active ? <Redirect to="/menu" /> : <Connect />}
        </Route>
      </Switch>
    </Router>
  );
};