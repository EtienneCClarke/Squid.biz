import React, { useState } from "react";
import createIcon from "../assets/icons/nav-create-icon.png";
import manageIcon from "../assets/icons/nav-manage-icon.png";
import Disconnector from "../components/Disconector";
import NetworkSwitcher from "../components/NetworkSwitcher";
import Options from "../components/Options";
import { Redirect } from "react-router";
import "../css/style.css";

export default function Navigation () {

    const [create, setCreate] = useState();
    const [manage, setManage] = useState();

    return (
        <div className="view flex flex-column flex-align-center max-height-100 overflow-hidden">
            {create &&
                <Redirect push to="/create" />
            }
            {manage &&
                <Redirect push to="/manage" />
            }
            <div className="nav-container bg-white">
                <div 
                    className="nav-content flex flex-column flex-align-center"
                    onClick={() => {
                        setCreate(true);
                    }}
                >
                    <img
                        src={createIcon}
                        className="nav-icon no-select"
                        alt="create-icon"
                        draggable="false"
                    />
                    <p className="nav-title">CREATE</p>
                    <p className="nav-label">Create new squid contract</p>
                </div>
            </div>
            <div className="nav-container">
                <div
                    className="nav-content flex flex-column flex-align-center"
                    onClick={() => {
                        setManage(true);
                    }}
                >
                    <img
                        src={manageIcon}
                        className="nav-icon no-select"
                        alt="manage-icon"
                        draggable="false"
                    />
                    <p className="nav-title">MANAGE</p>
                    <p className="nav-label">Manage your current squids</p>
                </div>
            </div>
            <Options />
            {/* <FAQButton /> */}
        </div>
    );
}