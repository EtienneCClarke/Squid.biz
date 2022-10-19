import React, { useState } from "react";
import createIcon from "../assets/icons/nav-create-icon.png";
import manageIcon from "../assets/icons/nav-manage-icon.png";
import Disconnector from "../components/Disconector";
import { Redirect } from "react-router";
import "../css/style.css";
import FAQButton from "../components/faqButton";

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
            <Disconnector />
            {/* <FAQButton /> */}
        </div>
    );
}