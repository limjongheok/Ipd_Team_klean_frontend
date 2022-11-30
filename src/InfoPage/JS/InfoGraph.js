import React, { useEffect, useState } from "react";

import {sewerInfoBlock} from "../../Api/ApiService";
import {sewerInfoSmall} from "../../Api/ApiService";
import { useParams } from 'react-router-dom';
import {  useQuery } from '@tanstack/react-query'

import axios from "axios";

function InfoGraph(){


    const params = useParams();
    const[blockNov, SetBlockNov] = useState();
    const[smallNov, SetSmallNov] = useState();
    
     // 초마다 업그레이드 
    useEffect(()=>{
        sewerInfoBlock(params.id).then((res)=>{
            console.log(res.data.nov_Count)
            SetBlockNov(res.data.nov_Count);
        })

        sewerInfoSmall(params.id).then((res)=>{
            console.log(res.data.nov_Count)
            SetSmallNov(res.data.nov_Count);
        })


    },[])


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
          console.log(data)
          console.log("blockinfousequerry")
          SetBlockNov(data.blockCount)
        },
        
       
        
      })


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
          SetBlockNov(data.blockCount)
        },
        
       
        
      })
    
    


    return(
        <div>
          그래프 
        </div>
    )
}


export default InfoGraph;