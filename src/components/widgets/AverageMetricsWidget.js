/* eslint-disable */
import React, { useState, useEffect } from "react";
import { NavHashLink } from "react-router-hash-link";

import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

import '../../styles/components/widgets/average-metrics-widget.css';

const AverageMetricsWidget = ({title, dataAmount, dataRate, dataStatus, parentCallback, jumpToHref}) => { 
    const [monthSelected, setMonthSelected] = useState(true);
    const [yearSelected, setYearSelected] = useState(false);

    const [monthSelectedClass, setMonthSelectedClass] = useState('selected');
    const [yearSelectedClass, setYearSelectedClass] = useState('');

    const [compareTitle, setCompareTitle] = useState('Month');

    const onTrigger = () => {
        parentCallback(monthSelected);
    }

    useEffect(()=> {
        onTrigger();
    }, [monthSelected]);

    
    
    const showArrow = () => {
        if(dataStatus === true) {
            return <ArrowUpwardIcon className='icon arrow-icon arrow-positive' />            
        } else {
            return <ArrowDownwardIcon className='icon arrow-icon arrow-negative' />
        }
    }

    const onMonthBtnClick = () => {
        setMonthSelected(true);
        setMonthSelectedClass('selected');
        setCompareTitle('Month')
        setYearSelected(false);
        setYearSelectedClass('');
    }

    const onYearBtnClick = () => {
        setYearSelected(true);
        setYearSelectedClass('selected');
        setCompareTitle('Year')
        setMonthSelected(false);
        setMonthSelectedClass('');
    }

    return(
        <div className='average-metrics-widget-wrapper'>            
            <span className='average-metrics-widget-title'>
                <NavHashLink smooth to={jumpToHref}>{title}</NavHashLink>
            </span>
            <div className='button-cont'>
                <button onClick={onMonthBtnClick} className={`widget-button month ${monthSelectedClass}`}>MTH</button>
                <button onClick={onYearBtnClick} className={`widget-button year ${yearSelectedClass}`}>YR</button>
            </div>
            <div className='average-metrics-widget-amount-cont'>
                <span className='average-metrics-widget-amount'>${dataAmount}</span>
                <span className='average-metrics-widget-amount-rate'>
                    {dataStatus ? '+' : '-'}{dataRate}% {showArrow()}
                </span>
            </div>
            <span className='average-metrics-widget-compare-title'>VS Previous {compareTitle}</span>
        </div>
    );
}

export default AverageMetricsWidget;