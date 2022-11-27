import React from "react";

import ReactApexChart from "react-apexcharts"; 
import "../CSS/MainGraphLineGraph.css";


function MainGraphLineGraph(){

    const data ={
        series: [{
            name: "악취횟수",
            data: [100, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
        }],
        options: {
          chart: {
            height: 350,
            type: 'line',
            zoom: {
              enabled: false
            }
          },
          dataLabels: {
            enabled: true,
           
          },
          stroke: {
            curve: 'straight'
          },
          title: {
          
            align: 'left'
          },
          grid: {
            row: {
              colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
              opacity: 0.5
            },
          },
          xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep','Oct','Nov','Dec'],
          }
        },
      
      
      

    }


    return(
        <div>
            <ReactApexChart options={data.options} series={data.series} type="line" height={140} />
            <div className="MainGraphLineGraph">
                <div className="MainGraphLineGraphContent">
                            악취
                </div>
                
            </div>
        </div>
        
    )
}

export default MainGraphLineGraph;