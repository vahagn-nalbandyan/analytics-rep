import React, { useRef } from "react";
import { Link } from "react-scroll";

import '../../styles/components/dashboard/dashboard.css';

import DashboardAverageDelivery from "./dashboard-components/DashboardAverageDelivery";
import DashboardAverageSession from "./dashboard-components/DashboardAverageSession";
import DashboardRevenue from "./dashboard-components/DashboardRevenue";
import DashboardSessionNumbers from "./dashboard-components/DashboardSessionNumbers";
import DemographicMap from "./dashboard-components/DemographicMap";
import TargetGroup from './dashboard-components/TargetGroup';
import TopOfAnything from "./dashboard-components/TopOfAnything";
import RevenuePerDepartment from "./dashboard-components/RevenuePerDepartment";

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
                        <Link spy={true} hashSpy={true} to='demography-body-analytics'><p>Demographic Map</p></Link>                        
                        <DemographicMap />
                    </div>
                </div>
                <div className='lower-cont'>
                    <div className='top-of-anything-cont'>
                        <TopOfAnything />
                    </div>
                    <div className='revenue-per-department-cont'>
                        <RevenuePerDepartment />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;