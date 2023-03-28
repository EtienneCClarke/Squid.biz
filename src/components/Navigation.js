import React, { useEffect, useRef } from "react";
import Blockies from "react-blockies";
import Options from "../components/Options";

import { useWeb3React } from "@web3-react/core";
import { useDashboard, useDashboardUpdate } from "../views/DashboardContext";
import useWindowDimensions from "../utils/useWindowDimensions";

import manageicon from "../assets/svg/manage-icon.svg";
import createicon from "../assets/svg/create-icon.svg";
import closeBtn from "../assets/svg/close-btn.svg";
import payicon from "../assets/svg/pay-icon.svg";
import "../css/style.css";

export default function Navigation() {

    const { chainId, account } = useWeb3React();
    const { width } = useWindowDimensions();
    const showView = useDashboardUpdate();
    const page = useDashboard();

    const nav = useRef();

    useEffect(() => {
        if(width <= 1100) {
            nav.current.style.marginLeft = "-400px";
        } else {
            nav.current.style.marginLeft = "0px";
        }
    }, [width])

    function closeNavigation() {
        if(width < 1100) nav.current.style.marginLeft = "-250px";
        if(width < 400) nav.current.style.marginLeft = "-400px";
    }

    function openNavigation() {
        nav.current.style.marginLeft = "0px";
    }

    return(
        <>
            <Options openNav={openNavigation}/>
            <section
                id="navigation"
                className={
                    chainId == 1 || chainId == 5 ? "bg-blue" :
                    chainId == 137 || chainId == 80001 ? "bg-purple" :
                    chainId == 43114 || chainId == 43113 ? "bg-orange" :
                    "bg-black"
                }
                ref={nav}
            >

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
                        onClick={() => { showView("manage"); if(width < 1100) closeNavigation()}}
                    >
                        <img src={manageicon} />
                        <p className="hlspace-20">Manage</p>
                    </div>
                    
                    <div
                        className={"link " + (page == "create" ? "active" : "")}
                        onClick={() => { showView("create"); if(width < 1100) closeNavigation()}}
                    >
                        <img src={createicon} />
                        <p className="hlspace-20">Create</p>
                    </div>
                    
                    <div
                        className={"link " + (page == "pay" ? "active" : "")}
                        onClick={() => { showView("pay"); if(width < 1100) closeNavigation()}}
                    >
                        <img src={payicon} />
                        <p className="hlspace-20">Pay</p>
                    </div>

                </div>

                <div id="navigation-help">

                    <a href="/faqs" target="_blank">Help</a>
                    <a href="privacy_policy" target="_blank">Privacy</a>
                    <a href="terms_and_conditions" target="_blank">Terms &amp; Conditions</a>

                </div>
            </section>
        </>
    );
}