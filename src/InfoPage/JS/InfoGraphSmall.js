
import React, { useEffect , useState} from "react";

import ReactApexChart from "react-apexcharts";
import {sewerInfoSmall} from "../../Api/ApiService";
import { useParams } from 'react-router-dom';
import {  useQuery } from '@tanstack/react-query'
import "../CSS/InfoGraphSmall.css"
import axios from "axios";


function InfoGraphSmall(){

    const params = useParams();
    const[smallNov, SetSmallNov] = useState();
    const[smallDev, SetSamllDev] = useState();
    const[smallInfoCount,SetSmallInfoCount ] = useState(0);
    
    
    useEffect(()=>{
        setTimeout(()=>{
            SetSmallInfoCount(smallInfoCount + 1);
            console.log(smallInfoCount)
            console.log("smallinfoueseffect");
    
            },4000)

        sewerInfoSmall(params.id).then((res)=>{
            console.log(res.data.nov_Count)
            SetSamllDev(res.data.nov_Count);
        })


    },[smallInfoCount])



    const fetchsmallInfoData = async () => {
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
        const res = await axios.get(`http://211.57.119.81:8080/sewer/info/small/${params.id}`);
        console.log(res)
        return res.data;
      }


      const queryfetchs = useQuery(['smallinfo_query'], fetchsmallInfoData, {
        onSuccess: (data)=> {
          console.log(data)
          console.log("smallinfousequerry")
          SetSamllDev(data.dec_Count)
        },
        
       
        
      })

      const data ={
        series: [{
            name: '악취',
            type: 'area',
            data: [4, 5, 1, 7, 1, 3, 6, 8, 3, 4, 2,smallDev]
          }],
          options: {
            chart: {
              type: 'line',
            },
            stroke: {
              curve: 'smooth'
            },
            fill: {
                type:'solid',
                opacity: [0.4, 1],
                
                colors: ['#cac708'],
        
              },
            colors :  ['#cac708'],
            labels: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월','10월','11월','12월'],
            markers: {
              size: 5
            },   
          },
      

      }


      return(
        <div  id="InfoGraphSmall">
             <ReactApexChart options={data.options} series={data.series} type="line" height={"100%"} width={"100%"}  />

        </div>
      )




}


export default InfoGraphSmall;