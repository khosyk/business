import React from 'react';
import '../Styles/App.css';

// Components
import Article from '../Components/Article';

// images
import Product1 from '../images/product1.jpg';
import Product2 from '../images/product2.jpg';
import Product3 from '../images/product3.jpg';
import Road from '../images/road.jpg';
import Service1 from '../images/service1.jpg'
import Service2 from '../images/service2.jpg'
import Service3 from '../images/service3.jpg'


// icons
import { HiSpeakerphone } from 'react-icons/hi';
import { BsGearWideConnected, BsArrowsFullscreen } from 'react-icons/bs';
import { FaUserFriends } from 'react-icons/fa';


export default function Main() {

    return (
        <>
            <Banner />
            <Intro01 />
            <Intro02 />
            <Intro03 />
            <Intro04 />
        </>
    )
}

const Banner = () => {
    return (

        <section id="banner" >
            <div className="inner">
                <div className='wrap'>
                <p>
                    CREATIVITY IS
                </p>
                <div className='title'>
                    <span>OUR</span>
                    <h1>VI<span>S</span>ION</h1>
                </div>
                <div className='nums'>
                    <ul>
                        <li>
                            01
                        </li>
                        <li>
                            02
                        </li>
                        <li>
                            03
                        </li>
                    </ul>
                </div>
                </div>
            </div>
            <div className='arrows'>
                <button className='arrowLeft'>←</button>
                <span>I</span>
                <button className='arrowRight'>→</button>
            </div>
        </section>

    );
}

 const Intro01 = () => {
    return (

        <section id='intro01'>
            <div className='background'/>
            <div className='word'>
                <div className='wrap'>
                <div className='number'>01
                <div className='numberCover'>
                ■
                </div>
                </div>
                <span>LOREM</span>
                <h2>IPSUM</h2>
                <p className='p1'>
                Lorem ipsum, dolor sit amet
                </p>
                <p className='p2'>
                adipisicing elit. Incidunt blanditiis fugiat similique cupiditate nobis fugit, veniam amet aut distinctio obcaecati?
                </p>
                </div>
            </div>
            <div className='wrapArticles'>
                <div className='wrapArticle'>
                    <article>
                        <img src={Product1} alt="product1" />
                    </article>
                    <article>
                        <img src={Product2} alt="product2" />
                    </article>
                    <article>
                        <img src={Product3} alt="product3" />
                    </article>
                    <div className='productLink'>
                        <span>
                            <b>Product</b>
                            <p>01</p>
                        </span>
                    </div>
                </div>
            </div>
        </section>

    );
}



 const Intro02 = () => {
    return (

        <section id="intro02">
            <div className='inner'>
                <div className='innerNumber'>
                    <BsArrowsFullscreen className='innerNumberBg' />
                    <div>02</div>
                </div>
                <h3>
                    OUR BUSINESS
                </h3>
                <ul>
                    <li>
                        <HiSpeakerphone className='icons' />
                        <h4>Lorem ipsum dolor</h4>
                        <p>lorem ipsum dolor bill make some rain please</p>
                        <b>
                            Read News
                        </b>
                    </li>
                    <li>
                        <BsGearWideConnected className='icons' />
                        <h4>Lorem ipsum dolor</h4>
                        <p>lorem ipsum dolor et doelr consectetur adipisicing </p>
                        <b>
                            Read News
                        </b>
                    </li>
                    <li>

                        <FaUserFriends className='icons' />
                        <h4>Lorem ipsum dolor</h4>
                        <p>sit amet consectetur adipisicing elit.Lorems is really awesome</p>
                        <b>
                            Read News
                        </b>
                    </li>

                </ul>
            </div>
        </section>

    )
}


 const Intro03 = () => {
    return (

        <section id='intro03'>
            <div className='inner'>
                <div className='differentLink'>
                    <span>
                        <b>Different</b>
                        <p>03</p>
                    </span>
                </div>
                <div className='introImg'>
                    <div className='redBar'></div>
                    <div className='introImgBox'>
                        <img src={Road} alt='road' />
                    </div>
                </div>
            </div>
            <Article
                name='word'
                num='03' first='LOREM' second='IPSUM' third='Lorem ipsum, dolor sit amet'
                fourth='adipisicing elit. Incidunt blanditiis fugiat similique cupiditate nobis fugit, veniam amet aut distinctio obcaecati?'
            />
        </section>

    )
}


 const Intro04 = () => {
    return (

        <section id='intro04'>
            <div className='inner'>
                <article>
                    <div className='imgWrap'>
                        <img src={Service1} alt='guide1' />
                    </div>
                    <div className='wordWrap'>
                        <h5>LOREM IPSUM</h5>
                        <p>
                            Lorem ipsum is dolor de picaso casabla
                        </p>

                        <span>
                            +
                        </span>
                    </div>
                </article>
                <article>
                    <div className='imgWrap'>
                        <img src={Service2} alt='guide1' />
                    </div>
                    <div className='wordWrap'>
                        <h5>LOREM IPSUM</h5>
                        <p>
                            Lorem ipsum is dolor de picaso casabla
                        </p>

                        <span>
                            +
                        </span>
                    </div>
                </article>
                <article>
                    <div className='imgWrap'>
                        <img src={Service3} alt='guide1' />
                    </div>
                    <div className='wordWrap'>
                        <h5>LOREM IPSUM</h5>
                        <p>
                            Lorem ipsum is dolor de picaso casabla
                        </p>
                        <span>
                            +
                        </span>
                    </div>
                </article>
            </div>
        </section>

    )
};