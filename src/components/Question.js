import React, { useEffect, useRef, useState } from "react";

export default function Question({ data }) {

    const [open, setOpen] = useState(false);

    const question = useRef();

    useEffect(() => {
        if(open) {
            question.current.style.maxHeight = question.current.scrollHeight + "px";
        } else {
            question.current.style.maxHeight = question.current.getElementsByClassName("q")[0].offsetHeight + "px";
        }
    }, [open]);

    return (
        <div
            className={"faq-q"}
            ref={question}
        >
            <div
                className="q pointer"
                onClick={() => setOpen((prev) => !prev)}
            >
                <h2>Q.</h2>
                <p>{data.question}</p>
                <div className={"push-right icon" + (open ? " open" : "")}>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className="a">
                <h2>A.</h2>
                <div>
                    {data.answers.map((item) => (
                        <p>{item}</p>
                    ))}
                </div>
            </div>
        </div> 
    );

}