import React from "react";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

import '../../styles/components/widgets/average-metrics-widget.css';

const AverageMetricsWidget = ({title, dataAmount, dataRate, dataStatus}) => {    
    const showArrow = () => {
        if(dataStatus === true) {
            return <ArrowUpwardIcon className='icon arrow-icon arrow-positive' />            
        } else {
            return <ArrowDownwardIcon className='icon arrow-icon arrow-negative' />
        }
    }

    return(
        <div className='average-metrics-widget-wrapper'>
            <span className='average-metrics-widget-title'>
                {title}
            </span>
            <div className='average-metrics-widget-amount-cont'>
                <span className='average-metrics-widget-amount'>${dataAmount}</span>
                <span className='average-metrics-widget-amount-rate'>
                    {dataStatus ? '+' : '-'}{dataRate}% {showArrow()}
                </span>
            </div>
            <span className='average-metrics-widget-compare-title'>VS Previous Month</span>
        </div>
    );
}

export default AverageMetricsWidget;