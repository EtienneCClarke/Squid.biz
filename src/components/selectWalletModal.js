import React from "react";
import {
    Modal,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalContent,
    ModalOverlay,
    VStack,
    Button
} from "@chakra-ui/react";
import { useWeb3React } from "@web3-react/core";
import { connectors } from "../web3/connectors";

export default function SelectWalletModal({ isOpen, closeModal }) {
    
    const { activate } = useWeb3React();

    const setProvider = (type) => {
        window.localStorage.setItem("provider", type);
    }

    return (
        <Modal isOpen={isOpen} onClose={closeModal} isCentered>
            <ModalOverlay />
            <ModalContent w="300px">
                <ModalHeader>Connect a wallet</ModalHeader>
                <ModalCloseButton
                    _focus={{
                        boxShadow: "none"
                    }}
                />
                <ModalBody paddingBottom="1.5rem">
                    <VStack>
                        <Button
                            variant="outline"
                            onClick={() => {
                                activate(connectors.coinbaseWallet);
                                setProvider("coinbaseWallet");
                                closeModal();
                            }}
                        >
                            Coinbase Wallet
                        </Button>
                        <Button
                            variant="outline"
                            onClick={() => {
                                activate(connectors.walletConnect);
                                setProvider("walletConnect");
                                closeModal();
                            }}
                        >
                            Wallet Connect
                        </Button>
                        <Button
                            variant="outline"
                            onClick={() => {
                                activate(connectors.injected);
                                setProvider("injected");
                                closeModal();
                            }}
                        >
                            Metamask
                        </Button>
                    </VStack>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}