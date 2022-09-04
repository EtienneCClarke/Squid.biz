import React from "react";
import { useDisclosure } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import SelectWalletModal from "../components/selectWalletModal"

export default function Connect () {

    const {
        isOpen,
        onOpen,
        onClose
    } = useDisclosure();

    return (
        <div>
            <p>Login Page</p>
            <Button variant="outline" onClick={onOpen}>Connect Wallet</Button>
            <SelectWalletModal isOpen={isOpen} closeModal={onClose} />
        </div>
    );
}