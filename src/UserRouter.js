
import React from "react";
import {Route,Routes} from 'react-router-dom'
import LoginPage from "./LoginPage/JS/LoginPage";
import MainPage from "./MainPage/JS/MainPage";
function UserRouter(){

    const token = localStorage.getItem("ACCESS_TOKEN")
    console.log(token)

    return(
    <Routes>
       <Route path="/" element={token === null ? <LoginPage/> : <MainPage/>}/> 
       {/* 토큰이 null 이나니면 Mainpage route 토큰이 null 일시 LoginPage 로 route */}
       <Route path="/main" element={token === null  ? <LoginPage/> : <MainPage/> }/> 
        
    </Routes>
    );
}
export default UserRouter;