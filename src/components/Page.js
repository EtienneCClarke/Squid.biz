import React from "react";
import { useDashboard } from "../views/DashboardContext";

import Manage from "../views/manage"
import Create from "../views/create";
import Pay from "../views/Pay";

export default function Page() {

    const page = useDashboard();

    function displayPage() {
        if(page == "manage") return <Manage />
        if(page == "create") return <Create />
        if(page == "pay") return <Pay />
    }

    return(
        <>
            {displayPage()}
        </>
    );

}