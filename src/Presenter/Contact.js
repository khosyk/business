import React, { useEffect, useState, useRef } from 'react';
import Article from '../Components/Article';
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

    console.log(map);    
    return (
        <>
            <ContactBanner/>
            <Contact01 />
            
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
            <Contact03 />
        </>
    )
    
    function ContactBanner() {

        return(
            <section id="contactBanner">
                <div className="inner">
                    <div className='wrap'>
                        <p>
                            UP TO
                        </p>
                        <div className='title'>
                            <span>YOUR</span>
                            <h1>CH<span>O</span>ICE</h1>
                        </div>
                    </div>
                </div>
            </section>
        )

    }

    function Contact01() {

        return (

            <section id='contact01'>
                <Article
                    name='word'
                    num='01' first='GET IN' second='TOUCH' third='Lorem ipsum, dolor sit amet'
                    fourth='adipisicing elit. Incidunt blanditiis fugiat similique cupiditate nobis fugit, veniam amet aut distinctio obcaecati?'
                />
            </section>

        )
    }

    function Contact02() {

        return ;
    }

    function Contact03() {

        return (
            <section id='contact03'>
                <div className='inner'>
                    <div className="wrap">
                        <h4>
                            SEND A MESSAGE
                        </h4>
                        <form>
                        <div className="inputWrap">
                        <label>
                        <input placeholder='NAME'></input>
                        </label>
                        <label>
                        <input placeholder='EMAIL'></input>
                        </label>
                        </div>
                        
                        <div className="inputWrap">
                        <label>
                        <input placeholder='PASSWORD'></input>
                        </label>
                        <label>
                        <input placeholder='PHONE NUMBER'></input>
                        </label>
                        </div>
                        <label className='query'>
                        <textarea placeholder='MESSAGE'></textarea>
                        </label>
                        <div className="buttonWrap">
                            
                        <button>
                            SEND
                        </button>
                        </div>
                        </form>
                    </div>
                </div>
            </section>
        )
    }
}