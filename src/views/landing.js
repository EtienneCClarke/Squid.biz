import React, { useEffect, useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { Link } from "react-scroll";
import Partners from "../components/Partners";
import Nav from "../components/navbar";
import Footer from "../components/footer";
import Verified from "../assets/svg/verified.svg";
import phoneGraphic from "../assets/images/png/3d-phone-with-ui-and-shadow.png";
import pie from "../assets/images/png/pie.png";
import pipe from "../assets/images/png/pipe.png";
import office from  "../assets/images/png/office.png";
import wave from "../assets/svg/wave.svg";
import chevron from "../assets/svg/chevron-down.svg";
import polygon from "../assets/images/png/polygon_white.png";
import InfoModal from "../components/infoModal";
import "../css/landing.css";
import { useDisclosure } from "@chakra-ui/react";
import useMousePosition from "../utils/useMousePosition";

export default function Landing() {

    const [info, setInfo] = useState('');
    const phone = useRef();
    const cursor = useRef();
    const form = useRef();
    const position = useMousePosition();

    useEffect(()=> {
        let { width, height } = phone.current.getBoundingClientRect();
        let scale = 700;
        let x = ((position.x - (width * 0.5)) * -10) / scale;
        let y = ((position.y - (height * 0.5)) * -10) / scale;
        phone.current.style.transform = `translateX(${x}px) translateY(${y}px)`;
    }, [position]);

    const {
        isOpen,
        onOpen,
        onClose
    } = useDisclosure();

    function scroll(target) {
        const element = document.getElementsByClassName(target)[0];
        if(element) {
            element.scrollIntoView({behavior: 'smooth'});
        }
    };

    const sendEmail = (e) => {
        e.preventDefault();

        let form_inputs = form.current.getElementsByClassName('text-input');
        for(let i = 0; i < form_inputs.length; i++){
            if(!form_inputs[i].value) {
                setInfo('Please ensure all fields are correctly filled!');
                onOpen();
                return;
            }
        }

        emailjs.sendForm(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            form.current,
            process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        ).then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        setInfo('Success! We will get back to you as soon as possible.');
        onOpen();

        e.target.reset();
    };

    return(
        <div className="landing-view">
            <div ref={cursor} id="cursor"></div>

            <Nav />

            <section className="landing-hero">
                <div className="landing-hero-content">
                    <div className="landing-hero-left">
                        <h1 className="white bold">Achieving</h1>
                        <h1 className="white bold">more</h1>
                        <h1 className="white bold">together.</h1>
                        <p className="white vtspace-50">Tearing down barriers so innovation and prosperity will thrive.</p>
                        <div className="tags white vtspace-50 no-select">
                            <p>Web3</p>
                            <p>Fintech</p>
                            <p>Law</p>
                        </div>
                        <Link to="scroll-expo" smooth={true} duration={1500} className="push-bottom no-select">
                            Learn More
                        </Link>
                    </div>
                    <div className="landing-hero-right no-select" draggable="false">
                        <img
                            src={phoneGraphic}
                            alt="Phone showing all squid contracts"
                            draggable="false"
                            className="no-select landing-phone"
                            ref={phone}
                        />
                        <a
                            className="audit-verification"
                            href="https://solidity.finance/audits/SquidFactory/"
                            target="_blank"
                        >
                            <span>
                                <img src={Verified} alt="Checkmark" />
                            </span>
                            Verified by Solidity.Finance
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
                        <p className="vtspace-25">Each Squid is a smart contract deployed onto the blockchain complete with a unique payment address. You define how much each person or wallet owns of the Squid upon creation.</p>
                    </div>
                </div>
                <div className="explanation-container">
                    <div>
                        <h2 className="bold">Secure Sharing.</h2>
                        <p className="vtspace-25">When the Squid is paid into, each shareholder can withdraw their crypto without affecting anyone else. Once created nobody can change the percentages ensuring everyone is guarenteed their share. </p>
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
            </section>

            <section id="pricing">
                <div className="pricing-container">
                    <div className="pricing-left">
                        <div className="price-box">
                            <div className="price-box-content">
                                <div className="white bold">
                                    <img src={polygon} className="hrspace-10" draggable="false"/>
                                    <h1>15 MATIC</h1>
                                </div>
                            </div>
                        </div>
                        <div className="price-box vtspace-25">
                            <h1 className="white bold">1% Fee</h1>
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
                <a className="bold" href="./connect">Get Started</a>
            </section>

            <section id="contact">
                <div className="contact-container">
                    <div className="contact-info">
                        <h2 className="white bold">Get in touch</h2>
                        <p className="white vtspace-25">
                            Want to understand further how Squid.biz can transform your business?
                            Feel free to contact us and we will respond as soon as possible.
                        </p>
                    </div>
                    <div className="contact-form">
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="form-row">
                                <input type="text" className="text-input" placeholder="First name" name="forename"/>
                                <input type="text" className="text-input" placeholder="Last name" name="surname"/>
                            </div>
                            <div className="form-row">
                                <input type="email" className="text-input" placeholder="Email address" name="email"/>
                                <input type="text" className="text-input" placeholder="Subject" name="subject"/>
                            </div>
                            <textarea
                                name="details"
                                className="text-input"
                                placeholder="How can we help?"
                                rows={10}
                            />
                            <button className="white vtspace-50" type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </section>

            <Footer />

            <InfoModal 
                isOpen={isOpen}
                closeModal={onClose}
                Title="Alert"
                Content={info}
            />
        </div>
    );
}