import React from "react";
import { useDisclosure } from "@chakra-ui/react";
import SelectWalletModal from "../components/selectWalletModal";

import logo256 from "../assets/logo/logo256.png"
import "../css/style.css";

export default function Connect () {

    const {
        isOpen,
        onOpen,
        onClose
    } = useDisclosure();

    return (
        <div className="view">
            <img src={logo256} alt="Dream Kollab Logo" className="logo"/>
            <h1 className="title-large">Kollab Share</h1>
            <p 
                className="connect-button bg-blue vtspace-200"
                onClick={onOpen}
            >
                Connect Wallet
            </p>
            <p
                className="plain-text-button vtspace-25"
            >
                What are crypto wallets?
            </p>
            <SelectWalletModal isOpen={isOpen} closeModal={onClose} />
            <p className="powered-tag">Powered By Dream Kollab</p>
        </div>
    );
}