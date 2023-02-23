import React from "react";
import SettingsIcon from "../assets/svg/settings.svg";
import disconnect from "../assets/svg/disconnect.svg";
import DisconnectModal from "../components/disconnectModal";
import { useDisclosure } from "@chakra-ui/react";
import "../css/style.css";

export default function Disconnector() {

    const { 
        isOpen,
        onOpen,
        onClose
    } = useDisclosure();

    return (
        <div
            className="disconnector"
            onClick={onOpen}
        >
            <img 
                src={disconnect}
            />
            <DisconnectModal isOpen={isOpen} closeModal={onClose} />
        </div>
    );

}