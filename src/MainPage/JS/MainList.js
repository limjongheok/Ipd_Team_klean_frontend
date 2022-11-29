import React, { useEffect } from "react";
import "../CSS/MainList.css"

import {useInfiniteScrollQery} from "./UseInfiniteScrollerQuery"
import { useInView } from "react-intersection-observer";
import { Card } from "@material-ui/core";
import { Grid } from "@material-ui/core";





function MainList(){
    const { getBoard, getNextPage, getBoardIsSuccess, getNextPageIsPossible } = useInfiniteScrollQery();
    const [ref, isView] = useInView();
    console.log(getBoard)
    function showInfo(id){
        window.location.href = `/info/${id}`
    }
    
    useEffect(() => {
        // 맨 마지막 요소를 보고있고 더이상 페이지가 존재하면
        // 다음 페이지 데이터를 가져옴
        if (isView && getNextPageIsPossible) {
          getNextPage();
        }
        console.log(1)
      }, [isView, getBoard]);


   
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