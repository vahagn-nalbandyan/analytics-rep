import React, { useRef } from "react";  

import '../../styles/components/dashboard/dashboard.css';

import DashboardAverageDelivery from "./dashboard-components/DashboardAverageDelivery";
import DashboardAverageSession from "./dashboard-components/DashboardAverageSession";
import DashboardRevenue from "./dashboard-components/DashboardRevenue";
import DashboardSessionNumbers from "./dashboard-components/DashboardSessionNumbers";

const Dashboard = () => {
    const dashboardSection = useRef();    

    return(
        <div className='dashboard-body' id='dashboard-body-analytics'>
            <div ref={dashboardSection} className='dashboard-wrapper'>
                <DashboardRevenue />
                <DashboardAverageDelivery />
                <DashboardSessionNumbers />
                <DashboardAverageSession />
            </div>
        </div>
    );
}

export default Dashboard;