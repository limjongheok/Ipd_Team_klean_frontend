import React from "react";
import "../CSS/MainHeader.css";
import {signout} from '../../Api/ApiService'

function MainHeader(){

    return(
        <div className="MainHeader">
            header
            <button id="logoutbtn" onClick={signout}>로그아웃</button>

        </div>
    )
}

export default MainHeader;