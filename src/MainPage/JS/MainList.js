import React, { useEffect } from "react";
import "../CSS/MainList.css"

import {useInfiniteScrollQery} from "./UseInfiniteScrollerQuery"
import { useInView } from "react-intersection-observer";
import { Card } from "@material-ui/core";






function MainList(){
    const { getBoard, getNextPage, getBoardIsSuccess, getNextPageIsPossible } = useInfiniteScrollQery();
    const [ref, isView] = useInView();
    console.log(getBoard)
    useEffect(()=>{

    },)

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
            
            <div className="home-wrapper">
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
                    <div ref={ref} key={item.id}>
                        <div>{item.id}</div>
                        <div> 마지막</div>
                      <div>{item.address_name}</div>
                    </div>
                  );
                } else {
                  return (
                    
                    <div key={item.id}>
                        <div>{item.id}</div>
                        {item.address_name}
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