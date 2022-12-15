import React, { useEffect, useState } from "react";
import "../Css/MainList.css"

import {useInfiniteScrollQery} from "./UseInfiniteScrollerQuery"
import { useInView } from "react-intersection-observer";
import { Card, useRadioGroup } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import {activeSewerSizeGet} from '../../Api/ApiService'




function MainList(){
    const { getBoard, getNextPage, getBoardIsSuccess, getNextPageIsPossible } = useInfiniteScrollQery();
    const [ref, isView] = useInView();
    const [ActiveSewerSize, SetActiveSewerSize] = useState(0);
    const[PrevActiveSewerSize, SetPrevActiveSewerSize] = useState(0);
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

   




   // console.log(getBoard)
    function showInfo(id){
        window.location.href = `/info/${id}`
    }
    // 처음 렌더링 
    useEffect(()=>{

        activeSewerSizeGet().then((res)=>{
            SetActiveSewerSize(res.data.activeSewerListSize);
            sessionStorage.setItem('prev',res.data.activeSewerListSize);
        })

    },[])


    useEffect(() => {
        // 맨 마지막 요소를 보고있고 더이상 페이지가 존재하면
        // 다음 페이지 데이터를 가져옴
        if (isView && getNextPageIsPossible) {
          getNextPage();
        }
        console.log(1)
      }, [isView, getBoard]);



      // 활성화 하수구 감지 
      useEffect(()=>{
        setTimeout(()=>{
            setCount2(count2 + 1);
           //console.log(count)
            //console.log("activeueseffect");
    
            },1000)
   
        const now  = sessionStorage.getItem('now')
        const prev = sessionStorage.getItem('prev')

        const intnow = parseInt(now)
        const intprev = parseInt(prev)
        

        console.log(prev)

      

        
        if
        (intnow < intprev){
            sessionStorage.setItem("prev",intnow)
            console.log("삭제")
            alert("활성화 하수구가 삭제 되었습니다.")
        }
        else if(intnow> intprev){
            sessionStorage.setItem("prev",intnow)
            console.log("추가")
            alert("활성화 하수구가 추가 되었습니다.")

        }
        if(count2 === 10000){
            setCount2(0)
          }

      },[count2])





      useEffect(()=>{
        setTimeout(()=>{
            setCount(count + 1);
           // console.log(count)
            //console.log("activeueseffect");
    
            },3000)
            

            activeSewerSizeGet().then((res)=>{
                SetActiveSewerSize(res.data.activeSewerListSize);
                sessionStorage.setItem('now',res.data.activeSewerListSize);
            })
            // 만약 이전 상태와 현재 상태가 같지 않다면
           
            if(count === 10000){
                setCount(0)
              }
           

      },[count])


     


   
    return (
        <div className="MainList">
            <Grid container>
                <Grid item xs={1} sm={1} id="">
                    

                </Grid>
                
                <Grid item xs={10} sm={10}>
                    <div className="MainListbuttonflex">
                     <button className="Main_listbutton">
                        활성화 우수관
                        </button>

                    </div>
                    
                </Grid>
                <Grid item xs={1} ></Grid>

            </Grid>
            <div className="MainDummySpace"></div>
            
            <div className="MainListwrapper">
                
                {
                    // 데이터를 불러오는데 성공하고 데이터가 0개가 아닐 때 렌더링
                    getBoardIsSuccess && getBoard.pages
                    ? getBoard.pages.map((page_data, page_num) => {
                         const board_page = page_data.board_page;
                         return board_page.map((item, idx) => {
                         if (
                             // 마지막 요소에 ref 달아주기
                             getBoard.pages.length - 1 === page_num &&
                             board_page.length - 1 === idx
                             ) {
                                 return (
                                          // 마지막 요소에 ref 넣기 위해 div로 감싸기
                                        <div ref={ref} key={item.id} id="cardDiv">
                                       
                                            <Card className="card">
                                                <button className="CardButton" onClick={() => showInfo(item.id)}>
                                                        {item.address_name}
                                                    </button> 
                                                </Card>
                                            <Grid container>
                                                <Grid item xs={1} sm={1} id="">
                    

                                                </Grid>
                
                                                <Grid item xs={10} sm={10}>
                                                    <div className="MainListbuttonflex">
                              
                                                     </div>
                    
                                                </Grid>
                                                <Grid item xs={1} ></Grid>

                                                </Grid>
                                 
                                        </div>
                                        );
                                } 
                            else {
                                    return (
                    
                                             <div key={item.id} id="cardDiv">
                                                <Card className="card"> 
                                                    <button className="CardButton" onClick={() => showInfo(item.id)}>
                                                        {item.address_name}
                                                    </button> 
                                                
                                                
                                                </Card>
                                            
                                              
                                             </div>
                                            );
                                    }
                            });
                        })
                    : null
                }
            </div>

        </div>
    )
}

export  default MainList;