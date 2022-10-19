import React, { useEffect, useState } from "react";
import Back from "../components/Back";
import { FAQData } from "../assets/json/faqs";

export default function FAQ() {

    const [FAQs, setFAQs] = useState();

    useEffect(() => {
        setFAQs(FAQData.questions);
    }, []);

    function test() {
        console.log(FAQs);
    }

    return (
        <div className="view flex flex-column flex-center">
            {test}
            <Back />
        </div>
    );

}