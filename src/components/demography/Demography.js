import React, { useRef } from "react";  

import '../../styles/components/demography.css';

const Demography = () => {    
    const demographySection = useRef();

    return(
        <div className='demography-body' id='demography-body-analytics'>
            <div ref={demographySection} className='demography-wrapper'>Demography</div>
        </div>
    );
}

export default Demography;