import React, { useRef } from "react";  

import '../../styles/components/hrm-metrics.css';

const HrmMetrics = () => {
    const hrmMetricsSection = useRef();
    
    return(
        <div className='hrm-metrics-body' id='hrm-metrics-body-analytics'>
            <div ref={hrmMetricsSection} className='hrm-metrics-wrapper'>HrmMetrics</div>
        </div>
    );
}

export default HrmMetrics;