import React from "react";
import { Grid } from "@material-ui/core";
import "../CSS/MainGraph.css";
import MainGraphLabel from "./MainGraphLabel";
import MainGraphLineGraph from "./MainGraphLineGraph";
import MainGraphBarGraph from "./MainGraphBarGraph";





function MainGraph(){
  
    
    





    return (
        <div className="MainGraph">
          <Grid container id = "container">
                <Grid item xs={12} sm={12} id="MainGraphLabel">
                  <MainGraphLabel/>
                </Grid>
                <Grid item xs={12} sm={12} id="MainGraphLineGraph">
                  <MainGraphLineGraph/>               
                </Grid>
                <Grid item xs={12} sm={12} id="MainGraphBarGraph">
                  <MainGraphBarGraph/>
                </Grid>
            </Grid>

        </div>
    )
}

export default MainGraph;