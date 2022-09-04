import { WalletLinkConnector } from '@web3-react/walletlink-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { InjectedConnector } from '@web3-react/injected-connector';

const coinbaseWallet = new WalletLinkConnector({
  url: `https://mainnet.infura.io/v3/${process.env.REACT_APP_INFURA_KEY}`,
  appName: "Kollab Share",
  supportedChainIds: [1, 3],
});
 
const walletConnect = new WalletConnectConnector({
  rpcUrl: `https://mainnet.infura.io/v3/${process.env.REACT_APP_INFURA_KEY}`,
  bridge: "https://bridge.walletconnect.org",
  qrcode: true,
});
 
const injected = new InjectedConnector({
  supportedChainIds: [1, 3],
});

export const connectors = {
    injected: injected,
    walletConnect: walletConnect,
    coinbaseWallet: coinbaseWallet
}