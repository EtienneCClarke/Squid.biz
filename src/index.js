import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Web3ReactProvider, createWeb3ReactRoot } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";

import App from './App';

function getLibrary(provider) {
  const library = new Web3Provider(provider);
  return library;
}

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <Web3ReactProvider getLibrary={getLibrary}>
          <App />
      </Web3ReactProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);