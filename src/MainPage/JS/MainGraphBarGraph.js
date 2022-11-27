import React from "react";
import ReactApexChart from "react-apexcharts"; 
import "../CSS/MainGraphBarGraph.css";


function MainGraphBarGraph(){
    
    const data ={
        
          
        series: [{
          name: '막힌 횟수',
          type: 'column',
          data: [100, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
        }],
        options: {
        
          stroke: {
            width: [0, 5]
          },
    
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep','Oct','Nov','Dec'],
          
        },
      
      
      };
    return(
        <div>
            <ReactApexChart options={data.options} series={data.series} type="line" height={230} />
            <div className="MainGraphBarGraph">
                <div className="MainGraphBarGraphContent">
                            막힌 횟수
                </div>
                
            </div>
        </div>
    )
}

export default MainGraphBarGraph;