import React from "react";
import {signout} from "../Api/ApiService"


function MainPage(){
    return(
        <div>
            hello
            <button id="logoutbtn" onClick={signout}>로그아웃</button>
            
        </div>
        
    )
}

export default MainPage;