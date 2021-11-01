/* eslint-disable */
import React, { useEffect } from "react";
import { Link } from "react-scroll";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

import '../styles/navigation-analytics.css';

const NavigationAnalytics = () => {
    let menuButtons;
    useEffect(()=>{
        if(window.location.hash === '#dashboard-body-analytics') {
            document.querySelector('.nav-button-dashboard').classList.add('active')
        }
        window.history.scrollRestoration = 'manual';        
        menuButtons = document.querySelectorAll('.nav-button');
        addMenuButtonsActiveClass();
    }, []);

    let addMenuButtonsActiveClass = function() {
        for (var i = 0; i < menuButtons.length; i++) {
            if(menuButtons[i].classList.contains(window.location.hash)) {
                menuButtons[i].classList.add('active');
            }
        }
    }  

    return(
        <div className='navigation-analytics-wrapper'>
            <div className='nav-button-cont'>
                <div>
                    <Link onContextMenu={(e)=>{e.preventDefault(); e.target.nextElementSibling.classList.add('open')}} spy={true} hashSpy={true} to='dashboard-body-analytics' className='nav-button nav-button-dashboard #dashboard-body-analytics'>Dashboard</Link>
                    <div className='custom-context-menu'>
                        <a onContextMenu={(e)=>{e.preventDefault()}} href={'#dashboard-body-analytics'} target='_blank' rel='noreferrer'>Open link in new tab</a>
                        <span onContextMenu={(e)=>{e.preventDefault()}} className='copy-button' onClick={()=>{navigator.clipboard.writeText('http://localhost:3000/#dashboard-body-analytics')}}>Copy link<ContentCopyIcon fontSize='small' /></span>
                    </div>
                </div>
                <div>
                    <Link onContextMenu={(e)=>{e.preventDefault(); e.target.nextElementSibling.classList.add('open')}} spy={true} hashSpy={true} to='revenue-body-analytics' className='nav-button nav-button-revenue #revenue-body-analytics'>Revenue</Link>
                    <div className='custom-context-menu'>
                        <a onContextMenu={(e)=>{e.preventDefault()}} href={'#revenue-body-analytics'} target='_blank' rel='noreferrer'>Open link in new tab</a>
                        <span onContextMenu={(e)=>{e.preventDefault()}} className='copy-button' onClick={()=>{navigator.clipboard.writeText('http://localhost:3000/#revenue-body-analytics')}}>Copy link<ContentCopyIcon fontSize='small' /></span>
                    </div>
                </div>
                <div>
                    <Link onContextMenu={(e)=>{e.preventDefault(); e.target.nextElementSibling.classList.add('open')}} spy={true} hashSpy={true} to='demography-body-analytics' className='nav-button nav-button-demography #demography-body-analytics'>Demography</Link>
                    <div className='custom-context-menu'>
                        <a onContextMenu={(e)=>{e.preventDefault()}} href={'#demography-body-analytics'} target='_blank' rel='noreferrer'>Open link in new tab</a>
                        <span onContextMenu={(e)=>{e.preventDefault()}} className='copy-button' onClick={()=>{navigator.clipboard.writeText('http://localhost:3000/#demography-body-analytics')}}>Copy link<ContentCopyIcon fontSize='small' /></span>
                    </div>
                </div>
                <div>
                    <Link onContextMenu={(e)=>{e.preventDefault(); e.target.nextElementSibling.classList.add('open')}} spy={true} hashSpy={true} to='circulation-body-analytics' className='nav-button nav-button-circulation #circulation-body-analytics'>Circulation</Link>
                    <div className='custom-context-menu'>
                        <a onContextMenu={(e)=>{e.preventDefault()}} href={'#circulation-body-analytics'} target='_blank' rel='noreferrer'>Open link in new tab</a>
                        <span onContextMenu={(e)=>{e.preventDefault()}} className='copy-button' onClick={()=>{navigator.clipboard.writeText('http://localhost:3000/#circulation-body-analytics')}}>Copy link<ContentCopyIcon fontSize='small' /></span>
                    </div>
                </div>
                <div>
                    <Link onContextMenu={(e)=>{e.preventDefault(); e.target.nextElementSibling.classList.add('open')}} spy={true} hashSpy={true} to='hrm-metrics-body-analytics' className='nav-button nav-button-hrm-metrics #hrm-metrics-body-analytics'>HRM Metrics</Link>
                    <div className='custom-context-menu'>
                        <a onContextMenu={(e)=>{e.preventDefault()}} href={'#hrm-metrics-body-analytics'} target='_blank' rel='noreferrer'>Open link in new tab</a>
                        <span onContextMenu={(e)=>{e.preventDefault()}} className='copy-button' onClick={()=>{navigator.clipboard.writeText('http://localhost:3000/#hrm-metrics-body-analytics')}}>Copy link<ContentCopyIcon fontSize='small' /></span>
                    </div>
                </div>
                <div>
                    <Link onContextMenu={(e)=>{e.preventDefault(); e.target.nextElementSibling.classList.add('open')}} spy={true} hashSpy={true} to='estimate-values-body-analytics' className='nav-button nav-button-estimate-values #estimate-values-body-analytics'>Estimate Values</Link>
                    <div className='custom-context-menu'>
                        <a onContextMenu={(e)=>{e.preventDefault()}} href={'#estimate-values-body-analytics'} target='_blank' rel='noreferrer'>Open link in new tab</a>
                        <span onContextMenu={(e)=>{e.preventDefault()}} className='copy-button' onClick={()=>{navigator.clipboard.writeText('http://localhost:3000/#estimate-values-body-analytics')}}>Copy link<ContentCopyIcon fontSize='small' /></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavigationAnalytics;