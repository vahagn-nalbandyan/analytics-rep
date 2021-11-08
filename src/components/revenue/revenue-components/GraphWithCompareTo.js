import React, { useEffect, useState } from 'react';
import Chart from 'react-google-charts';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import '../../../styles/components/revenue-components/graph-with-compare-to.css';

const GraphWithCompareTo = () => {
    const [monthSelected, setMonthSelected] = useState(true);
    const [yearSelected, setYearSelected] = useState(false);

    const [monthSelectedClass, setMonthSelectedClass] = useState('selected');
    const [yearSelectedClass, setYearSelectedClass] = useState('');

    const [startMonth, setStartMonth] = useState(new Date());
    const [endMonth, setEndMonth] = useState(new Date());

    const [startYear, setStartYear] = useState(new Date());
    const [endYear, setEndYear] = useState(new Date());
  
    const month = new Array();
    month[0] = "Jan";
    month[1] = "Feb";
    month[2] = "Mar";
    month[3] = "Apr";
    month[4] = "May";
    month[5] = "Jun";
    month[6] = "Jul";
    month[7] = "Aug";
    month[8] = "Sep";
    month[9] = "Oct";
    month[10] = "Nov";
    month[11] = "Dec";

    let startMonthName = month[startMonth.getMonth()] + ' ' + startMonth.getFullYear();
    let endMonthName = month[endMonth.getMonth()] + ' ' + startMonth.getFullYear();

    let startYearName = `${startYear.getFullYear()}`;
    let endYearName = `${endYear.getFullYear()}`;

    const onMonthBtnClick = () => {
        setMonthSelected(true);
        setMonthSelectedClass('selected');
        setYearSelected(false);
        setYearSelectedClass('');
    }

    const onYearBtnClick = () => {
        setYearSelected(true);
        setYearSelectedClass('selected');
        setMonthSelected(false);
        setMonthSelectedClass('');
    }

    const MonthPicker = () => {        
        return (
            <>
                <DatePicker
                    selected={startMonth}
                    onChange={(date) => setStartMonth(date)}
                    dateFormat="MM/yyyy"
                    showMonthYearPicker
                    maxDate={new Date()}
                />
                <DatePicker
                    selected={endMonth}
                    onChange={(date) => setEndMonth(date)}
                    dateFormat="MM/yyyy"
                    showMonthYearPicker
                    maxDate={new Date()}
                />
            </>
        );
    };
    
    const YearPicker = () => {        
        return (
            <>
                <DatePicker
                    selected={startYear}
                    onChange={(date) => setStartYear(date)}
                    showYearPicker
                    dateFormat="yyyy"
                    maxDate={new Date()}
                />
                <DatePicker
                    selected={endYear}
                    onChange={(date) => setEndYear(date)}
                    showYearPicker
                    dateFormat="yyyy"
                    maxDate={new Date()}
                />
            </>
        );
    };

    function daysInMonth (month, year) {
        return (new Date(year, month, 0).getDate()); 
    }   

    function showCalendar() {
        if(monthSelected) {
            return(
                <MonthPicker />
            )
        } else {
            return(
                <YearPicker />
            )
        }
    }

    const monthData = [
        ['Month', startMonthName, endMonthName],
        ['1', 452365, 512312],
        ['2', 135135, 12312],
        ['3', 18080, 21231],
        ['4', 1321, 65121],
        ['5', 981911, 52121],
        ['6', 12138, 18814],
        ['7', 163512, 1891523],
        ['8', 1984512, 1684531],
        ['9', 19651, 1985612],
        ['10', 1321, 198711],
        ['11', 742311, 984521],
        ['12', 642311, 123101],
        ['13', 4132321, 56231],
        ['14', 1256231, 651231],
        ['15', 135135, 12312],
        ['16', 18080, 21231],
        ['17', 1321, 65121],
        ['18', 981911, 52121],
        ['19', 12138, 18814],
        ['20', 163512, 1891523],
        ['21', 1984512, 1684531],
        ['22', 19651, 1985612],
        ['23', 1321, 198711],
        ['24', 742311, 984521],
        ['25', 642311, 123101],
        ['26', 4132321, 56231],
        ['27', 1231561, 651231],
        ['28', 1984512, 1984512],
        ['29', 18814, 651231],
        ['30', 984521, 742311],
        ['31', 135135, 1984512],
    ]

    const yearData = [
        ['Year', startYearName, endYearName],
        ['Jan', 123456, 234567],
        ['Feb', 131595, 32181],
        ['Mar', 882564, 504620],
        ['Apr', 132882, 433001],
        ['May', 461505, 308000],
        ['Jun', 667987, 242054],
        ['Jul', 346346, 435435],
        ['Aug', 828828, 585585],
        ['Sept', 323323, 232200],
        ['Oct', 255252, 555500],
        ['Nov', 123456, 234567],
        ['Dec', 667987, 242054],
    ]

    return(
        <div className='revenue-compare-graph-wrapper'>      
            <div className='left-side'>      
                <div className='button-cont'>
                    <button onClick={onMonthBtnClick} className={`widget-button month ${monthSelectedClass}`}>MTH</button>
                    <button onClick={onYearBtnClick} className={`widget-button year ${yearSelectedClass}`}>YR</button>
                </div>
                <div className='calendar-cont'>
                    {showCalendar()}
                </div>
            </div>
            <div className='graph-cont'>
                <Chart
                    width={'100%'}
                    height={'300px'}
                    chartType="AreaChart"
                    loader={<div>Loading Chart</div>}
                    data={yearSelected ? yearData : monthData}               
                    options={{
                        isStacked: false,
                        height: 300,
                        legend: { position: 'right', maxLines: 3 },
                        vAxis: { minValue: 0, title: 'Revenue', format: '֏' },
                        backgroundColor: 'transparent'
                    }}
                    rootProps={{ 'data-testid': '2' }}            
                />    
            </div>          
        </div>    
    );
}

export default GraphWithCompareTo;