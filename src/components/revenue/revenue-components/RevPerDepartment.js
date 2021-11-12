
import React, { useState, useRef } from "react";
import Chart from "react-google-charts";

const RevenuePerDepartment = () => {
    const revenueSection = useRef();

    const [monthSelectedClass, setMonthSelectedClass] = useState(true);
    const [yearSelectedClass, setYearSelectedClass] = useState(false);

    const onMonthBtnClick = () => {
        setMonthSelectedClass(true);
        setYearSelectedClass(false)
    }

    const onYearBtnClick = () => {
        setMonthSelectedClass(false);
        setYearSelectedClass(true)
    }

    const data = [
        ['Month', 'The Produce department', 'The Meat department', 'The Seafood department', 'The Beer and Wine section', 'The Health and Beauty department',
              'The Deli/Prepared Foods department'],
        
        ['Jan',120, 100, 240, 200, 320, 180],
        ['Feb',100, 160, 220, 230, 300, 160],
        ['Mar',100, 280, 190, 290, 300, 120],
        ['Apr',100, 100, 240, 200, 320, 180],
        // ['May',10, 16, 22, 23, 30, 16],
        // ['Jun',10, 28, 19, 29, 17, 12],
        // ['Jul',10, 28, 19, 29, 21, 12],
        // ['Aug',10, 28, 19, 29, 16, 12],
        // ['Sep',10, 28, 19, 29, 15, 12],
        // ['Oct',10, 28, 19, 29, 30, 12],
        // ['Nov',10, 28, 19, 29, 32, 12],
        // ['Dec',10, 28, 19, 29, 29, 12],
        
      ];

      const dataByYear = [
        ['Year', 'The Produce department', 'The Meat department', 'The Seafood department', 'The Beer and Wine section', 'The Health and Beauty department',
              'The Deli/Prepared Foods department'],
        
        ['2010',100, 280, 190, 290, 300, 120],
        ['2015',100, 100, 240, 200, 320, 180],
        ['2020',100, 160, 220, 230, 300, 160],
        ['2025',120, 100, 240, 200, 320, 180],
        // ['May',10, 16, 22, 23, 30, 16],
        // ['Jun',10, 28, 19, 29, 17, 12],
        // ['Jul',10, 28, 19, 29, 21, 12],
        // ['Aug',10, 28, 19, 29, 16, 12],
        // ['Sep',10, 28, 19, 29, 15, 12],
        // ['Oct',10, 28, 19, 29, 30, 12],
        // ['Nov',10, 28, 19, 29, 32, 12],
        // ['Dec',10, 28, 19, 29, 29, 12],
        
      ];

    
   

    return (
        <div className="rev-per-dep">
            
            <div className='button-cont'>
                <button onClick={() => onMonthBtnClick()} className="widget-button month">MTH</button>
                <button onClick={() => onYearBtnClick()} className="widget-button year">YR</button>
            </div>


        <Chart data={monthSelectedClass === true ? data : dataByYear} chartType="ColumnChart"/>
        </div>
                

    );
}

export default RevenuePerDepartment;