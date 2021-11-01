/* eslint-disable */
import React, { useEffect } from 'react';
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
    let contextMenuItems;  
    useEffect(() => {
        setTimeout(() => {
            document.querySelector('html').style.scrollBehavior = 'smooth';
        }, 500); 
        contextMenuItems = document.querySelectorAll('.custom-context-menu'); 
        document.body.addEventListener('click', removeClasses, true);      
        document.body.addEventListener('contextmenu', removeClasses, true);        
    }, []);    

    let removeClasses = function() {
        for (var i = 0; i < contextMenuItems.length; i++) {
            contextMenuItems[i].classList.remove('open');
        }
    }    

    // Handling Scroll
    var isScrolling;   
    
    let addScrollingClasses = () => {
        document.querySelector('.app-analytics-wrapper').classList.add('is-scrolling');
    }
    let removeScrollingClasses = () => {
        document.querySelector('.app-analytics-wrapper').classList.remove('is-scrolling');
    }
    
    window.addEventListener('scroll', addScrollingClasses)

    window.addEventListener('scroll', function ( event ) {
        window.clearTimeout( isScrolling );
        isScrolling = setTimeout(function() {
            removeScrollingClasses()
        }, 66);
    }, false);

    

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