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

export default function SelectWalletModal ({ isOpen, closeModal }) {
    
    const { activate } = useWeb3React();

    const setProvider = (type) => {
        window.localStorage.setItem("provider", type);
    }

    return (
        <Modal 
            isOpen={isOpen}
            onClose={closeModal}
            size={"md"}
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
                        <ModalCloseButton size={"sm"}/>
                    </div>
                    <div className="modal-body flex flex-column">
                        <div
                            className="connector-button flex flex-row flex-align-center"
                            onClick={() => {
                                activate(connectors.injected);
                                setProvider("injected");
                                closeModal();
                                window.location.replace("/dashboard");
                            }}
                        >
                            MetaMask
                            <div className="connector-icon push-right">
                                <img src={MetaMaskLogo} alt="metamask logo"/>
                            </div>
                        </div>
                        <div
                            className="connector-button flex flex-row flex-align-center"
                            onClick={() => {
                                activate(connectors.coinbaseWallet);
                                setProvider("coinbaseWallet");
                                closeModal();
                                window.location.replace("/dashboard");
                            }}
                        >
                            Coinbase
                            <div className="connector-icon push-right">
                                <img src={CoinbaseLogo} alt="coinbase logo"/>
                            </div>
                        </div>
                        <div
                            className="connector-button flex flex-row flex-align-center"
                            onClick={() => {
                                activate(connectors.walletConnect);
                                setProvider("walletConnect");
                                closeModal();
                                window.location.replace("/dashboard");
                            }}
                        >
                            WalletConnect
                            <div className="connector-icon push-right">
                                <img src={WalletConnectLogo} alt="wallet connect logo"/>
                            </div>
                        </div>
                        <p
                            className="tc-warning"
                        >
                            By connecting a wallet you agree to the
                            <a
                                className="link"
                                href="./terms_and_conditions"
                            >
                                 {" "}terms and conditions{" "}
                            </a>
                            and our
                            <a
                                className="link"
                                href="./privacy_policy"
                            >
                                {" "}privacy policy
                            </a>
                        </p>
                    </div>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}