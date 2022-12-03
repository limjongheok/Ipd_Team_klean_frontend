import React from "react";
import "../CSS/LoginPicture.css"
import kleanicon from "../IMG/k-leanicon.png"

function LoginPicture(){
    return(
        <div className="LoginPictureContainer">
            <div className="LoginPictureIcondiv">
                <img src={kleanicon} className="KleanIcon"/>

            </div>
            <div className="LoginPictureContent">
                <div className="LoginContent">
                    <h1 className="ContentHeader">Welcome</h1>
                    <h2 className="ContentHeader2">Byeot!</h2>
                    <p className="Contentp">상습적인 침수와 이에 따른 대책 강구 노력에도 불구하고 시간당 100mm가 넘게 쏟아지는 재해급<br/> 집중호우와 지형적 특이점, 현 우수관 관리 문제로 인한 참사가 발생한다. 이를 해결하기 위해 바이오티는<br/> 센서를 통한 우수관 감지 시스템으로 보다 더 정확한 데이터를 수집하여 실시간으로 관리자에게 정보를 <br/> 전달해 효율적인 관리가 가능하도록 한다.</p>

                </div>
            </div>
            <div className="LoginPicturefooter">
                <p className="footer">수자원공사 X K-lean</p>
            </div>
            

        </div>
    )
}

export default LoginPicture;