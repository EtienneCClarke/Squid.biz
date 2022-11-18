import React from "react";
import HeroA from "../assets/images/jpg/hero-a.jpg";
import HeroB from "../assets/images/jpg/hero-b.jpg";
import "../css/landing.css"

export default function Landing() {


    return(
        <div className="landing-view">

            <div className="landing-header">
                <h4 className="bold white no-select">Kollab Share</h4>
                <h4 className="bold white no-select"><a href="./connect">Log In</a></h4>
            </div>

            <div className="landing-hero">
                <div className="landing-hero-content">
                    <div className="landing-hero-left">
                        <h1 className="white bold">Accomplish</h1>
                        <h1 className="white bold vtspace-15">More</h1>
                        <h1 className="white bold">Together</h1>
                        <p className="white vtspace-50">Share revenue streams easily and securely.</p>
                        <a
                            className="push-bottom no-select"
                            onClick={() => alert('Sorry, this is under construction.')}
                        >
                            Learn More
                        </a>
                    </div>
                    <div className="landing-hero-right">
                        <img
                            src={HeroA}
                            alt="A group of people growing wealth together"
                        />
                        <img
                            src={HeroB}
                            alt="People sharing a pile of money"
                        />
                    </div>
                </div>
            </div>

        </div>
    );
}