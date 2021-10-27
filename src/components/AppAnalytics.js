import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import '../styles/app-analytics.css';

import HeaderAnalytics from './HeaderAnalytics';
import NavigationAnalytics from './NavigationAnalytics';

import Dashboard from './dashboard/Dashboard';
import Revenue from './revenue/Revenue';
import Demography from './demography/Demography';
import Circulation from './circulation/Circulation';
import HrmMetrics from './hrm-metrics/HrmMetrics';
import EstimateValues from './estimate-values/EstimateValues';

const AppAnalytics = () => {        
    return(
        <BrowserRouter>
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
        </BrowserRouter>
    );
}

export default AppAnalytics;