import React from "react";

import '../styles/navigation-analytics.css';

const NavigationAnalytics = () => {
    return(
        <div className='navigation-analytics-wrapper'>
            <div className='nav-button-cont'>
                <a href='#dashboard-body-analytics' className='nav-button'>Dashboard</a>
                <a href='#revenue-body-analytics' className='nav-button'>Revenue</a>
                <a href='#demography-body-analytics' className='nav-button'>Demography</a>
                <a href='#circulation-body-analytics' className='nav-button'>Circulation</a>
                <a href='#hrm-metrics-body-analytics' className='nav-button'>HRM Metrics</a>
                <a href='#estimate-values-body-analytics' className='nav-button'>Estimate Values</a>
            </div>
        </div>
    );
}

export default NavigationAnalytics;