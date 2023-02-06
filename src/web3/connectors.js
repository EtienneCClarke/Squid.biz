import { WalletLinkConnector } from '@web3-react/walletlink-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { InjectedConnector } from '@web3-react/injected-connector';

const coinbaseWallet = new WalletLinkConnector({
  appName: "Squid.biz",
  supportedChainIds: [1, 5, 137, 80001],
});
 
const walletConnect = new WalletConnectConnector({
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