import React, { useRef } from "react";  

import '../../styles/components/revenue.css';

const Revenue = () => {
    const revenueSection = useRef();    

    return(
        <div className='revenue-body' id='revenue-body-analytics'>
            <div ref={revenueSection} className='revenue-wrapper'>Revenue</div>
        </div>
    );
}

export default Revenue;