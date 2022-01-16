import React, { useEffect, useState, useRef } from 'react';
import Article from '../Components/Article';
import {
    BsArrowsFullscreen,
} from 'react-icons/bs';
import Marker from '../images/marker.png';

export default function Contact() {
    const frame = useRef(null);
    const { kakao } = window;
    const container = useRef(null);
    const btnBranch = useRef(null);
    const [map, setMap] = useState(null);
    const [index, setIndex] = useState(0);
    const [toggle, setToggle] = useState(false);
    const info = [
        {
            title: "본점",
            latlng: new kakao.maps.LatLng(37.48771318663092, 126.75344867275281),
            imgSrc: Marker,
            imgSize: new kakao.maps.Size(80, 90),
            imgPos: { offset: new kakao.maps.Point(0, 0) }
        },
        {
            title: "지점1",
            latlng: new kakao.maps.LatLng(37.507099899564444, 126.75639338893572),
            imgSrc: Marker,
            imgSize: new kakao.maps.Size(80, 90),
            imgPos: { offset: new kakao.maps.Point(116, 99) }
        },
        {
            title: "지점2",
            latlng: new kakao.maps.LatLng(35.17422705914147, 129.10766665201712),
            imgSrc: Marker,
            imgSize: new kakao.maps.Size(80, 90),
            imgPos: { offset: new kakao.maps.Point(116, 99) }
        }
    ];

    const [mapInfo] = useState(info);

    useEffect(() => {
        frame.current.classList.add('on');
        const options = {
            center: mapInfo[index].latlng,
            level: 3
        }
        const map = new kakao.maps.Map(container.current, options);
        setMap(map);

        new kakao.maps.Marker({
            map,
            position: mapInfo[index].latlng,
            title: mapInfo[index].title,
            image: new kakao.maps.MarkerImage(mapInfo[index].imgSrc, mapInfo[index].imgSize, mapInfo[index].imgPos)
        });

        map.setCenter(mapInfo[index].latlng);

        const mapTypeControl = new kakao.maps.MapTypeControl();
        map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
        map.setZoomable(true);
        map.setDraggable(true);

        for (const btn of btnBranch.current.children) btn.classList.remove('on');
        btnBranch.current.children[index].classList.add('on');

        const mapSet = () => map.setCenter(mapInfo[index].latlng);
        window.addEventListener('resize', mapSet);

        return () => {
            window.removeEventListener('resize', mapSet);
            //컴포넌트가 사라질때마다 container안쪽의 기존 지도내용은 삭제
        }
    }, [index]);

    return (
        <>
            <ContactBanner />
            <Contact01 />
            <section id='contact02' >
                <div className='inner'>
                    <div className="wrap" ref={frame}>
                        <div className='innerNumber'>
                            <BsArrowsFullscreen         className='innerNumberBg' />
                            <div>02</div>
                        </div>
                        <h3>
                            OUR LOCATION
                        </h3>
                        <div id="map" ref={container}></div>
                        <div className="btnsBox">
                            {
                                toggle ?
                                    <button className='trafficBtn' onClick={() => {
                                        map.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
                                        setToggle(!toggle);
                                    }}>교통정보 끄기</button>
                                    :
                                    <button className='trafficBtn' onClick={() => {
                                        map.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
                                        setToggle(!toggle);
                                    }}>교통정보 보기</button>
                                }

                        <ul className="branchBtn" ref={btnBranch}>
                            {
                                mapInfo.map((data, index) => {
                                    return <li key={index} onClick={() => setIndex(index)}>{data.title}</li>
                                })
                            }
                        </ul>
                        </div>
                    </div>
                </div>
            </section>
            <Contact03 />
        </>
    )

    function ContactBanner() {

        return (
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