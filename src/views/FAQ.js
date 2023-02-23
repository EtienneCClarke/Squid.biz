import React, { useState } from "react";
import Footer from "../components/footer";
import Nav from "../components/navbar";
import searchIcon from "../assets/svg/search.svg";
import questions from "../assets/json/help.json";
import Question from "../components/Question";
import Contact from "../components/Contact";
import "../css/style.css";

export default function FAQ() {

    const [query, setQuery] = useState("");

    const filteredData = questions.FAQs.filter(item => {
            if(item.question.toLowerCase().includes(query.toLowerCase())) return true;
            item.answers.forEach(i => {
                if(i.toLowerCase().includes(query.toLowerCase())) return true;
            });
        });

    return (
        <div className="view flex flex-column">
            <Nav />
            <div className="faqs-background"></div>
            <div className="faqs-content">
                <div className="faqs-header">
                    <h1>FAQs <span>(Frequently Asked Questions)</span></h1>
                </div>
                <div className="faqs-main-body">
                    <div className="faqs-search">
                        <div className="faqs-search-content">
                            <input
                                type="text"
                                placeholder="Ask a question"
                                value={query}
                                onChange={e => setQuery(e.target.value)}
                                className="hlspace-15"
                            />
                            <img src={searchIcon} alt="" className="hrspace-15"/>
                        </div>
                    </div>
                    <div className="faqs-questions">
                        {filteredData.map((item) => (
                            <Question data={item} />
                        ))}
                    </div>
                </div>
            </div>
            <Contact />
            <Footer />
        </div>
    );
}