import React from 'react';

// component
import Article from '../Components/Article';

// icons
import {
    BsArrowsFullscreen,
    BsFillAlarmFill,
    BsFillBarChartFill,
    BsFillChatLeftDotsFill,
    BsFillDice6Fill,
    BsFillShareFill,
    BsFillSignpostSplitFill
} from 'react-icons/bs';
import {AiOutlineTwitter} from 'react-icons/ai';
import { SiYoutubemusic } from 'react-icons/si';
import { AiOutlineInstagram } from 'react-icons/ai';



export default function Members(props) {
    const {members} = props;
    return (
        <>
            <Banner />
            <Member01 members={members}/>
            <Member02/>
        </>
    )
}



const Banner = () => {
    return (
        <section id="memberBanner">
            <div className="inner">
                <div className='wrap'>
                    <p>
                        VISION IS
                    </p>
                    <div className='title'>
                        <span>OUR</span>
                        <h1>TE<span>A</span>M</h1>
                    </div>
                </div>
            </div>

            <div className='innerBottom'>
                <div className='bottomWrapTop'>
                    <h2>
                        Lorem
                    </h2>

                    <span>Ipsum dolor, sit amet consectetur adipisicing elit.
                    </span>
                </div>
                <div className='bottomWrapBottom'>
                    <span>
                        Lorem, ipsum dolor.
                    </span>
                    <ul>
                        <li>
                            <BsFillAlarmFill />
                            <p>
                                Lorem
                            </p>
                        </li>
                        <li>
                            <BsFillBarChartFill />
                            <p>
                                Ipsum
                            </p>
                        </li>
                        <li>
                            <BsFillChatLeftDotsFill />
                            <p>
                                Dorol
                            </p>
                        </li>
                        <li>
                            <BsFillDice6Fill />
                            <p>Consectetur
                            </p>
                        </li>
                        <li>
                            <BsFillSignpostSplitFill />
                            <p>
                                Adipisicing
                            </p>
                        </li>
                        <li>
                            <BsFillShareFill />
                            <p>
                                Elit
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

const Member01 = ({members}) => {
    const memeberData = members
    return (
        <section id="member01">
            <div className='inner'>
                <div className='innerNumber'>
                    <BsArrowsFullscreen className='innerNumberBg' />
                    <div>01</div>
                </div>
                <h3>
                    OUR TEAM
                </h3>
                <ul>
                    {
                        memeberData.map((memeberData,index) => <MemberList memeberData = {memeberData}
                        key={index}/>)
                    }
                </ul>
            </div>
        </section>
    )
}

const MemberList = ({memeberData}) => {
    const {name, title, src} = memeberData;
    return(
        
        <li>
        <div>
        <img src={src} alt={name}></img>
        <ul><li></li></ul>
        <ul>
            <li >
                <AiOutlineTwitter className="icons1"/>
            </li>
            <li >
                <SiYoutubemusic className="icons2"/> 
            </li>
            <li>
                <AiOutlineInstagram className="icons3"/> 
            </li>
        </ul>
        </div>
        <span> 
        {name}
        </span>
        <p>{title}</p>
    </li>
    )
}

const Member02 = () => {
    
    return (

        <section id='member02'>
            <Article
                name='word'
                num='02' first='LOREM' second='IPSUM' third='Lorem ipsum, dolor sit amet'
                fourth='adipisicing elit. Incidunt blanditiis fugiat similique cupiditate nobis fugit, veniam amet aut distinctio obcaecati?'
            />
            
        </section>

    )
}