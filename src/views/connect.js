import React from "react";
import { useDisclosure } from "@chakra-ui/react";
import SelectWalletModal from "../components/selectWalletModal";
import useWindowDimensions from "../utils/useWindowDimensions";
import InfoModal from "../components/infoModal";
import logo from "../assets/images/png/squid_logo_circle_purple.png";
import "../css/style.css";

export default function Connect () {

    const { height } = useWindowDimensions();

    const {
        isOpen: isConnectOpen,
        onOpen: onConnectOpen,
        onClose: onConnectClose
    } = useDisclosure();

    const {
        isOpen: isInfoOpen,
        onOpen: onInfoOpen,
        onClose: onInfoClose
    } = useDisclosure();

    return (
        <div className="view scrollable-y flex flex-column flex-center flex-align-center bg-purple">
            <a href="./"><img src={logo} alt="Dream Kollab Logo" draggable="false" className="logo"/></a>
            <h1 className="title-large white">Squid.biz</h1>
            <p 
                className={"connect-button bg-blue " + (height < 700 ? "vtspace-75" : "vtspace-200")}
                onClick={onConnectOpen}
            >
                Connect Wallet
            </p>
            <p
                className="plain-text-button vtspace-25 white"
                onClick={onInfoOpen}
            >
                What are crypto wallets?
            </p>
            <SelectWalletModal isOpen={isConnectOpen} closeModal={onConnectClose} />
            <InfoModal
                isOpen={isInfoOpen}
                closeModal={onInfoClose}
                Title={"What is a crypto wallet?"}
                Content={"\
                Crypto wallets store your private keys, keeping your crypto safe and accessible. They also allow you to send, receive, and spend cryptocurrencies like Bitcoin and Ethereum.\
                "}
            />
            <p className="powered-tag white">Powered By Dream Kollab</p>
            {/* <FAQButton /> */}
        </div>
    );
}