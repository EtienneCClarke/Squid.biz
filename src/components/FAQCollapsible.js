import React from "react";
import useCollapse from "react-collapsed";
import "../assets/css/style.css";

function FAQCollapsible({question, answer}) {

    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

    return(
        <div className="collapsible">
            <div className="header">
                
            </div>
        </div>
    );

}