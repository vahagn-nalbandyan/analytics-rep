/* eslint-disable */
import React, { useState, useEffect } from "react";
import axios from "axios";

import AverageMetricsWidget from "../../widgets/AverageMetricsWidget";

const DashboardSessionNumbers = () => {
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
                setRevenueAmount(response.data[33]['id']);
                setRevenueRate(response.data[44]['userId']);
                setRevenueStatus(response.data[55]['completed']);                         
            } else {
                setRevenueDataArr(response.data);   
                setRevenueAmount(response.data[66]['id']);
                setRevenueRate(response.data[77]['userId']);
                setRevenueStatus(response.data[88]['completed']); 
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
            <AverageMetricsWidget jumpToHref='/#estimate-values-body-analytics' parentCallback={handleCallback} title='Number Of Sessions' dataAmount={revenueAmount} dataRate={revenueRate} dataStatus={revenueStatus} />
        </>
    );
}

export default DashboardSessionNumbers;