import { Grid } from "@material-ui/core";
import React from "react";
import LoginFunction from "./LoginFunction";
import LoginPicture from "./LoginPicture";
import "../CSS/LoginPage.css"


function LoginPage(){
    return(
        <div>
            <Grid container>
                <Grid item xs={6} id="loginPicture">
                    <LoginPicture/>

                </Grid>
                <Grid item xs={6}>
                    <LoginFunction id="loginFunction"/>

                </Grid>

            </Grid>
            
           
             
            

        </div>
       
    )
}

export default LoginPage;