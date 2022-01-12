import React from 'react';
import Article from '../Components/Article';
import {
    BsArrowsFullscreen,
} from 'react-icons/bs';

export default function Contact({ panTo, panToSecond }) {

    return (
        <>
            <Contact01 />
            <Contact02 />
            <Contact03 />
        </>
    )

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
                        <div id="map"></div>
                        <div className='buttons'>
                            <button onClick={() => {
                                panTo();
                            }}>IN SEOUL</button>
                            <button onClick={() => {
                                panToSecond();
                            }}> IN BUSAN
                            </button>
                        </div>
                    </div>
                </div>
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