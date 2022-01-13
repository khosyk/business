import React from 'react';


// component
import Article from '../Components/Article';
import Loader from '../Components/Loader';

// icons
import {
    BsArrowsFullscreen,
} from 'react-icons/bs';
import {
    AiOutlineArrowRight
} from 'react-icons/ai'

// sources


export default function Youtube({ items, loader, isPop, setIsPop, setYoutubeData, youtubeData, lockScroll }) {
    return (
        <>
            <Banner />
            <Youtube01 />
            <Youtube02 />
        </>
    )

    

function Banner(){
    return (<>

        <section id="youtubeBanner">
            <div className="inner">
                <div className='wrap'>
                    <p>
                        ENTHUSIASM IS
                    </p>
                    <div className='title'>
                        <span>OUR</span>
                        <h1>WO<span>R</span>K</h1>
                    </div>
                </div>
            </div>
        </section>

    </>
    );
}


function Youtube01 () {

    return (

        <section id='youtube01'>
            <Article
                name='word'
                num='01' first='PORT' second='FOLIOS' third='Lorem ipsum, dolor sit amet'
                fourth='adipisicing elit. Incidunt blanditiis fugiat similique cupiditate nobis fugit, veniam amet aut distinctio obcaecati?'
            />

        </section>

    )
}


function Youtube02 (){


    return (
        <section id="youtube02">
            <div className='inner'>
                <div className='innerNumber'>
                    <BsArrowsFullscreen className='innerNumberBg' />
                    <div>02</div>
                </div>
                <h2>
                    OUR WORK
                </h2>
                {items === null ? <Loader /> : <div>
                    <ul className='youtubeLists'>
                        {items.map((items) =>
                            <li key={items.id} onClick={() => {
                                setIsPop(true);
                                setYoutubeData(items);
                                lockScroll();
                            }}>
                                <div className='youtubeThumbnail' >
                                    <img src={`${items.snippet.thumbnails.medium.url}`} alt="youtube"/>

                                </div>
                                <div className='youtubeText'>
                                    <h3>{`${items.snippet.title}`}</h3>

                                    <div> <span>PROJECT </span> 2021.{`${Math.floor(Math.random()*(12)+1)}.${Math.floor(Math.random()*(30)+1)}`
                                        
                                        }</div>
                                </div>
                                <span className='youtubeArrow'>
                                <AiOutlineArrowRight/>
                                </span>
                            </li>
                        )}
                    </ul>
                </div>}
            </div>
            {isPop ? <YoutubePopup/> : ''}
        </section>
    )
}


function YoutubePopup () {
    const { snippet: { title, resourceId: { videoId } } } = youtubeData;
    return (
        <aside id='popup'>
            <span className='btnClose' onClick={() => {
                document.body.classList.remove('noScroll');
                setIsPop()
            }}>close</span>
            <iframe src={`https://www.youtube.com/embed/${videoId}`} allowFullScreen frameBorder='0' title={title} ></iframe>
        </aside>
    )
}
}

