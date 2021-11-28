import React, { useState, useRef } from "react";
import Chart from "react-google-charts";


const TopSoldProducts = () => {
  

    const data = [
        ['Products', 'Sold',],
        ['Soft drinks', 81750],
        ['Milk', 37920],
        ['Chips', 26950],
        ['Eggs', 20990],
        ['Bread', 15260]
      ];

      const options = {
        title: 'Top Sold Products',
        //chartArea: {width: '250px', height: '250px'},
        hAxis: {
          //title: 'Total Population',
          minValue: 0
        },
        vAxis: {
          title: 'Products'
        }
      };

    return (   
        <div className="top-sold-products">
          
          <Chart 
            chartType="BarChart"
            data={data}  
            options={options}
        />  
                           
        </div>
                

    );
}

export default TopSoldProducts; 