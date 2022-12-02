import { Button, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import InfoGraphBlock from "./InfoGraphBlock";
import InfoGraphSmall from "./InfoGraphSmall";
import "../CSS/InfoGraph.css";
import InfoGraphLabel from "./InfoGraphLabel";


function InfoGraph(){
     const[state, setState] = useState(0);
     
     function BlockButton(){
        
        setState(0)
     }
     function SmallButton(){
      setState(1)
   }
     
     
     useEffect(()=>{
      console.log(state)
     })

    return(
        
      <Grid container id = "container" >
      <Grid item  xs={12} sm={12} id="InfoGraphLabel">
        <InfoGraphLabel/>
      </Grid>
      <Grid item  xs={12} sm={12} id="InfoGraphGraph">
        <Grid container id="InfoMainGraph">
          <Grid item xs ={1} sm={1} ></Grid>
          <Grid item xs ={10} sm={10} >{state === 0 ? <InfoGraphBlock/> : <InfoGraphSmall/>} </Grid>
          <Grid  item xs ={1} sm={1} ></Grid>
        </Grid>
      </Grid>
      <Grid item  xs={12} sm={12} id="InfoGraphChangButton">
        <div className="buttondiv">
          <button className={state === 0 ? "activeOpacity" : "disableOpacity"} id="infoButton" onClick={()=>BlockButton()}>막힌 횟수</button>
          <button className={state === 1 ? "activeOpacity" : "disableOpacity"} id="infoButton" onClick={()=>SmallButton()}>악취</button>
        </div>
        
      </Grid>
    </Grid>

       
    )
}


export default InfoGraph;