import React, { useState } from "react";
import logo from "../assets/images/png/squid_logo_white.png";
import "../css/landing.css";

export default function Nav() {

    const [scrollNav, setScrollNav] = useState();

    onscroll = () => {
        const ratio = window.pageYOffset / window.innerHeight; 
        const threshold = window.location.pathname == "/FAQs" ? 0.15 : 0.9;
        if(ratio > threshold) {
            setScrollNav(true);
            return;
        }
        setScrollNav(false);
    }

    return(
        <header className={scrollNav ? "landing-header scroll-nav" : "landing-header"}>
            <h4
                className="bold no-select"
                onClick={() => {window.location.pathname = "/"}}
            >
                <span className="hrspace-10">
                    <img src={logo} width="30px"/>
                </span>
                Squid.biz
            </h4>
            <h4 className="bold no-select push-right"><a href="./connect">Connect</a></h4>
        </header>
    );
}