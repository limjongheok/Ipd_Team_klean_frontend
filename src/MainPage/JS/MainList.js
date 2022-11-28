import React from "react";
import "../CSS/MainList.css"
import {signout} from '../../Api/ApiService'




function MainList(){
    return (
        <div className="MainList">
            <button id="logoutbtn" onClick={signout}>로그아웃</button>

        </div>
    )
}

export  default MainList;