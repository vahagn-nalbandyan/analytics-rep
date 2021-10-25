import React from "react";  

import '../../styles/components/dashboard/dashboard.css';
import DashboardRevenue from "./dashboard-components/DashboardRevenue";

const Dashboard = () => {
    return(
        <div className='dashboard-body' id='dashboard-body-analytics'>
            <div className='dashboard-wrapper'>
                <DashboardRevenue />
            </div>
        </div>
    );
}

export default Dashboard;