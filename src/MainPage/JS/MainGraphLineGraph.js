import React from "react";

import ReactApexChart from "react-apexcharts"; 
import "../CSS/MainGraphLineGraph.css";
import { Grid } from "@material-ui/core";


function MainGraphLineGraph(){

    const data ={
        series: [{
            name: "악취횟수",
            data: [100, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
        }],
        options: {
          chart: {
            height: '10%', width: '100%',
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
          fill: {
          
            colors: ['#f3f3f3'],
            
          },
          xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep','Oct','Nov','Dec'],
          }
        },
      
      
      

    }


    return(
        <div className="chart">
          
          <div className="topchartborder"></div>
          <Grid container className="chartContainer">
                <Grid item xs={1} sm={1} >
                    

                </Grid>
                
                <Grid item xs={10} sm={10}>
                <ReactApexChart options={data.options} series={data.series} type="line" height={"100%"} width={"100%"} className="linechart" />
                    
                </Grid>
                <Grid item xs={1} sm={1}></Grid>

            </Grid>
            
            <div className="MainGraphLineGraph">
                <button className="MainGraphLineGraphContent">
                            악취 횟수
                </button>
                
            </div>
        </div>
        
    )
}

export default MainGraphLineGraph;