import React, { useEffect, useRef } from "react";
import Blockies from "react-blockies";
import Options from "../components/Options";

import { useWeb3React } from "@web3-react/core";
import { useDashboard, useDashboardUpdate } from "../views/DashboardContext";
import useWindowSize from "../utils/useWindowSize";

import manageicon from "../assets/svg/manage-icon.svg";
import createicon from "../assets/svg/create-icon.svg";
import closeBtn from "../assets/svg/close-btn.svg";
import payicon from "../assets/svg/pay-icon.svg";
import "../css/style.css";

export default function Navigation() {

    const { account } = useWeb3React();
    const windowSize = useWindowSize();
    const showView = useDashboardUpdate();
    const page = useDashboard();

    const nav = useRef();

    useEffect(() => {
        
        if(windowSize.width <= 1100) {
            // nav.current.style.marginLeft = "-400px";
        } else {
            nav.current.style.marginLeft = "0px";
        }
    }, [windowSize.width])

    function closeNavigation() {
        nav.current.style.marginLeft = "-400px";
    }

    function openNavigation() {
        nav.current.style.marginLeft = "0px";
    }

    return(
        <>
            <Options openNav={openNavigation}/>
            <section id="navigation" ref={nav}>

                <img
                    src={closeBtn}
                    className="close-nav-btn"
                    onClick={closeNavigation}
                />

                <div id="navigation-header">
                    <Blockies
                        className="blockies"
                        seed={account}
                        size={10}
                        scale={6}
                    />
                    <p className="white">{account}</p>
                </div>

                <div id="navigation-links">

                    <div
                        className={"link " + (page == "manage" ? "active" : "")}
                        onClick={() => { showView("manage")}}
                    >
                        <img src={manageicon} />
                        <p className="hlspace-20">Manage</p>
                    </div>
                    
                    <div
                        className={"link " + (page == "create" ? "active" : "")}
                        onClick={() => { showView("create")}}
                    >
                        <img src={createicon} />
                        <p className="hlspace-20">Create</p>
                    </div>
                    
                    <div
                        className={"link " + (page == "pay" ? "active" : "")}
                        onClick={() => { showView("pay")}}
                    >
                        <img src={payicon} />
                        <p className="hlspace-20">Pay</p>
                    </div>

                </div>

                <div id="navigation-help">

                    <a href="/faqs">Help</a>
                    <a href="privacy_policy">Privacy</a>
                    <a href="terms_and_conditions">Terms &amp; Conditions</a>

                </div>
            </section>
        </>
    );
}