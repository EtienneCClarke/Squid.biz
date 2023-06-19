import React from "react";
import twitter from "../assets/logo/socials/twitter.png";
import instagram from "../assets/logo/socials/instagram.png";
import linked from "../assets/logo/socials/linkedin.png";
import tiktok from "../assets/svg/tiktok.svg";
import "../css/landing.css";

export default function Footer() {
    return(
        <footer id="footer">
            <div className="footer-content">
                <div className="footer-left">
                    <h2 className="bold footer-title">Squid.biz</h2>
                    <p className="vtspace-15">Achieving more together.</p>
                    <div className="socials push-bottom">
                        <a href="https://tiktok.com/@squid.biz" target="_blank"><img src={tiktok} alt="tiktok"/></a>
                        <a href="https://twitter.com/dreamkollab" target="_blank"><img src={twitter} alt="Twitter"/></a>
                        <a href="https://www.instagram.com/dreamkollab/" target="_blank"><img src={instagram} alt="Instagram"/></a>
                        <a href="https://www.linkedin.com/company/dream-kollab/" target="_blank"><img src={linked} alt="Linked In"/></a>
                    </div>
                </div>
                <div className="footer-right">
                    <a href="https://app.squid.biz">CONNECT</a>
                    <a href="./FAQs">FAQs</a>
                    <a href="https://solidity.finance/audits/SquidFactory/" target="_blank">AUDIT</a>
                    <a href="./terms_and_conditions">TERMS AND CONDITIONS</a>
                    <a href="./privacy_policy">PRIVACY POLICY</a>
                </div>
            </div>
            <div className="footer-banner push-bottom">
                <p className="white">Copyright <span>&#169;</span>2022 Dream Kollab</p>
            </div>
        </footer>
    );
}