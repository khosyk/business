import React, { useEffect, useState } from 'react';
import Contact from '../Presenter/Contact';
import Marker from '../images/marker.png';

const {kakao} = window;

export default function ContactContainer() {
    
    var isMap = null;

    useEffect(() => {
        setmap();
    }, []);
    
    function panTo() {
        // 지점 1 
        var moveLatLon = new kakao.maps.LatLng(37.5295179756722, 126.9633661461209);
        isMap.panTo(moveLatLon);            
    }        

    function panToSecond() {
        // 지점 2
        var moveLatLon = new kakao.maps.LatLng(35.16189563210864, 129.0507647262227);
        
        isMap.panTo(moveLatLon);    
    }

    function setmap(){
        let container = document.getElementById("map");
    
        let options = {
          center: new kakao.maps.LatLng(37.5295179756722, 126.9633661461209),
          level: 5,
        };
        
        let map = new kakao.maps.Map(container, options);

        console.log("loading kakaomap");

        isMap = map;

        // 이미지 마커 추가

    }

    
    

    return(
        <Contact panTo={panTo} panToSecond={panToSecond}  />
    )
}

