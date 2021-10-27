/* eslint-disable */
import React, { useState, useEffect } from "react";
import axios from "axios";

import AverageMetricsWidget from "../../widgets/AverageMetricsWidget";

const DashboardAverageDelivery = () => {
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
                setRevenueAmount(response.data[124]['id']);
                setRevenueRate(response.data[165]['userId']);
                setRevenueStatus(response.data[156]['completed']);                         
            } else {
                setRevenueDataArr(response.data);   
                setRevenueAmount(response.data[188]['id']);
                setRevenueRate(response.data[133]['userId']);
                setRevenueStatus(response.data[122]['completed']); 
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
            <AverageMetricsWidget jumpToHref='/#estimate-values-body-analytics' parentCallback={handleCallback} title='Average Delivery Time' dataAmount={revenueAmount} dataRate={revenueRate} dataStatus={revenueStatus} />
        </>
    );
}

export default DashboardAverageDelivery;