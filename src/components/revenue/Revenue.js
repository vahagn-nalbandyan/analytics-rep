import React, { useRef } from "react";  
import '../../styles/components/revenue.css';
import RevPerDepartment from "./revenue-components/RevPerDepartment"
import TopSoldProducts from "./revenue-components/TopSoldProducts";
const Revenue = () => {
    const revenueSection = useRef();    
    return(
        <div className='revenue-body' id='revenue-body-analytics'>
            <div ref={revenueSection} className='revenue-wrapper'>
                <div className="revenue-per-dep-cont">
                   <RevPerDepartment />
                </div>
                <div className="top-sold-products-cont">
                    <TopSoldProducts />
                </div>
                
            </div>
        </div>
    );
}
export default Revenue;