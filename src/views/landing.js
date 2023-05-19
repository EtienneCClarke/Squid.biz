import React, { useEffect, useRef } from "react";
import { Link } from "react-scroll";
import Partners from "../components/Partners";
import Nav from "../components/navbar";
import Footer from "../components/footer";
import Verified from "../assets/svg/verified.svg";
import heroGraphic from "../assets/images/png/hero.png";
import pie from "../assets/images/png/pie.png";
import pipe from "../assets/images/png/pipe.png";
import office from  "../assets/images/png/office.png";
import SF from "../assets/images/png/solidity_finance.png";
import wave from "../assets/svg/wave.svg";
import chevron from "../assets/svg/chevron-down.svg";
import polygon from "../assets/svg/polygon_white_small.svg";
import paulclarke from "../assets/images/people/paulcclarke.jpg";
import etienneclarke from "../assets/images/people/etienneclarke.png";
import kenm from "../assets/images/people/kenm.png";
import jamie  from "../assets/images/people/jamie.jpeg";
import sorcham from "../assets/images/people/sorcham.png";
import jrich from "../assets/images/people/jrich.png";
import adamj from "../assets/images/people/adamj.png";
import "../css/landing.css";
import Contact from "../components/Contact";

export default function Landing() {

    const revolvingText = useRef();
    const cursor = useRef();

    function scroll(target) {
        const element = document.getElementsByClassName(target)[0];
        if(element) {
            element.scrollIntoView({behavior: 'smooth'});
        }
    };

    useEffect(() => {
        // revolvingText.current.style.top = "0";
        revolvingText.current.style.opacity = "1";
        let words = ["creatives.", "musicians.", "royalties.", "entrepreneurs.", "artists.", "journalists.", "businesses.", "sales."]
        let index = 0;
        const interval = setInterval(() => {
            revolvingText.current.style.opacity = "0";
            setTimeout(() => {
                revolvingText.current.innerHTML = words[index];
            }, 500);
            setTimeout(() => {
                revolvingText.current.style.opacity = "1";
            }, 1000);
            index++;
            if(index == words.length) { index = 0; }
        }, 3500);
        return () => clearInterval(interval);
    }, [])

    return(
        <div className="landing-view">
            <div ref={cursor} id="cursor"></div>

            <Nav />

            <section className="landing-hero">
                <div className="landing-hero-content">
                    <div className="landing-hero-left">
                        <h1 className="white semi-bold">Share revenue with<br/>your team.</h1>
                        <h3 className="white vtspace-25">
                            Leveraging smart contracts for&nbsp;
                            <span ref={revolvingText} className="yellow bold">creatives.</span>
                        </h3>
                        <p className="white vtspace-25">Empowering you to monetize and split revenue from a project in a simple, secure, and transparent way.</p>
                        <a href="/connect" className="connect-cta vtspace-50">
                            Create your first Squid
                        </a>
                    </div>
                    <div className="landing-hero-right no-select" draggable="false">
                        <img
                            src={heroGraphic}
                        />
                        <a
                            className="audit-verification"
                            href="https://solidity.finance/audits/SquidFactory/"
                            target="_blank"
                        >
                            <span>
                                <img src={Verified} alt="Checkmark" />
                            </span>
                            Verified by Solidity Finance
                        </a>
                    </div>
                </div>
                <div
                    className="chevron-container no-select"
                    draggable="false"
                    onClick={scroll("partners")}
                >
                    <Link to="scroll-expo" smooth={true} duration={1500} >
                        <img src={chevron} />
                    </Link>
                </div>
            </section>

            <section id="partners">
            <img src={wave} className="partners-wave-top no-select" draggable="false" />
                <div className="partners-container">
                    <Partners />
                </div>
            </section>

            <section id="explanation">
                <img src={wave} className="partners-wave-bottom no-select dropshadow" draggable="false" />
                <div className="explanation-container" id="scroll-expo">
                    <img src={office} draggable="false" className="no-select infographic" alt=""/>
                    <div>
                        <h2 className="bold">Smart Contracts Simplified.</h2>
                        <p className="vtspace-25">Each Squid is a Smart Contract deployed onto the blockchain complete with a unique payment address. You define how much each person or wallet owns of a Squid upon creation and any money passing through the Smart Contract will forever be shared according to the agreement.</p>
                    </div>
                </div>
                <div className="explanation-container">
                    <div>
                        <h2 className="bold">Secure Sharing.</h2>
                        <p className="vtspace-25">When the Squid is paid into, each shareholder can withdraw their crypto without affecting anyone else. Once created nobody can change the percentages ensuring everyone is guarenteed their share.</p>
                    </div>
                    <img src={pie} draggable="false" className="no-select infographic" alt=""/>
                </div>
                <div className="explanation-container">
                    <img src={pipe} draggable="false" className="no-select infographic" alt=""/>
                    <div>
                        <h2 className="bold">De-Fi Infrastructure.</h2>
                        <p className="vtspace-25">Create decentralised financial networks by plugging in different wallets, Squids, and DAOs to create  both personal and public systems to structure your finances.</p>
                    </div>
                </div>
                <div className="explanation-container">
                    <div>
                        <h2 className="bold">Trusted.</h2>
                        <p className="vtspace-25">
                            Our technology has been professionally audited by Solidity Finance who have secured over $50bn of on-chain value including the Bored Ape Yacht Club. To see Solidity Finances audit click 
                            <a
                                className="link"
                                href="https://solidity.finance/audits/SquidFactory/"
                                target="_blank"
                            >
                                    {" "}here
                            </a>
                            .
                        </p>
                    </div>
                    <img src={SF} draggable="false" className="no-select infographic" alt=""/>
                </div>
            </section>

            <section id="pricing">
                <div className="pricing-container">
                    <div className="pricing-left">
                        <div className="price-box">
                            <div className="price-box-content">
                                <div className="white bold">
                                    <img src={polygon} className="hrspace-10" draggable="false"/>
                                    <h1>0 MATIC</h1>
                                </div>
                            </div>
                        </div>
                        <div className="price-box vtspace-25">
                            <h1 className="white bold">4% Fee</h1>
                            <h3 className="white">per transaction</h3>
                        </div>
                    </div>
                    <div className="pricing-right">
                        <h2 className="bold">Pricing</h2>
                        <p className="vtspace-25">
                            Save thousands of pounds on legal fees and get your project 
                            going with zero anxiety. For just 15 MATIC or 0.01 ETH <span>&#8211;</span> approximately $15 <span>&#8211; </span> 
                            you will have a secure, full reserve smart contract perfect 
                            for international projects or with new people. Don<span>&#39;</span>t 
                            miss out and get your idea off the ground today.
                        </p>
                    </div>
                </div>
                <a className="bold" href="./connect">Create Squid</a>
            </section>

            <section id="team">
                <div className="content">
                    <h2 className="white semi-bold">Meet The Team</h2>
                    <div id="team-profiles">
                        <div>
                            <img src={paulclarke} alt="" />
                            <div>
                                <h5 className="white bold">Paul C Clarke</h5>
                                <p>CEO</p>
                            </div>
                        </div>
                        <div>
                            <img src={etienneclarke} alt="" />
                            <div>
                                <h5 className="white bold">Etienne C Clarke</h5>
                                <p>CTO</p>
                            </div>
                        </div>
                        <div>
                            <img src={kenm} alt="" />
                            <div>
                                <h5 className="white bold">Ken M.</h5>
                                <p>Angel Investor</p>
                            </div>
                        </div>
                        <div>
                            <img src={sorcham} alt="" />
                            <div>
                                <h5 className="white bold">Sorcha Mulligan</h5>
                                <p>The SME Chain / Growth Advisor</p>
                            </div>
                        </div>
                        <div>
                        <img src={jrich} alt="" />
                            <div>
                                <h5 className="white bold">JRich ENT.</h5>
                                <p>Music Industry Advisor</p>
                            </div>
                        </div>
                        <div>
                            <img src={adamj} alt="" />
                            <div>
                                <h5 className="white bold">Adam Jones</h5>
                                <p>Ethereum Towers / Marketing Advisor</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Contact />

            <Footer />
        </div>
    );
}