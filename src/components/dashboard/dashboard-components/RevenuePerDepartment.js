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
        ["Department", "Profit during current month", { role: "style" }],
        // ['Month', 'The Produce department', 'The Meat department', 'The Seafood department', 'The Beer and Wine section', 'The Health and Beauty department',
        //       'The Deli/Prepared Foods department'],
        
        ['The Produce department',120,"green"], 
        ['The Meat department',100, "red"], 
        ['The Seafood department',154, "black"],
        ['The Beer and Wine section',220, "gold"], 
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
          
        ["Department", "Profit during current year", { role: "style" }],
        // ['Month', 'The Produce department', 'The Meat department', 'The Seafood department', 'The Beer and Wine section', 'The Health and Beauty department',
        //       'The Deli/Prepared Foods department'],
        
        ['The Produce department',340,"blue"], 
        ['The Meat department',124, "silver"], 
        ['The Seafood department',217, "red"],
        ['The Beer and Wine section',195, "light-blue"],
        
      ];

    
   

    return (   
        <div className="rev-per-dep">
            
            <div className='button-cont'>
                <button onClick={() => onMonthBtnClick()} className="widget-button">MTH</button>
                <button onClick={() => onYearBtnClick()} className="widget-button">YR</button>
            </div>


        <Chart data={monthSelectedClass === true ? data : dataByYear} chartType="ColumnChart" />               
        </div>
                

    );
}

export default RevenuePerDepartment; 