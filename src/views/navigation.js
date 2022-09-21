import React, { useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { useDisclosure } from "@chakra-ui/react";
import DisconnectModal from "../components/disconnectModal";
import createIcon from "../assets/icons/nav-create-icon.png";
import manageIcon from "../assets/icons/nav-manage-icon.png";
import DisconnectIcon from "../assets/svg/disconnect.svg";
import "../css/style.css";
import { Redirect } from "react-router";

export default function Navigation () {

    const { 
        isOpen,
        onOpen,
        onClose
    } = useDisclosure();

    let {
        active
    } = useWeb3React();

    const [create, setCreate] = useState();
    const [manage, setManage] = useState();

    return (
        <div className="view flex flex-column flex-align-center overflow-hidden">
            {create &&
                <Redirect push to="/create" />
            }
            {manage &&
                <Redirect push to="/manage" />
            }
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
                <div 
                    className="nav-content flex flex-column flex-align-center"
                    onClick={() => {
                        setCreate(true);
                    }}
                >
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
                <div
                    className="nav-content flex flex-column flex-align-center"
                    onClick={() => {
                        setManage(true);
                    }}
                >
                    <img src={manageIcon} className="nav-icon" alt="manage-icon" />
                    <p className="nav-title">Current Shares</p>
                    <p className="nav-label">Manage payment splitters</p>
                </div>
            </div>
            <DisconnectModal isOpen={isOpen} closeModal={onClose} />
        </div>
    );
}