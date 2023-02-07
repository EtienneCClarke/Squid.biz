import { WalletLinkConnector } from '@web3-react/walletlink-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { InjectedConnector } from '@web3-react/injected-connector';

const RPC_URLS = {
  1: process.env.REACT_APP_ALCHEMY_RPC_ETHEREUM,
  2: process.env.REACT_APP_ALCHEMY_RPC_GOERLI,
  3: process.env.REACT_APP_ALCHEMY_RPC_POLYGON,
  4: process.env.REACT_APP_ALCHEMY_RPC_MUMBAI
}

const coinbaseWallet = new WalletLinkConnector({
  appName: "Squid.biz",
  supportedChainIds: [1, 5, 137, 80001],
});
 
const walletConnect = new WalletConnectConnector({
  rpc: RPC_URLS,
  bridge: "https://bridge.walletconnect.org",
  supportedChainIds: [1, 5, 137, 80001],
  qrcode: true,
});
 
const injected = new InjectedConnector({
  supportedChainIds: [1, 5, 137, 80001],
});

export const connectors = {
    injected: injected,
    walletConnect: walletConnect,
    coinbaseWallet: coinbaseWallet
}