import React, { useContext, useState } from "react";

const DashboardContext = React.createContext();
const DashboardUpdateContext = React.createContext();

export function useDashboard() {
    return useContext(DashboardContext);
}

export function useDashboardUpdate() {
    return useContext(DashboardUpdateContext);
}

export function DashboardProvider({ children }) {
    
    const [page, setPage] = useState("manage");

    const showView = (view) => {
        setPage(view);
    }

    return(
        <DashboardContext.Provider value={page}>
            <DashboardUpdateContext.Provider value={showView}>
                {children}
            </DashboardUpdateContext.Provider>
        </DashboardContext.Provider>
    );

}