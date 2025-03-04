import { Grid } from "@material-ui/core";

import InfoGraph from "./InfoGraph"
import InfoInfo from "./InfoInfo"
import "../CSS/InfoPage.css"
import { useParams } from 'react-router-dom';
import Header from "../../MainPage/JS/MainHeader"



function InfoPage(){

    const params = useParams();

    console.log(params.id)
    

    return(
        <div id = "InfoPage">
             
            <Grid container id="container">
                <Grid item sx={12} sm={12}  id = "InfoHeader">    
                        <Header />
                     
                </Grid>
                <Grid item sx={12} sm={7} id="InfoGraph" >
                    <InfoGraph/>
                </Grid>
                <Grid item sx={12} sm={5} id= "InfoInfo">
                    <InfoInfo/>
                </Grid>

            </Grid>
            
            
        
        </div>
        
    )
}

export default InfoPage;