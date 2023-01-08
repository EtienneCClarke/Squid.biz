import React, { useEffect } from "react";
import { useWeb3React } from '@web3-react/core'
import { connectors } from './web3/connectors';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { useDisclosure } from "@chakra-ui/react";
import Landing from "./views/landing";
import Connect from "./views/connect";
import Navigation from "./views/navigation";
import Manage from "./views/manage";
import Create from "./views/create";
import Privacy from "./views/privacy";
import Terms from "./views/terms";

export default function App () {

  const {
    isOpen,
    onOpen,
    onClose
  } = useDisclosure();

  let { 
    activate,
    active
  } = useWeb3React();

  useEffect(() => {
    const provider = window.localStorage.getItem('provider', undefined);
    if (provider) activate(connectors[provider]);
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
        <Route exact path="/connect">
          {active ? <Navigation /> : <Connect />}
        </Route>
        <Route exact path="/privacy_policy">
          <Privacy />
        </Route>
        <Route exact path="/terms_and_conditions">
          <Terms />
        </Route>
        <Route exact path="*">
          <Landing />
        </Route>
      </Switch>
    </Router>
  );
};