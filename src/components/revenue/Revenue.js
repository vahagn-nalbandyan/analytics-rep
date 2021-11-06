import React, { useRef } from "react";

import '../../styles/components/revenue.css';
import Chart from "react-google-charts";

const Revenue = () => {
    const revenueSection = useRef();

    const data = [
        ["Element", "Revenue", { role: "style" }],
        ["The Produce department", 8.94, "#b87333"], 
        ["The Meat department", 10.49, "silver"], 
        ["The Seafood department", 19.3, "gold"],
        ["The Beer and Wine section", 50.65, "color: #e5e4e2"],
        ["The Health and Beauty department", 25.3, "red"],
        ["The Deli/Prepared Foods department", 3.1, "yellow"]
      ];

    return (
        <div className='revenue-body' id='revenue-body-analytics'>
            <div ref={revenueSection} className='revenue-wrapper'>
                <Chart
                    chartType="ColumnChart"
                    width="100%"
                    height="400px"
                    data={data}
                />
            </div>

        </div>
    );
}

export default Revenue;