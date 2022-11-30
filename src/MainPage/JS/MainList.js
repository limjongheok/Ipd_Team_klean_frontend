import React, { useEffect, useState } from "react";
import "../CSS/MainList.css"

import {useInfiniteScrollQery} from "./UseInfiniteScrollerQuery"
import { useInView } from "react-intersection-observer";
import { Card } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import {activeSewerSizeGet} from '../../Api/ApiService'




function MainList(){
    const { getBoard, getNextPage, getBoardIsSuccess, getNextPageIsPossible } = useInfiniteScrollQery();
    const [ref, isView] = useInView();
    const [ActiveSewerSize, SetActiveSewerSize] = useState(0);
    const[PrevActiveSewerSize, SetPrevActiveSewerSize] = useState(0);
    const [count, setCount] = useState(0);
    console.log(getBoard)
    function showInfo(id){
        window.location.href = `/info/${id}`
    }
    // 처음 렌더링 


    useEffect(() => {
        // 맨 마지막 요소를 보고있고 더이상 페이지가 존재하면
        // 다음 페이지 데이터를 가져옴
        if (isView && getNextPageIsPossible) {
          getNextPage();
        }
        console.log(1)
      }, [isView, getBoard]);

     

      useEffect(()=>{
        setTimeout(()=>{
            setCount(count + 1);
            console.log(count)
            console.log("blockueseffect");
    
            },5000)
            

            activeSewerSizeGet().then((res)=>{
                SetActiveSewerSize(res.data.activeSewerListSize);
            })
            // 만약 이전 상태와 현재 상태가 같지 않다면
            if(PrevActiveSewerSize !== ActiveSewerSize){

                if(PrevActiveSewerSize <ActiveSewerSize){
                    if(PrevActiveSewerSize === 0){
                        //alert("활성된 상태의 하수구가 있습니다.")
                        if(ActiveSewerSize === 1){
                            alert("활성된 상태의 하수구가 추가되었습니다.")
                            SetPrevActiveSewerSize(ActiveSewerSize);
                        }else{
                            SetPrevActiveSewerSize(ActiveSewerSize);
                        }
                    }else{
                        alert("활성된 상태의 하수구가 추가되었습니다.")
                        SetPrevActiveSewerSize(ActiveSewerSize);

                    }
                    
                }
                else{
                    SetPrevActiveSewerSize(ActiveSewerSize);
                }                
            }
            if(count === 10000){
                setCount(0)
              }
              console.log(PrevActiveSewerSize)
              console.log(ActiveSewerSize)

      },[count])


   
    return (
        <div className="MainList">
            <Grid container>
                <Grid item xs={1} sm={1} id="">
                    

                </Grid>
                
                <Grid item xs={10} sm={10}>
                    <div className="MainListbuttonflex">
                     <button className="Main_listbutton">
                        내 근처 우수관
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