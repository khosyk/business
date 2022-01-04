import React from 'react';
import Article from './Article';
import '../Styles/App.css';

// icons

import {AiFillTwitterCircle} from 'react-icons/ai';
import { SiYoutubemusic } from 'react-icons/si';
import { RiInstagramFill } from 'react-icons/ri';


export default function Footer() {
    const toTop = () =>{
        document.documentElement.scrollTop = 0;
    }
    return (
        <footer>
            <div className='footerLeft'>
                <div className='BgImg'>
                </div>
                <div className='wrap'>
                    <span>NEWS</span>
                    <b>& NOTICE</b>
                    <p className='p1'>
                        Lorem ipsum, dolor sit amet
                    </p>
                    <p className='p2'>
                        adipisicing elit. Incidunt blanditiis fugiat similique
                    </p>
                </div>
                <div className='arrows'>
                    <span className='arrow'>←</span>
                    <span>I</span>
                    <span className='arrow'>→</span>
                </div>
            </div>
            
            <Article
                name='footerRight'
                first='CONTACT INFO'
                third='● 1234 - 5678'
                fourth='adipisicing elit. Incidunt blanditiis fugiat similique cupiditate nobis fugit, veniam amet aut distinctioobcaecati sweet desert is always right and we suppose to eat something healthy.'
            />

            <div className='footerRightLinks'>
                <ul>
                    <li>
                        <AiFillTwitterCircle className='first'/>
                    </li>
                    <li>
                        <SiYoutubemusic className='second'/>
                    </li>
                    <li>
                        <RiInstagramFill className='third'/>
                    </li>
                </ul>
            </div>

            <div className='footerBottom'>
                <div className='inner'>
                    <div className='left'>
                        <span>
                        @ 2021 DECODELAB HEEUN LEE &copy; ALL RIGHTS RESERVED.
                        </span>
                    </div>
                    <div className='right'>
                        <button onClick={() => toTop()}>
                        To the top
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    )
};