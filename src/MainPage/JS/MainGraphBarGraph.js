import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts"; 
import "../CSS/MainGraphBarGraph.css";
import { Grid } from "@material-ui/core";
import {  useQuery } from '@tanstack/react-query'
import axios from "axios";
import {barGraphGet} from '../../Api/ApiService'


function MainGraphBarGraph(){

    const[Nov, SetNov] = useState(0);
    const [count, setCount] = useState(0);
    useEffect(()=>{
    
      
     
      setTimeout(()=>{
        setCount(count + 1);
        console.log(count)
        console.log("blockueseffect");

        },5000)
        barGraphGet().then((res)=>{
          SetNov(res.data.blockCount)
        })
      

      if(count === 10000){
        setCount(0)
      }
      
    },[count])
    // useEffect(()=>{
    //   setTimeout(()=>{

    //   },1000)
     
    // })

    const fetchblockData = async () => {
      let headers = new Headers({
        "Content-Type": "application/json",
      })

      const accessToken = localStorage.getItem("ACCESS_TOKEN");
      if (accessToken && accessToken !== "") {
        headers.append("Authorization", accessToken);
        //console.log(accessToken)
    
        // axios 전역 변수 생성
        axios.defaults.headers.common['Authorization'] = "Bearer  " + accessToken;
      }
      const res = await axios.get('http://211.57.119.81:8080/block/11/sewer');
      console.log(res)
      return res.data;
    }
  

    const queryfetch = useQuery(['block_query'], fetchblockData, {
      onSuccess: (data)=> {
        console.log(data)
        console.log("blockusequerry")
        SetNov(data.blockCount)
      },
      
     
      
    })
    
    const data ={
        
          
      series: [{
        name: '막힌 횟수',
        data: [10,7, 8, 13, 5, 11, 2, 12, 7, 3, Nov, 10]
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
          categories: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월','10월','11월','12월'],
        },
       
        fill: {
          
          colors: ['#249ffb'],
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