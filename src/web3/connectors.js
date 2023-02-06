import { WalletLinkConnector } from '@web3-react/walletlink-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { InjectedConnector } from '@web3-react/injected-connector';

const coinbaseWallet = new WalletLinkConnector({
  url: "https://mainnet.infura.io/v3/ee92ed51df844114abbb1ec1a30ee014",
  appName: "Kollab Share",
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