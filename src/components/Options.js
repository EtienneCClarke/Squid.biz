import React, { useEffect } from "react";
import Disconnector from "./Disconector";
import NetworkSwitcher from "./NetworkSwitcher";
import burgerbtn from "../assets/svg/burger-btn.svg";

export default function Options (props) {

    return (
        <div className="options-container">
            <div className="options-content-left">
                <img
                    src={burgerbtn}
                    className="open-nav-btn"
                    onClick={props.openNav}
                />
                <NetworkSwitcher />
            </div>
            <Disconnector />
        </div>
    )
}