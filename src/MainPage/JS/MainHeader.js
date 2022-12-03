import React from "react";
import "../CSS/MainHeader.css";
import {signout} from '../../Api/ApiService'
import { Grid } from "@material-ui/core";
import kleanicon from "../../LoginPage/IMG/MainHeaderMainIcon.png"
import headericon from "../../LoginPage/IMG/HEADERICON.png"
import hambergericon from "../../LoginPage/IMG/hambergericon.png"
function MainHeader(){
    function goMain(){
      window.location.href= "/main"
    }

    return(
        <div className="MainHeader">
            <Grid container id="MainHeaderGridContainer">
                <Grid item xs={1} sm={1} id= "MainHeaderGrid1">
                    <div className="MainHeaderGrid1div">
                        <button className="Gomainbutton" onClick={()=>goMain()}><img src={kleanicon} className="icon"></img></button>
                     
                   

                    </div>
                   
                </Grid>
                <Grid item xs={9} sm={9} id= "MainHeaderGrid2"></Grid>
                <Grid item xs={2} sm={2} id= "MainHeaderGrid3">
                    <Grid container id="MainHeaderGG">
                        <Grid item xs={6} sm={6} id="MainHeaderGG1"><div className="MainHeaderGrid2div"><button onClick={signout} className="LogoutButton">로그아웃</button><p>언어변경</p></div></Grid>
                        <Grid item xs={6} sm={6} id="MainHeaderGG2">
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