import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "../CSS/InfoInfo.css"
import {sewerInfoGet} from "../../Api/ApiService";
import { useParams } from "react-router-dom";
import axios from "axios";
import {  useQuery } from '@tanstack/react-query'
import moon from "../IMG/달-07.png"
import temparather from "../IMG/온도.svg"
import humidity from "../IMG/물방울.svg"
import deepth from "../IMG/깊이.svg"
import smell from "../IMG/악취.svg"
import battery from "../IMG/베터리.svg"
import block from "../IMG/막힘.svg"




function InfoInfo(){

    const params = useParams();
    const[InfoAddressName, SetInfoAddressName] = useState();
    const[InfoBlockCount, SetInfoBlockCount] = useState();
    const[InfoBlockDate, SetInfoBlockDate] = useState();
    const[InfoBlockTime, SetInfoBlockTime] = useState();
    const[InfoBlockValue, SetBlockValue] = useState();
    const[InfoNowHumidity, SetInfoNowHumidity] = useState(0);
    const[InfoNowTemperature, SetInfoNowTemperature] = useState(0);
    const[InfoRegionname , SetInfoRegionname] = useState();
    const[InfoSmallCount, SetInfoSmallCount] = useState(0);
    const[InfoSmallDate, SetInfoSmallDate] = useState();
    const[InfoSmallTime, SetInfoSmalltime] = useState();
    const[InfoState, SetInfoState] = useState();
    const[InfoLatitude, SetInfoLatitude] = useState();
    const[InfoLongtitude, SetInfoLongtitude] = useState();
    const[MyLatitude, SetMyLatitude] = useState(0);
    const[MyLongtitude, SetMyLongtitude] = useState(0);
    const[InfoBatteryValue, SetInfoBatteryValue] = useState();
    const[InfoBatteryDate, SetInfoBatteryDate] = useState();
    const[InfoBatteryTime, SetInfoBatteryTime] = useState();
    


    function ShowMap(){
        window.open(`https://map.kakao.com/link/search/${InfoLatitude},${InfoLongtitude}`)

    }

    function ShowVideo(){
        window.open(`http://192.168.0.2:6148/cam/${params.id}`)

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
            const distancevalue = data.blockValue;

            SetBlockValue(distancevalue.toFixed(0));
            const humi = data.nowHumidity;
            SetInfoNowHumidity(humi.toFixed(1));
            const temper = data.nowTemperature;
            SetInfoNowTemperature(temper.toFixed(1));
            SetInfoRegionname(data.region_name);
            SetInfoSmallCount(data.smallCount);
            SetInfoSmallDate(data.smallDate);
            SetInfoSmalltime(data.smallTime);
            SetInfoState(data.state);
            SetInfoLatitude(data.latitude);
            SetInfoLongtitude(data.longtitude);
            const batterv = data.batteryValue;
            SetInfoBatteryValue(data.batteryValue);
            SetInfoBatteryDate(data.batteryDate);
            SetInfoBatteryTime(data.batteryTime);
        },
        
       
        
      })

      useEffect(() => {
        if (navigator.geolocation) {
          // GeoLocation을 이용해서 접속 위치를 얻어옵니다
          navigator.geolocation.getCurrentPosition(
            (position) => {
                SetMyLatitude(position.coords.latitude)
                SetMyLongtitude(position.coords.longitude)
                console.log(position.coords.latitude)
              
            }
          )
        } else {
          // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
          alert("위치를 찾을 수 없어요 ")
        }
        console.log(MyLatitude)
      }, )



    return(
        <Grid container id= "InfoContainer" spacing={0} justifyContent="center" 
        alignItems="center"  >
            <Grid item xs={12} sm={12} id="Info1">
                <Grid container id="InfoButton">
                    <Grid item xs={1} sm={1}></Grid>
                    <Grid item xs={10} sm={10}><div className="buttonDiv"><button className="Button" onClick={()=>ShowMap()}>해당 지도로 바로가기</button><button className="Button" onClick={()=>ShowVideo()}>해당 우수관 영상보기</button></div></Grid>
                    <Grid item xs={1} sm={1}></Grid>
                </Grid>
                
            </Grid>
            <Grid item xs={12} sm={12} id="InfoMain">               
                
                <Grid container id="InfoMainContainer">
                    <Grid item xs={1} sm={1} id="InfoMain1"></Grid>
                    <Grid item xs={12} sm={10} id="InfoMainContent">
                        <Grid container id="InfoMainheader">
                            <Grid item xs={1} sm={1}></Grid>
                            <Grid item xs={10} sm={10}>
                                <div className="InfoMainHeaderContent">
                                    {InfoAddressName}
                                </div>
                            </Grid>
                            <Grid item xs={1} sm={1}></Grid>

                        </Grid>
                        <Grid container id="InfoMainContentContainer">
                            <Grid item xs={12} xm={12} id="InfoMainContents">
                                <Grid container id="Contents">
                                    <Grid item xs={6} sm={6 } id="Contentgrid"> <div className="Contentdiv"><img src={temparather}id="img"/> <p >온도 :  {InfoNowTemperature} &nbsp;°C&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p></div></Grid>
                                    <Grid item xs={6} sm={6} id="Contentgrid"> <div className="Contentdiv2"><img src={block} id="img"/><div className="Contentdiv3"><p  id="contentp1">총 막힌 횟수 : {InfoBlockCount} 회</p><p id="contentp2"><br/><p className="time">측정시간: &nbsp; {InfoBlockDate}/{InfoBlockTime}</p></p></div></div></Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} xm={12} id="InfoMainContents">
                                <Grid container id="Contents">
                                    <Grid item xs={6} sm={6} id="Contentgrid"><div className="Contentdiv"><img src={humidity} id="img"/> <p>습도 : {InfoNowHumidity}&nbsp; %<span className="rh"> [RH]</span></p></div></Grid>
                                    <Grid item xs={6} sm={6} id="Contentgrid"> <div className="Contentdiv2"><img src={smell} id="img"/><div className="Contentdiv3"><p id="contentp1">&nbsp;   총 악취 빈도 : {InfoSmallCount} 회&nbsp;&nbsp;</p><p className="time">측정시간: {InfoSmallDate}<br/>{InfoSmallTime} </p></div></div></Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} xm={12} id="InfoMainContents">
                                <Grid container id="Contents">
                                    <Grid item xs={6} sm={6} id="Contentgrid"> <div className="Contentdiv"><img src={deepth} id="img"/><p> 쌓임 :  {InfoBlockValue}&nbsp; &nbsp; mm</p></div></Grid>
                                    <Grid item xs={6} sm={6} id="Contentgrid"> <div className="Contentdiv"><img src={battery} id="img"/><p id="contentp1">베터리: {InfoBatteryValue} %  &nbsp; &nbsp; &nbsp;<br className="br"></br> &nbsp;</p></div ></Grid>
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