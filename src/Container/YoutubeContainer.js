import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Youtube from '../Presenter/Youtube';



export default function YoutubeContainer() {
    // Loader는 로딩의 스테이트
    // items는 유튜브 리스트 데이터를 로드하기위한 스테이트
    // youtubePopup은 popup 창 state
    // youtubeData는 popup 창을 로드하기위한 state
    const [loader, setLoader] =useState(true);
    const [items, setItems] = useState(null)
    const [isPop, setIsPop] = useState(false);
    const [youtubeData, setYoutubeData] =useState(null);
    const body = document.body;
    
    useEffect(() =>{
        GetYoutube()
    },[])
    
    return(
        <Youtube 
        items={items} 
        loader={loader} 
        isPop={isPop} 
        setIsPop={setIsPop} 
        youtubeData={youtubeData} 
        setYoutubeData={setYoutubeData}
        lockScroll={lockScroll}/>
    )
    
async function GetYoutube(){
    const playListId = 'PLaSDflnRoEc328ekRsg_PzCFn7FWtAVYG'
    const num = 4;
    const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=AIzaSyAHktbABRsBIOdePuAZVbwNE1spHHuJ3_Y&playlistId=${playListId}&maxResults=${num}`;

    try{
        const {data:{items}} = await axios.get(url);
        setItems(items);
        if(items.length > 0 ){
            setLoader(false);
        }
    }catch(err){
        alert(`Youtube error: ${err}`)
    }
};
    function lockScroll(){
        body.classList.toggle('noScroll')
    }
    
}