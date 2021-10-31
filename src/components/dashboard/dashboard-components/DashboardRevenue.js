/* eslint-disable */
import React, { useState, useEffect } from "react";
import axios from "axios";

import AverageMetricsWidget from "../../widgets/AverageMetricsWidget";

const DashboardRevenue = () => {
    const [monthSelected, setMonthSelected] = useState(true)
    const [revenueDataArr, setRevenueDataArr] = useState([]);
    const [revenueAmount, setRevenueAmount] = useState(null);
    const [revenueRate, setRevenueRate] = useState(null);
    const [revenueStatus, setRevenueStatus] = useState(false);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(response => {  
            if(monthSelected) {
                setRevenueDataArr(response.data);   
                setRevenueAmount(response.data[12]['id']);
                setRevenueRate(response.data[161]['userId']);
                setRevenueStatus(response.data[136]['completed']);                         
            } else {
                setRevenueDataArr(response.data);   
                setRevenueAmount(response.data[18]['id']);
                setRevenueRate(response.data[131]['userId']);
                setRevenueStatus(response.data[182]['completed']); 
            }    
        })
        .catch(err => {
            console.log(err);
        });
    }, [monthSelected]);   

    const handleCallback = (childData) => {
        setMonthSelected(childData);
    }

    return(
        <>
            <AverageMetricsWidget jumpToHref='revenue-body-analytics' parentCallback={handleCallback} title='Revenue' unit='$' dataAmount={revenueAmount} dataRate={revenueRate} dataStatus={revenueStatus} />
        </>
    );
}

export default DashboardRevenue;