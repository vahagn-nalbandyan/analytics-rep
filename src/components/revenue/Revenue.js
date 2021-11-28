import React, { useRef } from "react";  
import '../../styles/components/revenue.css';
import RevPerDepartment from "./revenue-components/RevPerDepartment"
import TopSoldProducts from "./revenue-components/TopSoldProducts";
import GraphWithCompareTo from "./revenue-components/GraphWithCompareTo";

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
                
                <div className='revenue-section-1'>
                    <div className='revenue-compare-graph-cont'>
                        <p>Graph With Compare To</p>
                        <GraphWithCompareTo />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Revenue;