import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "../CSS/InfoInfo.css"
import {sewerInfoGet} from "../../Api/ApiService";
import { useParams } from "react-router-dom";
import axios from "axios";
import {  useQuery } from '@tanstack/react-query'


function InfoInfo(){

    const params = useParams();
    const[InfoAddressName, SetInfoAddressName] = useState();
    const[InfoBlockCount, SetInfoBlockCount] = useState();
    const[InfoBlockDate, SetInfoBlockDate] = useState();
    const[InfoBlockTime, SetInfoBlockTime] = useState();
    const[InfoBlockValue, SetBlockValue] = useState();
    const[InfoNowHumidity, SetInfoNowHumidity] = useState();
    const[InfoNowTemperature, SetInfoNowTemperature] = useState();
    const[InfoRegionname , SetInfoRegionname] = useState();
    const[InfoSmallCount, SetInfoSmallCount] = useState();
    const[InfoSmallDate, SetInfoSmallDate] = useState();
    const[InfoSmallTime, SetInfoSmalltime] = useState();
    const[InfoState, SetInfoState] = useState();
    const[InfoLatitude, SetInfoLatitude] = useState();
    const[InfoLongtitude, SetInfoLongtitude] = useState();
    const[MyLatitude, SetMyLatitude] = useState();
    const[MyLongtitude, SetMyLongtitude] = useState();
    


    function ShowMap(){
        window.open(`https://www.google.co.kr/maps/dir/${MyLatitude},${MyLongtitude}/${InfoLatitude},${InfoLongtitude}`)

    }




    const fetchInfoInfoData = async () => {
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
        const res = await axios.get(`http://211.57.119.81:8080/active/sewer/info/${params.id}`);
        console.log(res)
        return res.data;
      }

      const queryfetch = useQuery(['infoinfo_query'], fetchInfoInfoData, {
        onSuccess: (data)=> {
          console.log(data)
          console.log("infoinfousequerry")
            SetInfoAddressName(data.address_name);
            SetInfoBlockCount(data.blockCount);
            SetInfoBlockDate(data.blockDate);
            SetInfoBlockTime(data.blockTime);
            SetBlockValue(data.blockValue);
            SetInfoNowHumidity(data.nowHumidity);
            SetInfoNowTemperature(data.nowTemperature);
            SetInfoRegionname(data.region_name);
            SetInfoSmallCount(data.smallCount);
            SetInfoSmallDate(data.smallDate);
            SetInfoSmalltime(data.smallTime);
            SetInfoState(data.state);
            SetInfoLatitude(data.latitude);
            SetInfoLongtitude(data.longtitude);
        },
        
       
        
      })

      useEffect(()=>{
        if (navigator.geolocation) {
    
            // GeoLocation을 이용해서 접속 위치를 얻어옵니다
            navigator.geolocation.getCurrentPosition(function(position) {
                
                var lat = position.coords.latitude; // 위도
                var lon = position.coords.longitude; // 경도
                SetMyLatitude(lat)
                SetMyLongtitude(lon)


                
                
                    
              });
            
        } else { 
               alert("현재 위치를 찾을 수 없습니다.")
        }

      },[])



    return(
        <Grid container id= "InfoContainer" >
            <Grid item xs={12} sm={12} id="Info1">
                <Grid container id="InfoButton">
                    <Grid xs={1} sm={1}></Grid>
                    <Grid xs={10} sm={10}><div className="buttonDiv"><button className="Button" onClick={()=>ShowMap()}>해당 지도로 바로가기</button></div></Grid>
                    <Grid xs={1} sm={1}></Grid>
                </Grid>
                
            </Grid>
            <Grid item xs={12} sm={12} id="InfoMain">
                
                
                
                <Grid container id="InfoMainContainer">
                    <Grid item xs={1} sm={1} id="InfoMain1"></Grid>
                    <Grid item xs={10} sm={10} id="InfoMainContent">
                        <Grid container id="InfoMainheader">
                            <Grid item xs={1} sm={1}></Grid>
                            <Grid item xs={10} sm={10}>
                                <div className="InfoMainHeaderContent">
                                    <p>{InfoAddressName}</p>
                                </div>
                            </Grid>
                            <Grid item xs={1} sm={1}></Grid>

                        </Grid>
                        <Grid container id="InfoMainContentContainer">
                            <Grid item xs={12} xm={12} id="InfoMainContents">
                                <Grid container id="Contents">
                                    <Grid item xs={6} sm={6 } id="Contentgrid"> <div className="Contentdiv"><p className="Contentp">온도 :  {InfoNowTemperature}</p></div></Grid>
                                    <Grid item xs={6} sm={6} id="Contentgrid"> <div className="Contentdiv2"><div className="Contentdiv3"><p  id="contentp1">막힌 횟수 : {InfoBlockCount}</p><p id="contentp2">마지막 : <br/>{InfoBlockDate}<br/>{InfoBlockTime}</p></div></div></Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} xm={12} id="InfoMainContents">
                                <Grid container id="Contents">
                                    <Grid item xs={6} sm={6} id="Contentgrid"><div className="Contentdiv"> <p>습도 : {InfoNowHumidity}</p></div></Grid>
                                    <Grid item xs={6} sm={6} id="Contentgrid"> <div className="Contentdiv2"><div className="Contentdiv3"><p id="contentp1">악취 빈도 : {InfoSmallCount}</p><p id="contentp2">마지막 : {InfoSmallDate}<br/>{InfoSmallTime} </p></div></div></Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} xm={12} id="InfoMainContents">
                                <Grid container id="Contents">
                                    <Grid item xs={6} sm={6} id="Contentgrid"> <div className="Contentdiv"><p>쓰레기 쌓임 :  {InfoBlockValue}</p></div></Grid>
                                    <Grid item xs={6} sm={6} id="Contentgrid"> <div className="Contentdiv2"><div className="Contentdiv3"> <p id="contentp1e">현재 우수관 상태 : </p><p id="contentp2">{InfoState}</p></div ></div></Grid>
                                </Grid>
                            </Grid>



                        </Grid>




                    </Grid>
                    <Grid item xs={1} sm={1} id="InfoMain3"></Grid>
                </Grid>
            </Grid>
           
        </Grid>
    )
}


export default InfoInfo;