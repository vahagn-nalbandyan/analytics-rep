import React, { useEffect } from "react";
import { Link } from "react-scroll";

import '../styles/navigation-analytics.css';

const NavigationAnalytics = () => {
    useEffect(()=>{
        if(window.location.hash === '#dashboard-body-analytics') {
            document.querySelector('.nav-button-dashboard').classList.add('active')
        }
        window.history.scrollRestoration = 'manual';        
    }, []);

    return(
        <div className='navigation-analytics-wrapper'>
            <div className='nav-button-cont'>
                <div>
                    <Link onContextMenu={(e)=>{e.preventDefault(); e.target.nextElementSibling.classList.add('open')}} spy={true} hashSpy={true} to='dashboard-body-analytics' className='nav-button nav-button-dashboard'>Dashboard</Link>
                    <div className='custom-context-menu'>
                        <a onContextMenu={(e)=>{e.preventDefault()}} href={'#dashboard-body-analytics'} target='_blank' rel='noreferrer'>Open link in new tab</a>
                        <span onContextMenu={(e)=>{e.preventDefault()}} className='copy-button' onClick={()=>{navigator.clipboard.writeText('http://localhost:3000/#dashboard-body-analytics')}}>Copy link</span>
                    </div>
                </div>
                <div>
                    <Link onContextMenu={(e)=>{e.preventDefault(); e.target.nextElementSibling.classList.add('open')}} spy={true} hashSpy={true} to='revenue-body-analytics' className='nav-button nav-button-revenue'>Revenue</Link>
                    <div className='custom-context-menu'>
                        <a onContextMenu={(e)=>{e.preventDefault()}} href={'#revenue-body-analytics'} target='_blank' rel='noreferrer'>Open link in new tab</a>
                        <span onContextMenu={(e)=>{e.preventDefault()}} className='copy-button' onClick={()=>{navigator.clipboard.writeText('http://localhost:3000/#revenue-body-analytics')}}>Copy link</span>
                    </div>
                </div>
                <div>
                    <Link onContextMenu={(e)=>{e.preventDefault(); e.target.nextElementSibling.classList.add('open')}} spy={true} hashSpy={true} to='demography-body-analytics' className='nav-button nav-button-demography'>Demography</Link>
                    <div className='custom-context-menu'>
                        <a onContextMenu={(e)=>{e.preventDefault()}} href={'#demography-body-analytics'} target='_blank' rel='noreferrer'>Open link in new tab</a>
                        <span onContextMenu={(e)=>{e.preventDefault()}} className='copy-button' onClick={()=>{navigator.clipboard.writeText('http://localhost:3000/#demography-body-analytics')}}>Copy link</span>
                    </div>
                </div>
                <div>
                    <Link onContextMenu={(e)=>{e.preventDefault(); e.target.nextElementSibling.classList.add('open')}} spy={true} hashSpy={true} to='circulation-body-analytics' className='nav-button nav-button-circulation'>Circulation</Link>
                    <div className='custom-context-menu'>
                        <a onContextMenu={(e)=>{e.preventDefault()}} href={'#circulation-body-analytics'} target='_blank' rel='noreferrer'>Open link in new tab</a>
                        <span onContextMenu={(e)=>{e.preventDefault()}} className='copy-button' onClick={()=>{navigator.clipboard.writeText('http://localhost:3000/#circulation-body-analytics')}}>Copy link</span>
                    </div>
                </div>
                <div>
                    <Link onContextMenu={(e)=>{e.preventDefault(); e.target.nextElementSibling.classList.add('open')}} spy={true} hashSpy={true} to='hrm-metrics-body-analytics' className='nav-button nav-button-hrm-metrics'>HRM Metrics</Link>
                    <div className='custom-context-menu'>
                        <a onContextMenu={(e)=>{e.preventDefault()}} href={'#hrm-metrics-body-analytics'} target='_blank' rel='noreferrer'>Open link in new tab</a>
                        <span onContextMenu={(e)=>{e.preventDefault()}} className='copy-button' onClick={()=>{navigator.clipboard.writeText('http://localhost:3000/#hrm-metrics-body-analytics')}}>Copy link</span>
                    </div>
                </div>
                <div>
                    <Link onContextMenu={(e)=>{e.preventDefault(); e.target.nextElementSibling.classList.add('open')}} spy={true} hashSpy={true} to='estimate-values-body-analytics' className='nav-button nav-button-estimate-values'>Estimate Values</Link>
                    <div className='custom-context-menu'>
                        <a onContextMenu={(e)=>{e.preventDefault()}} href={'#estimate-values-body-analytics'} target='_blank' rel='noreferrer'>Open link in new tab</a>
                        <span onContextMenu={(e)=>{e.preventDefault()}} className='copy-button' onClick={()=>{navigator.clipboard.writeText('http://localhost:3000/#estimate-values-body-analytics')}}>Copy link</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavigationAnalytics;