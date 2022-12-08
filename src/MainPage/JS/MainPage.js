
import { Grid } from "@material-ui/core";
import MainGraph from "./MainGraph";
import MainList from "./MainList";
import MainHeader from "./MainHeader"
import "../Css/MainPage.css"




function MainPage(){
    

    return(
        <div id = "MainPage">
             
            <Grid container id="container" >
                <Grid item sm={12} id = "MainHeader">
                    
                        <MainHeader />
                
                    
                </Grid>
                <Grid item sm={7} id="MainGraph" >
                    <MainGraph/>
                </Grid>
                <Grid item sm={5} id= "MainList">
                    <MainList/>
                </Grid>

            </Grid>
            
            
        
        </div>
        
    )
}

export default MainPage;