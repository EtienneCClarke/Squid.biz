import React from "react";
import { DashboardProvider } from "./DashboardContext";

import Navigation from "../components/Navigation";
import Page from "../components/Page";

export default function Dashboard() {
    return(
        <DashboardProvider>
            <Navigation />
            <Page />
        </DashboardProvider>
    )
}