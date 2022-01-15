import React, { useEffect, useState, useRef } from 'react';
import {
    BsArrowsFullscreen,
} from 'react-icons/bs';

export default function Contact() {
    
    const {kakao} = window;
    const container = useRef(null)
    const [map, setMap] = useState(null);
    useEffect(() => {
        
        let options = {
            center: new kakao.maps.LatLng(37.5295179756722, 126.9633661461209),
            level: 5,
          };
          
          let map = new kakao.maps.Map(container.current, options);
  
          setMap(map);
    }, []);
    
    return (
        <>
            <Contact02 />
        </>
    )
    

    function Contact02() {

        return (
            <section id='contact02'>
                <div className='inner'>
                    <div className="wrap">
                        <div className='innerNumber'>
                            <BsArrowsFullscreen className='innerNumberBg' />
                            <div>02</div>
                        </div>
                        <h3>
                            OUR LOCATION
                        </h3>
                        <div id="map" ref={container}></div>
                        <div className='buttons'>
                            <button onClick={() => {
                            }}>IN SEOUL</button>
                            <button onClick={() => {
                            }}> IN BUSAN
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

}