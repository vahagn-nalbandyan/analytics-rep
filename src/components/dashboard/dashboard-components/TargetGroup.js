/* eslint-disable */
import React, { useState } from "react";
import Chart from "react-google-charts";

import '../../../styles/components/dashboard/dashboard-components/target-group.css';

const TargetGroup = () => {
    const [groupOneQty, setGroupOneQty] = useState(150); // 13 - 17
    const [groupTwoQty, setGroupTwoQty] = useState(220); // 18 - 24
    const [groupThreeQty, setGroupThreeQty] = useState(166); // 25 - 34
    const [groupFourQty, setGroupFourQty] = useState(330); // 35 - 44
    const [groupFiveQty, setGroupFiveQty] = useState(150); // 45 - 54
    const [groupSixQty, setGroupSixQty] = useState(121); // 55 - 64
    const [groupSevenQty, setGroupSevenQty] = useState(188); // 65+
    return(
        <>        
            <Chart
                width={'500px'}
                height={'300px'}
                chartType="PieChart"
                className='target-group'
                loader={<div className='target-group-loader'>Loading Chart</div>}
                data={[
                    ['Customers', 'Lifetime Quantity'],
                    ['13 - 17', groupOneQty],
                    ['18 - 24', groupTwoQty],
                    ['25 - 34', groupThreeQty],
                    ['35 - 44', groupFourQty],
                    ['45 - 54', groupFiveQty],
                    ['55 - 64', groupSixQty],
                    ['65+', groupSevenQty]
                ]}
            />        
        </>
    );
}

export default TargetGroup;