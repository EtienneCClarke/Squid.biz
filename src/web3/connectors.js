import { WalletLinkConnector } from '@web3-react/walletlink-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { InjectedConnector } from '@web3-react/injected-connector';

const RPC_URLS = {
  1: process.env.REACT_APP_RPC_ETHEREUM,
  5: process.env.REACT_APP_RPC_GOERLI,
  56: process.env.REACT_APP_RPC_BNB,
  137: process.env.REACT_APP_RPC_POLYGON,
  43113: process.env.REACT_APP_RPC_FUJI,
  43114: process.env.REACT_APP_RPC_AVALANCHE,
  80001: process.env.REACT_APP_RPC_MUMBAI
}

const coinbaseWallet = new WalletLinkConnector({
  appName: "Squid.biz",
  supportedChainIds: [1, 5, 137, 43113, 43114, 80001],
});

const walletConnect = new WalletConnectConnector({
  rpc: RPC_URLS,
  bridge: "https://bridge.walletconnect.org",
  supportedChainIds: [1, 5, 137, 43113, 43114, 80001],
  qrcode: true,
});

const injected = new InjectedConnector({
  supportedChainIds: [1, 5, 137, 43113, 43114, 80001],
});

export const connectors = {
    injected: injected,
    walletConnect: walletConnect,
    coinbaseWallet: coinbaseWallet
}