import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import {sewerInfoBlock} from "../../Api/ApiService";
import { useParams } from 'react-router-dom';
import {  useQuery } from '@tanstack/react-query'
import "../CSS/InfoGraphBlock.css"

import axios from "axios";


function InfoGraphBlock(){
    const params = useParams();
    const[blockNov, SetBlockNov] = useState();
    const[blockDev, SetBlockDev] = useState();
    const[blockInfoCount,SetBlockInfoCount ] = useState(0);




    




     // 초마다 업그레이드 
     useEffect(()=>{
        setTimeout(()=>{
            SetBlockInfoCount(blockInfoCount + 1);
            console.log(blockInfoCount)
            console.log("blockinfoueseffect");
    
            },4000)


        sewerInfoBlock(params.id).then((res)=>{
            console.log(res.data.dec_Count)
            SetBlockDev(res.data.dec_Count)
            
        })

       


    },[blockInfoCount])



    const fetchblockInfoData = async () => {
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
        const res = await axios.get(`http://211.57.119.81:8080/sewer/info/block/${params.id}`);
        console.log(res)
        return res.data;
      }


      const queryfetch = useQuery(['blockinfo_query'], fetchblockInfoData, {
        onSuccess: (data)=> {
          console.log(data.dec_Count)
          console.log("blockinfousequerry")
          SetBlockDev(data.dec_Count)
        },
        
       
        
      })


      const data ={
        series: [{
            name: '막힌 횟수',
            type: 'area',
            data: [1, 5, 3, 7, 1, 3, 6, 4, 1, 4, 5,blockDev]
          }],
          options: {
            chart: {
              height: 350,
              type: 'line',
            },
            stroke: {
              curve: 'smooth'
            },
            fill: {
                type:'solid',
                opacity: [0.4, 1],
                
                colors: ['#249ffb'],
        
              },
              colors: ['#249ffb'],
            labels: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월','10월','11월','12월'],
            markers: {
              size: 5
            },   
          },
          
       
      

      }


      return(
        <div id="InfoGraphBlock">
            <ReactApexChart options={data.options} series={data.series} type="line" height={"100%"} width={"100%"} />
        </div>
      )

    

}


export default InfoGraphBlock;