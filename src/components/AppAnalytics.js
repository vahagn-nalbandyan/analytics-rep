import React from 'react';

import '../styles/app-analytics.css';

import HeaderAnalytics from './HeaderAnalytics';
import NavigationAnalytics from './NavigationAnalytics';

import Dashboard from './dashboard/Dashboard';
import Revenue from './revenue/Revenue';
import Demography from './demography/Demography';
import Circulation from './circulation/Circulation';
import HrmMetrics from './hrm-metrics/HrmMetrics';
import EstimateValues from './estimate-values/EstimateValues';

window.onbeforeunload = function () {
    window.scrollTo(0, 0);        
}

window.onload = function () {
    window.location.hash = "";
    window.history.replaceState("", "", window.location.pathname);
}
const AppAnalytics = () => {      
    
    return(
        <div className='app-analytics-wrapper'>
            <HeaderAnalytics />
            <NavigationAnalytics />
            <div className='app-analytics-body'>
                <Dashboard />
                <Revenue />
                <Demography />
                <Circulation />
                <HrmMetrics />
                <EstimateValues />
            </div>
        </div>
    );
}

export default AppAnalytics;