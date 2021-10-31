import React, { useRef } from "react";

import '../../styles/components/dashboard/dashboard.css';

import DashboardAverageDelivery from "./dashboard-components/DashboardAverageDelivery";
import DashboardAverageSession from "./dashboard-components/DashboardAverageSession";
import DashboardRevenue from "./dashboard-components/DashboardRevenue";
import DashboardSessionNumbers from "./dashboard-components/DashboardSessionNumbers";
import DemographicMap from "./dashboard-components/DemographicMap";
import TargetGroup from './dashboard-components/TargetGroup';

const Dashboard = () => {
    const dashboardSection = useRef();    

    return(
        <div className='dashboard-body' id='dashboard-body-analytics'>
            <div ref={dashboardSection} className='dashboard-wrapper'>
                <div className='dashboard-widget-cont'>
                    <DashboardRevenue />
                    <DashboardAverageDelivery />
                    <DashboardSessionNumbers />
                    <DashboardAverageSession />
                </div>
                <div className='demography-cont'>
                    <div className='target-group-cont'>
                        <p>Target Group By Age</p>
                        <TargetGroup />
                    </div>
                    <div className='demographic-map-cont'>
                        <DemographicMap />
                    </div>
                </div>
                <div className='lower-cont'>
                    <div>
                        <h2>TOP OF ANYTHING</h2>
                    </div>
                    <div>
                        <h2>REVENUE PER DEPARTMENT</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;