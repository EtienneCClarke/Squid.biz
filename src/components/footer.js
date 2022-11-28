import React from "react";
import facebook from "../assets/logo/socials/facebook.png";
import twitter from "../assets/logo/socials/twitter.png";
import instagram from "../assets/logo/socials/instagram.png";
import linked from "../assets/logo/socials/linkedin.png";
import "../css/landing.css";

export default function Footer() {

    return(
        <footer id="footer">
            <div className="footer-content">
                <div className="footer-left">
                    <h2 className="bold">Kollab Share</h2>
                    <p className="vtspace-15">Achieve more together.</p>
                    <div className="socials push-bottom">
                        <a href="https://www.facebook.com/DreamKollab"><img src={facebook} alt="Facebook"/></a>
                        <a href="https://twitter.com/dreamkollab"><img src={twitter} alt="Twitter"/></a>
                        <a href="https://www.instagram.com/dreamkollab/"><img src={instagram} alt="Instagram"/></a>
                        <a href="https://www.linkedin.com/company/dream-kollab/"><img src={linked} alt="Linked In"/></a>
                    </div>
                </div>
                <div className="footer-right">
                    <a href="./connect">CONNECT</a>
                    {/* <a href="./faqs">FAQs</a> */}
                    <a href="./terms_and_conditions">TERMS AND CONDITIONS</a>
                    <a href="./privacy_policy">PRIVACY POLICY</a>
                    <a href="https://dreamkollab.com">DREAM KOLLAB</a>
                </div>
            </div>
            <div className="footer-banner push-bottom">
                <p className="white">Copyright <span>&#169;</span>2022 Dream Kollab</p>
            </div>
        </footer>
    );
}