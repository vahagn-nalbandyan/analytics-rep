import React, { useState } from "react";
import Select from 'react-select';
import Chart from "react-google-charts";

import '../../../styles/components/dashboard/dashboard-components/top-of-anything.css';

const TopOfAnything = () => {    
    const [selectedValue, setSelectedValue] = useState({})
    const options = [
        { value: 'category-1', label: 'Category-1' },
        { value: 'category-2', label: 'Category-2' },
        { value: 'category-3', label: 'Category-3' },
        { value: 'category-4', label: 'Category-4' },
        { value: 'category-5', label: 'Category-5' },
        { value: 'category-6', label: 'Category-6' },
        { value: 'category-7', label: 'Category-7' },
        { value: 'category-8', label: 'Category-8' },
      ]

    const onSelectChange = (selectedOption) => {
        setSelectedValue(selectedOption);
        console.log(selectedOption);
    }  

    let selectedOption = selectedValue;
      
    return(
        <div className='top-of-anything-wrapper'>
            <p>Top Of Anything</p>
            <div className='dropdown-cont'>
                <Select 
                    className='react-select-container'
                    classNamePrefix="react-select"
                    value={selectedOption}
                    options={options} 
                    isClearable
                    placeholder='Select Category'
                    onChange={onSelectChange}
                    maxMenuHeight={100}                  
                />
            </div>
            <div className='bar-chart-cont'>
                <Chart
                    width={'100%'}
                    height={'100%'}
                    chartType="BarChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                        ['', '', ''],
                        ['New York City, NY', 8175000,null],
                        ['Los Angeles, CA', 3792000, 3694000],
                        ['Chicago, IL', 2695000, 2896000],
                        ['Houston, TX', 2099000, 1953000],
                        ['Philadelphia, PA', 1526000, 1517000],
                    ]}
                    options={{
                        chartArea: { width: '30%' },
                        isStacked: true,
                    }}
                />
            </div>
        </div>
    );
}

export default TopOfAnything;