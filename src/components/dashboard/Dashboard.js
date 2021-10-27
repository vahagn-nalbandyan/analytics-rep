import React, { useRef } from "react";  

import '../../styles/components/dashboard/dashboard.css';
import DashboardRevenue from "./dashboard-components/DashboardRevenue";

const Dashboard = () => {
    const dashboardSection = useRef();    

    return(
        <div className='dashboard-body' id='dashboard-body-analytics'>
            <div ref={dashboardSection} className='dashboard-wrapper'>
                <DashboardRevenue />
            </div>
        </div>
    );
}

export default Dashboard;