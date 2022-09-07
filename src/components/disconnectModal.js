import React from "react";
import {
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalOverlay,
} from "@chakra-ui/react";

import { useWeb3React } from "@web3-react/core";

export default function DisconnectModal ({ isOpen, closeModal}) {

    const {
        deactivate,
        account
    } = useWeb3React();

    const refreshState = () => {
        window.localStorage.setItem("provider", undefined);
    };

    const disconnect = () => {
        refreshState();
        deactivate();
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
                    <ModalCloseButton size={"sm"}/>
                    <div className="modal-header modal-center no-border flex-column">
                        <p className="modal-title">Connected Account</p>
                        <p className="connected-account">{account}</p>
                        <div
                            className="button bg-pink vtspace-50"
                            onClick={() => {
                                closeModal();
                                disconnect();
                            }}
                        >
                            Disconnect
                        </div>
                    </div>
                </ModalBody>
            </ModalContent>
        </Modal>
    );

};