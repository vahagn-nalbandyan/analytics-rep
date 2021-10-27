import React from "react";
import { NavHashLink } from "react-router-hash-link";

import '../styles/navigation-analytics.css';

const NavigationAnalytics = () => {
    return(
        <div className='navigation-analytics-wrapper'>
            <div className='nav-button-cont'>
                <NavHashLink smooth to='/#dashboard-body-analytics' className='nav-button' activeClassName='selected'>Dashboard</NavHashLink>
                <NavHashLink smooth to='/#revenue-body-analytics' className='nav-button' activeClassName='selected'>Revenue</NavHashLink>
                <NavHashLink smooth to='/#demography-body-analytics' className='nav-button' activeClassName='selected'>Demography</NavHashLink>
                <NavHashLink smooth to='/#circulation-body-analytics' className='nav-button' activeClassName='selected'>Circulation</NavHashLink>
                <NavHashLink smooth to='/#hrm-metrics-body-analytics' className='nav-button' activeClassName='selected'>HRM Metrics</NavHashLink>
                <NavHashLink smooth to='/#estimate-values-body-analytics' className='nav-button' activeClassName='selected'>Estimate Values</NavHashLink>
            </div>
        </div>
    );
}

export default NavigationAnalytics;