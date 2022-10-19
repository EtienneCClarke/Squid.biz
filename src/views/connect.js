import React from "react";
import { useDisclosure } from "@chakra-ui/react";
import SelectWalletModal from "../components/selectWalletModal";
import useWindowDimensions from "../utils/useWindowDimensions";
import FAQButton from "../components/faqButton";
import InfoModal from "../components/infoModal";
import logo256 from "../assets/logo/logo256.png"
import "../css/style.css";

export default function Connect () {

    const { height, width } = useWindowDimensions();

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
        <div className="view scrollable-y flex flex-column flex-center flex-align-center">
            <img src={logo256} alt="Dream Kollab Logo" className="logo"/>
            <h1 className="title-large">Kollab Share</h1>
            <p 
                className={"connect-button bg-blue " + (height < 700 ? "vtspace-75" : "vtspace-200")}
                onClick={onConnectOpen}
            >
                Connect Wallet
            </p>
            <p
                className="plain-text-button vtspace-25"
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
                A cryptocurrency wallet is an application that functions as a wallet\
                for your cryptocurrency. It is called a wallet because it is used similarly\
                to a wallet you put cash and cards in. Instead of holding these physical items,\
                it stores the passkeys you use to sign for your cryptocurrency  transactions\
                and provides the interface that lets you access your crypto.\
                "}
            />
            <p className="powered-tag">Powered By Dream Kollab</p>
            <FAQButton />
        </div>
    );
}