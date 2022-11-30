import { Grid } from "@material-ui/core";
import InfoHeader from "./InfoHeader"
import InfoGraph from "./InfoGraph"
import InfoInfo from "./InfoInfo"
import "../CSS/InfoPage.css"
import { useParams } from 'react-router-dom';



function InfoPage(){

    const params = useParams();

    console.log(params.id)
    

    return(
        <div id = "InfoPage">
             
            <Grid container >
                <Grid item sm={12} id = "InfoHeader">
                    
                        <InfoHeader />
                
                    
                </Grid>
                <Grid item sm={7} id="InfoGraph" >
                    <InfoGraph/>
                </Grid>
                <Grid item sm={5} id= "InfoInfo">
                    <InfoInfo/>
                </Grid>

            </Grid>
            
            
        
        </div>
        
    )
}

export default InfoPage;