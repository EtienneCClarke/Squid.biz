import React, { useState } from "react";
import { Redirect } from "react-router";
import questionIcon from "../assets/svg/question_mark.svg";
import "../css/style.css";

export default function FAQButton() {

    const [redirect, setRedirect] = useState();

    return (
        <div
            className="faq-button"
            onClick={() => {
                setRedirect(true);
            }}
        >
            {redirect && 
                <Redirect push to="/faq" />
            }
            <img
                width={"15px"}
                src={questionIcon}
            />
        </div>
    );

}