import React,{useEffect, useRef} from 'react';
import Article from '../Components/Article';
import { Map } from '../Components/Map';
import emailjs from '@emailjs/browser';

// service_mccg4an
// template_5skrw04

export default function Contact() {
    const serviceId = 'service_mccg4an';
    const templateId ='template_5skrw04';
    const userId = 'user_X3WvHBNDXbyaJrxoVv13k'
    const sendMail = useRef(null);
    
    function handleSubmit (e){
        e.preventDefault();      
        emailjs.sendForm(serviceId, templateId, sendMail.current,userId).then((result) =>{
            console.log(result.text);
        }, (err) =>{
            console.log(err.text);
        })
    }

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
                        <h3>
                            SEND A MESSAGE
                        </h3>
                        <form ref={sendMail}
                        onSubmit={handleSubmit}>
                            <div className="inputWrap">
                                <label>
                                    NAME
                                </label>
                                <input placeholder='Name here'
                                    name='name'
                                    ></input>
                                <label>
                                    EMAIL
                                    </label>
                                    <input placeholder='Email here'
                                    name='email'
                                    ></input>
                            </div>
                            <div className="inputWrap">
                                <label>
                                    COMPANY
                                    </label>
                                    <input placeholder='Company here'
                                    name='company'
                                    ></input>
                                <label>
                                    PHONE NUMBER
                                    </label>
                                    <input placeholder='Phone number here'
                                    name='phone'
                                    ></input>
                            </div>
                            <label className='message'>
                                MESSAGE
                                </label>
                                <textarea placeholder='Message here'
                                name='message'
                                ></textarea>
                            <div className="buttonWrap">
                                <button type='submit'>
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