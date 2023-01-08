import React from "react";
import Disconnector from "./Disconector";
import NetworkSwitcher from "./NetworkSwitcher";

export default function Options () {
    return (
        <div className="options-container">
            <NetworkSwitcher />
            <Disconnector />
        </div>
    )
}