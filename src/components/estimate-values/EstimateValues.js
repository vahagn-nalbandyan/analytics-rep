import React, { useRef } from "react";  

import '../../styles/components/estimate-values.css';

const EstimateValues = () => {
    const estimateValuesSection = useRef();
    
    return(
        <div className='estimate-values-body' id='estimate-values-body-analytics'>
            <div ref={estimateValuesSection} className='estimate-values-wrapper'>EstimateValues</div>
        </div>
    );
}

export default EstimateValues;