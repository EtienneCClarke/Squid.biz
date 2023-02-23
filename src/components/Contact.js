import React, { useState, useRef } from "react";
import InfoModal from "../components/infoModal";
import { useDisclosure } from "@chakra-ui/react";
import emailjs from '@emailjs/browser';
import "../css/landing.css";

export default function Contact() {

    const [info, setInfo] = useState('');
    const form = useRef();

    const {
        isOpen,
        onOpen,
        onClose
    } = useDisclosure();

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
        <section id="contact">
            <div className="contact-container">
                <div className="contact-info">
                    <h2 className="white bold">
                        {window.location.pathname == "/FAQs" ?
                            "Need more help?" :
                            "Get in touch"
                        }
                    </h2>
                    <p className="white vtspace-25">
                        {window.location.pathname == "/FAQs" ?
                            "If you need further assistance feel free to contact us and we will respond as soon as possible!" :
                            "Want to understand further how Squid.biz can transform your business?\
                            Feel free to contact us and we will respond as soon as possible."
                        }
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
            <InfoModal 
                isOpen={isOpen}
                closeModal={onClose}
                Title="Alert"
                Content={info}
            />
        </section>
    );
}