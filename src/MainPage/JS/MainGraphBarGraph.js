import React from "react";
import ReactApexChart from "react-apexcharts"; 
import "../CSS/MainGraphBarGraph.css";
import { Grid } from "@material-ui/core";


function MainGraphBarGraph(){
  
    
    const data ={
        
          
      series: [{
        name: '막힌 횟수',
        data: [100, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
      }],
      options: {
        chart: {
          type: 'bar',
          height: '10%', width: '100%'
          
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded'
          },
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep','Oct','Nov','Dec'],
        },
       
        fill: {
          
          colors: ['#5a98f7'],
          type: "gradient",
          gradient: {
            shadeIntensity: 0,
            type: "vertical",
            opacityFrom: 0.9,
            opacityTo: 0.5,
            stops: [0 , 100],
            inverseColors:  false
          }
        },
       
      },
    
    
    };
    return(
        <div className="chart">
          <Grid container className="chartContainer">
                <Grid item xs={1} sm={1} >
                    

                </Grid>
                
                <Grid item xs={10} sm={10}>
                <ReactApexChart options={data.options} series={data.series} type="bar" height={"100%"} width={"100%"}  className="barchart"/>
                    
                </Grid>
                <Grid item xs={1} sm={1}></Grid>

            </Grid>
          
            <div className="MainGraphBarGraph">
                <button className="MainGraphBarGraphContent">
                            막힌 횟수
                </button>
                
            </div>
            <div className="bottomchartborder"></div>
        </div>
    )
}

export default MainGraphBarGraph;