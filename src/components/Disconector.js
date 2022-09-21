import React from "react";
import DisconnectIcon from "../assets/svg/disconnect.svg";
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
                width={"20px"}
                src={DisconnectIcon}
            />
            <DisconnectModal isOpen={isOpen} closeModal={onClose} />
        </div>
    );

}