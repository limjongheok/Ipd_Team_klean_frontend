import {  useInfiniteQuery } from '@tanstack/react-query'
import axios from "axios";

export const useInfiniteScrollQery = () =>{
    const getPageBoard =async ({pageParam = 0}) => {
        const res = await axios.get(
            `http://211.57.119.81:8080/active/sewer/list?page=${pageParam}&size=7`
        )

        return{
            board_page : res.data.content, // 실제 데이터
            current_page : pageParam, // 반환 값에 현재 페이지 넘기기
            isLast: res.data.last,  // 페이지가 마지막인지 알려주는 서버에서 넘겨주는 true false 값
        };
        
    };

    const{
        data: getBoard,
        fetchNextPage: getNextPage,
        isSuccess: getBoardIsSuccess,
        hasNextPage : getNextPageIsPossible,
    } = useInfiniteQuery(["page_board_list"], getPageBoard,{
        getNextPageParam: (lastPage,pages)=>{
            //lastpage: 직전에 반환된 리턴값, pages 여태 받아온 전체 페이지 
            if(!lastPage.isLast)return lastPage.current_page+1;
            return undefined;
        },
    });
    return { getBoard, getNextPage, getBoardIsSuccess, getNextPageIsPossible };
}