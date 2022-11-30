import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts"; 
import "../CSS/MainGraphLineGraph.css";
import { Grid } from "@material-ui/core";
import axios from "axios";
import {  useQuery } from '@tanstack/react-query'
import {lineGraphGet} from '../../Api/ApiService'

function MainGraphLineGraph(){

    const[sNov, SetSNov] = useState(0);
    const [scount, setSCount] = useState(0);

    useEffect(()=>{
      
      
      setTimeout(()=>{
        setSCount(scount + 1);
        console.log(scount)
        console.log("smalluseeffect");
        

        },4000)

        lineGraphGet().then((res)=>{
          SetSNov(res.data.smallCount);
        })


        if(scount === 10000){
          setSCount(0)
        }
      
    },[scount])



    const fetchsmallData = async () => {
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
      const res = await axios.get('http://211.57.119.81:8080/small/11/sewer');
      console.log(res)
      return res.data;
    }
  

    const queryfetch = useQuery(['small_query'], fetchsmallData, {
      onSuccess: (data)=> {
        console.log(data)
        console.log("smalluewquery");
        SetSNov(data.smallCount)
      },
      
     
      
    })
    





    const data ={
        series: [{
            name: "악취횟수",
            data: [1, 4, 2, 3, 5, 7, 6, 9, 1, 3, sNov, 2]
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
            categories: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월','10월','11월','12월'],
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
                            악취 
                </button>
                
            </div>
        </div>
        
    )
}

export default MainGraphLineGraph;