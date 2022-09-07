import React from "react";
import { useDisclosure } from "@chakra-ui/react";
import DisconnectModal from "../components/disconnectModal";
import createIcon from "../assets/icons/nav-create-icon.png";
import manageIcon from "../assets/icons/nav-manage-icon.png";
import DisconnectIcon from "../assets/svg/disconnect.svg";
import "../css/style.css";

export default function Navigation () {

    const { 
        isOpen,
        onOpen,
        onClose
    } = useDisclosure();

    return (
        <div className="view flex flex-column flex-align-center overflow-hidden">
            <div
                className="disconnector"
                onClick={onOpen}
            >
                <img 
                    width={"20px"}
                    src={DisconnectIcon}
                />
            </div>
            <div className="nav-container bg-white">
                <div className="nav-content flex flex-column flex-align-center">
                    <img
                        src={createIcon}
                        className="nav-icon"
                        alt="create-icon"
                    />
                    <p className="nav-title">New Kollab</p>
                    <p className="nav-label">Create new payment splitter</p>
                </div>
            </div>
            <div className="nav-container">
                <div className="nav-content flex flex-column flex-align-center">
                    <img src={manageIcon} className="nav-icon" alt="manage-icon" />
                    <p className="nav-title">Current Shares</p>
                    <p className="nav-label">Manage payment splitters</p>
                </div>
            </div>
            <DisconnectModal isOpen={isOpen} closeModal={onClose} />
        </div>
    );
}