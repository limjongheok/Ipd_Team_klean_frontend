import React from "react";
import {signout} from "../../Api/ApiService"
import MainGraph from "./MainGraph";


function MainPage(){
    return(
        <div>
            <h1>퍼센트 차트네염</h1>
            <MainGraph/>
            <button id="logoutbtn" onClick={signout}>로그아웃</button>
            
        </div>
        
    )
}

export default MainPage;