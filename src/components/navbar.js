import React, { useState } from "react";
import logo from "../assets/images/png/squid_logo_white.png";
import "../css/landing.css";

export default function Nav() {

    const [scrollNav, setScrollNav] = useState();

    onscroll = () => {
        const ratio = window.pageYOffset / window.innerHeight; 
        if(ratio > 0.9) {
            setScrollNav(true);
            return;
        }
        setScrollNav(false);
    }

    return(
        <header className={scrollNav ? "landing-header scroll-nav" : "landing-header"}>
            <h4 className="bold no-select"><span className="hrspace-10"><img src={logo} width="25px"/></span>Squid.biz</h4>
            <h4 className="bold no-select push-right"><a href="./connect">Connect</a></h4>
        </header>
    );
}