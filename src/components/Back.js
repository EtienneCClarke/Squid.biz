import React, { useState } from "react";
import { Redirect } from "react-router";
import backIcon from "../assets/svg/back-chevron.svg";
import "../css/style.css";

export default function Back() {

    const [redirect, setRedirect] = useState();

    return(
        <div
            className="back-button"
            onClick={() => {
                setRedirect(true);
            }}
        >
            {redirect &&
                <Redirect to="/navigation" />
            }
            <img 
                width={"11px"}
                src={backIcon}
            />
            <p className="back-button-text">BACK</p>
        </div>
    );

}