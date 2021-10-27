import React, { useRef } from "react";  

import '../../styles/components/circulation.css';

const Circulation = () => {
    const circulationSection = useRef();

    return(
        <div className='circulation-body' id='circulation-body-analytics'>
            <div ref={circulationSection} className='circulation-wrapper'>Circulation</div>
        </div>
    );
}

export default Circulation;