import React from "react";
import {
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalOverlay,
} from "@chakra-ui/react";
import { useWeb3React } from "@web3-react/core";
import { connectors } from "../web3/connectors";

import MetaMaskLogo from "../assets/icons/metamask.png";
import CoinbaseLogo from "../assets/icons/coinbase.png";
import WalletConnectLogo from "../assets/icons/walletconnect.png";
import "../css/style.css";

export default function SelectWalletModal({ isOpen, closeModal }) {
    
    const { activate } = useWeb3React();

    const setProvider = (type) => {
        window.localStorage.setItem("provider", type);
    }

    return (
        <Modal 
            isOpen={isOpen}
            onClose={closeModal}
            size={"xs"}
            isCentered
        >
            <ModalOverlay
                bg='blackAlpha.50'
                backdropFilter='blur(2px)'
            />
            <ModalContent>
                <ModalBody className="modal">
                    <div className="modal-header modal-center">
                        <p className="modal-title">Connect a wallet</p>
                        <ModalCloseButton />
                    </div>
                    <div className="modal-body flex flex-column">
                        <div
                            className="connector-button flex flex-row flex-row-align"
                            onClick={() => {
                                activate(connectors.injected);
                                setProvider("injected");
                                closeModal();
                            }}
                        >
                            MetaMask
                            <div className="connector-icon push-right">
                                <img src={MetaMaskLogo} />
                            </div>
                        </div>
                        <div
                            className="connector-button flex flex-row flex-row-align"
                            onClick={() => {
                                activate(connectors.coinbaseWallet);
                                setProvider("coinbaseWallet");
                                closeModal();
                            }}
                        >
                            Coinbase
                            <div className="connector-icon push-right">
                                <img src={CoinbaseLogo} />
                            </div>
                        </div>
                        <div
                            className="connector-button flex flex-row flex-row-align"
                            onClick={() => {
                                activate(connectors.walletConnect);
                                setProvider("walletConnect");
                                closeModal();
                            }}
                        >
                            WalletConnect
                            <div className="connector-icon push-right">
                                <img src={WalletConnectLogo} />
                            </div>
                        </div>
                    </div>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}