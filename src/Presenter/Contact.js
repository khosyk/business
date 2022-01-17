import React from 'react';
import Article from '../Components/Article';
import { Map } from '../Components/Map';

export default function Contact() {
    return (
        <>
            <ContactBanner />
            <Contact01 />
            <Contact02 />
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

    function Contact02(){

        return(
            <>
            <Map/>
            </>
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