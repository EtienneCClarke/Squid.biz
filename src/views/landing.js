import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { Link } from "react-scroll";
import Partners from "../components/Partners";
import Nav from "../components/navbar";
import Footer from "../components/footer";
import HeroA from "../assets/images/jpg/hero-a.jpg";
import HeroB from "../assets/images/jpg/hero-b.jpg";
import pie from "../assets/images/png/pie.png";
import pipe from "../assets/images/png/pipe.png";
import wave from "../assets/svg/wave.svg";
import chevron from "../assets/svg/chevron-down.svg";
import eth_white from "../assets/images/png/ethereum_white.png";
import InfoModal from "../components/infoModal";
import "../css/landing.css"
import { useDisclosure } from "@chakra-ui/react";

export default function Landing() {

    const [info, setInfo] = useState('');

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

    const form = useRef();

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

            <Nav />

            <section className="landing-hero">
                <div className="landing-hero-content">
                    <div className="landing-hero-left">
                        <h1 className="white bold">Achieving</h1>
                        <h1 className="white bold">more</h1>
                        <h1 className="white bold">together.</h1>
                        <p className="white vtspace-50">Redirect cash flow easily and securely.</p>
                        <Link to="scroll-expo" smooth={true} duration={1500} className="push-bottom no-select">
                            Learn More
                        </Link>
                    </div>
                    <div className="landing-hero-right no-select" draggable="false">
                        <img
                            src={HeroA}
                            alt="A group of people growing wealth together"
                            draggable="false"
                            className="no-select"
                        />
                        <img
                            src={HeroB}
                            alt="People sharing a pile of money"
                            draggable="false"
                            className="no-select"
                        />
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
                    <div>
                        <h2 className="bold">Secure Sharing.</h2>
                        <p className="vtspace-25">Each Kollab is a smart contract deployed onto the blockchain complete with a unique payment address. Once created nobody can change the percentages ensuring everyone is guarenteed their share. </p>
                    </div>
                    <img src={pie} draggable="false" className="no-select infographic" alt=""/>
                </div>
                <div className="explanation-container">
                    <img src={pipe} draggable="false" className="no-select infographic" alt=""/>
                    <div>
                        <h2 className="bold">De-Fi Infrastructure.</h2>
                        <p className="vtspace-25">Create decentralised financial networks by plugging in different wallets, Kollabs, and DAOs to create  both personal and public systems to automate your finances.</p>
                    </div>
                </div>
            </section>

            <section id="pricing">
                <div className="pricing-container">
                    <div className="pricing-left">
                        <div className="price-box">
                            <div className="price-box-content">
                                <div className="white bold">
                                    <img src={eth_white} className="hrspace-10"/>
                                    <h1>0.01 Eth</h1>
                                </div>
                                <h3 className="vtspace-10 white push-right">+ Gas</h3>
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
                            going with zero anxiety. For just 0.01 ETH <span>&#8211;</span> approximately $10 <span>&#8211; </span> 
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
                            Want to understand further how Kollab Share can transform your business?
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