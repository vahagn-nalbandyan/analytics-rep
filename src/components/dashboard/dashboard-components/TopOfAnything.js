/* eslint-disable */
import React, { useEffect, useState } from "react";
import Select from 'react-select';

import '../../../styles/components/dashboard/dashboard-components/top-of-anything.css';

const TopOfAnything = () => {    
    const [selectedValue, setSelectedValue] = useState();
    const [barChartTitle, setBarChartTitle] = useState('Select Category');

    const [barOneName, setBarOneName] = useState('');
    const [barTwoName, setBarTwoName] = useState('');
    const [barThreeName, setBarThreeName] = useState('');
    const [barFourName, setBarFourName] = useState('');
    const [barFiveName, setBarFiveName] = useState('');

    const [barOneRate, setBarOneRate] = useState(null);
    const [barTwoRate, setBarTwoRate] = useState(null);
    const [barThreeRate, setBarThreeRate] = useState(null);
    const [barFourRate, setBarFourRate] = useState(null);
    const [barFiveRate, setBarFiveRate] = useState(null);

    const options = [
        { 
            value: 'top-cities', 
            label: 'Top Cities',
            data: [
                {name: 'Yerevan', rate: 82},
                {name: 'Gyumri', rate: 166},
                {name: 'Goris', rate: 122},
                {name: 'Kapan', rate: 144},
                {name: 'Vanadzor', rate: 119},
            ]
        },
        { 
            value: 'top-branches', 
            label: 'Top Branches',
            data: [
                {name: 'Komitas', rate: 922},
                {name: 'Tumanyan', rate: 628},
                {name: 'Zeytun', rate: 831},
                {name: 'Masiv', rate: 502},
                {name: 'Charbakh', rate: 722},
            ] 
        },
        { 
            value: 'top-products', 
            label: 'Top Products',
            data: [
                {name: 'Mango', rate: 82},
                {name: 'Coffee', rate: 112},
                {name: 'Bread', rate: 66},
                {name: 'Milk', rate: 72},
                {name: 'Vodka', rate: 48},
            ] 
        },
        { 
            value: 'top-hrm', 
            label: 'Top HRM',
            data: [
                {name: 'Gago', rate: 2341},
                {name: 'Poghos', rate: 2860},
                {name: 'Johny Depp', rate: 1941},
                {name: 'Esim ov', rate: 1141},
                {name: 'Donald Trump', rate: 1641},
            ] 
        }
    ]             

    let selectedOption = selectedValue;

    let sortedRates;      

    useEffect(()=>{        
        sortedRates = []; 
        if(selectedOption) {
            for(let i = 0; i < selectedOption['data'].length; i++) {
                sortedRates = [...sortedRates, selectedOption['data'][i]]
            }
            sortedRates.sort((a,b) => (a.rate > b.rate) ? -1 : ((b.rate > a.rate) ? 1 : 0)); 
            setBarOneName(sortedRates[0]['name']);     
            setBarTwoName(sortedRates[1]['name']);     
            setBarThreeName(sortedRates[2]['name']);     
            setBarFourName(sortedRates[3]['name']);     
            setBarFiveName(sortedRates[4]['name']);     

            setBarOneRate(sortedRates[0]['rate']);     
            setBarTwoRate(sortedRates[1]['rate']);     
            setBarThreeRate(sortedRates[2]['rate']);     
            setBarFourRate(sortedRates[3]['rate']);     
            setBarFiveRate(sortedRates[4]['rate']);               
            
        }   else {
                setBarOneName(' ');     
                setBarTwoName(' ');     
                setBarThreeName(' ');     
                setBarFourName(' ');     
                setBarFiveName(' ');

                setBarOneRate(null);     
                setBarTwoRate(null);     
                setBarThreeRate(null);     
                setBarFourRate(null);     
                setBarFiveRate(null);
        }               
    },[selectedValue]);  
    
    useEffect(() => {
        setSelectedValue(options[0]);
        setBarChartTitle(options[0].label)
    }, [])

    const onSelectChange = (selectedOption) => {
        setSelectedValue(selectedOption);
        if(selectedOption) {
            setBarChartTitle(selectedOption.label);  
        } else {
            setBarChartTitle('Select Category')
        }             
    }        
      
    return(
        <div className='top-of-anything-wrapper'>
            <p>Top Of Anything</p>
            <div className='dropdown-cont'>
                <Select 
                    className='react-select-container'
                    classNamePrefix="react-select"
                    value={selectedOption}
                    options={options} 
                    placeholder='Select Category'
                    onChange={onSelectChange}
                    maxMenuHeight={100}   
                    defaultValue='top-branches'
                />
            </div>
            {
                selectedValue &&
                (<div className='bar-chart-cont'>   
                    <span className='bar-chart-title'>{barChartTitle}</span> 
                    <div className='bar-cont-wrapper'>  
                        <span className='before'></span>
                        <div className='bar-wrapper'>
                            <div className='bar-cont'>
                                <span className='title'>{barOneName}</span>
                                <div style={{'maxWidth': `100%`}} className='bar'>{barOneRate}</div>
                            </div>         
                            <div className='bar-cont'>
                                <span className='title'>{barTwoName}</span>
                                <div style={{'maxWidth': `${barTwoRate * 100 / barOneRate}%`}} className='bar'>{barTwoRate}</div>
                            </div>         
                            <div className='bar-cont'>
                                <span className='title'>{barThreeName}</span>
                                <div style={{'maxWidth': `${barThreeRate * 100 / barOneRate}%`}} className='bar'>{barThreeRate}</div>
                            </div>         
                            <div className='bar-cont'>
                                <span className='title'>{barFourName}</span>
                                <div style={{'maxWidth': `${barFourRate * 100 / barOneRate}%`}} className='bar'>{barFourRate}</div>
                            </div>         
                            <div className='bar-cont'>
                                <span className='title'>{barFiveName}</span>
                                <div style={{'maxWidth': `${barFiveRate * 100 / barOneRate}%`}} className='bar'>{barFiveRate}</div>
                            </div>   
                        </div>
                    </div>       
                </div>)
            }
        </div>
    );
}

export default TopOfAnything;