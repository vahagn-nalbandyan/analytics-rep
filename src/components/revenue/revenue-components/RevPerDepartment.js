
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
        ['May',100, 160, 220, 230, 300, 160],
        ['Jun',135, 280, 190, 290, 170, 120],
        ['Jul',100, 274, 190, 290, 210, 115],
        ['Aug',119, 246, 224, 270, 160, 120],
        ['Sep',100, 280, 190, 290, 150, 120],
        ['Oct',100, 280, 190, 290, 300, 120],
        ['Nov',109, 223, 104, 194, 243, 107],
        ['Dec',105, 208, 117, 236, 209, 112],
        
      ];

      const dataByYear = [
        ['Year', 'The Produce department', 'The Meat department', 'The Seafood department', 'The Beer and Wine section', 'The Health and Beauty department',
              'The Deli/Prepared Foods department'],
        
        ['2008',100, 280, 190, 290, 300, 120],
        ['2009',100, 100, 240, 200, 320, 180],
        ['2010',100, 160, 220, 230, 300, 160],
        ['2011',120, 100, 240, 200, 320, 180],
        ['2015',135, 280, 190, 290, 170, 120],
        ['2019',100, 274, 190, 290, 210, 115],
        ['2020',119, 246, 224, 270, 160, 120],
        ['2021',100, 280, 190, 290, 150, 120],
        
      ];

    
   

    return (
        <div className="rev-per-dep">
            
            <div className='button-cont'>
                <button onClick={() => onMonthBtnClick()} className="widget-button">MTH</button>
                <button onClick={() => onYearBtnClick()} className="widget-button">YR</button>
            </div>


            <Chart data={monthSelectedClass === true ? data : dataByYear} chartType="ColumnChart"/>
        </div>
                

    );
}

export default RevenuePerDepartment;