import { API_BASE_URL } from "./app-config";
import axios from "axios";

const ACCESS_TOKEN = "ACCESS_TOKEN";

export const call = (api, method, request) => {

    //헤더 생성 applicatino/json  으로 헤더 생성
  let headers = new Headers({
    "Content-Type": "application/json",
  });

  // 로컬 스토리지에서 ACCESS TOKEN 가져오기
  const accessToken = localStorage.getItem("ACCESS_TOKEN");


  if (accessToken && accessToken !== "") {
    headers.append("Authorization", accessToken);
    console.log(accessToken)

    // axios 전역 변수 생성
    axios.defaults.headers.common['Authorization'] = "Bearer  " + accessToken;
  }


  let options = {
    //http://211.57.119.81:8080 base  url 
    url: API_BASE_URL + api,
    method: method,
  };

  if (request) {
    // GET method
    options.data = request;
  }
  return axios(options.url, options)
    .then((response) =>
     {
      console.log(response)
      if(response.status === 200){ // 200 이면 응답 
       
        return response
      }
      }).catch((error)=>{
        console.log(error.response)
        console.log(error.response.status)
        let errorresponse = error.response.status;
        
        if(errorresponse === 403){ // 계정이 존재하지 않을시 
            localStorage.removeItem(ACCESS_TOKEN);

            window.location.href = "/"
          
        }
        else if(errorresponse === 401){
            localStorage.removeItem(ACCESS_TOKEN);
          window.location.href = "/";
        }else if(errorresponse === 500){
          console.log(1)
          localStorage.removeItem(ACCESS_TOKEN);
          window.location.href = "/";
        }

      })
  
}



// 로그인 api 
export const signin = (userDTO) => {
  return axios.post("http://211.57.119.81:8080/login", userDTO).then((response) => {
    let jwt = response.headers.authorization;
    console.log(jwt)
    if(jwt !== null){
      localStorage.setItem(ACCESS_TOKEN, jwt);
      window.location.href = "/main";  // 로그인 성공시 main 으로 보내기 
    }
  }).catch(function(err){
    if(err.status !== 200){
        alert("해당 계정이 없습니다.")
      window.location.href = "/";
    }
  })
}


export const postdumy = (dumytDto,d2) =>{
  return axios.post("http://211.57.119.81:8080/change/temperature", dumytDto).then((resposne)=>{
    console.log(resposne.status)
   
    
  })
}

export const d2 = (d2, dum) =>{
  return axios.post("http://211.57.119.81:8080/change/block", d2).then((response)=>{
    console.log(response.status)
    
  })
}



export const signout = () => {
  localStorage.removeItem(ACCESS_TOKEN);
  window.location.href = "/";
}
export const barGraphGet = () =>{
  return call("/block/11/sewer","")
} 

export const lineGraphGet = () => {
  return call("/small/11/sewer","")
}



