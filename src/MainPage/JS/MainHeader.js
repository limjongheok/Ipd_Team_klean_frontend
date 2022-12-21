import React from "react";
import "../Css/MainHeader.css";
import {signout} from '../../Api/ApiService'
import { Grid } from "@material-ui/core";
import kleanicon from "../../LoginPage/IMG/logosymbol.svg"
import headericon from "../../LoginPage/IMG/돋보기-07.svg"
import hambergericon from "../../LoginPage/IMG/목차-08.svg"

function MainHeader(){
    function goMain(){
      window.location.href= "/main"
    }

    return(
        <div className="MainHeader">
            <Grid container id="MainHeaderGridContainer">
                <Grid item xs={2} sm={1} id= "MainHeaderGrid1">
                    <div className="MainHeaderGrid1div">
                        <button className="Gomainbutton" onClick={()=>goMain()}><img src={kleanicon} className="icon"></img></button>
                        <p className="iconp">ByeOT</p>
                     
                   

                    </div>
                   
                </Grid>
                <Grid item xs={3} sm={8} id= "MainHeaderGrid2"></Grid>
                <Grid item xs={7} sm={3} id= "MainHeaderGrid3">
                    <Grid container id="MainHeaderGG">
                        <Grid item xs={7} sm={6} id="MainHeaderGG1"><div className="MainHeaderGrid2div"><button onClick={signout} className="LogoutButton">로그아웃</button><a href="http://211.57.119.81:8080/download/csv"className="change">download<br></br>csv</a></div></Grid>
                        <Grid item xs={5} sm={6} id="MainHeaderGG2">
                            <Grid container id="MainHeaderGIcon">
                                <Grid item xs={6} sm={6} id="MainHeaderGI1"><div className="MainHeaderGridI"><img src={headericon} className="headerIcon"></img></div></Grid>
                                <Grid item xs={6} sm={6} id="MainHeaderGI2"><div className="MainHeaderGridI"><img src={hambergericon} className="headerIcon"></img></div></Grid>
                                
                            </Grid>
                        </Grid>
                    </Grid>
                    
                </Grid>
            </Grid>
            

        </div>
    )
}

export default MainHeader;