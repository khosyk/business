import axios from "axios";
import { useEffect, useState } from "react";

// component
import Article from "../Components/Article";

// icons
import {BsArrowsFullscreen} from 'react-icons/bs'


export default function Community() {
    let [posts, setPosts] = useState([]);
    const path = process.env.PUBLIC_URL;
    const url = `${path}/db/community.json`;

    useEffect(() => {
        axios
            .get(url)
            .then(json => {
                console.log(json.data.data);
                setPosts(json.data.data);
            })
    }, []);

    return (
        <>
            <CommunityBanner />
            <Community01 />
            <Community02 />
            <Community03 />
        </>
    )



    function CommunityBanner() {
        return (
            <section id="communityBanner">
                <div className="inner">
                    <div className='wrap'>
                        <p>
                            FOOTPRINT IS
                        </p>
                        <div className='title'>
                            <span>OUR</span>
                            <h1>NE<span>W</span>S</h1>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    function Community01() {
        return (

            <section id='community01'>
                <Article
                    name='word'
                    num='01' first='EXPRESS' second='YOURSELF' third='Lorem ipsum, dolor sit amet'
                    fourth='adipisicing elit. Incidunt blanditiis fugiat similique cupiditate nobis fugit, veniam amet aut distinctio obcaecati?'
                />
            </section>

        )
    }

    function Community02() {
        return (
            <section id='community02'>
                <main className='inner'>
                    <div className='left'>
                        <h2>Lorem, ipsum dolor.
                        </h2>
                        {
                            posts.map((data, index) => {
                                return (
                                    <article key={index}>
                                        <h3>{data.title}</h3>
                                        <span>{data.write}</span>
                                        <time>{data.date}</time>
                                    </article>
                                )
                            })
                        }
                    </div>
                    <div className='right'>
                        <span>
                            Lorem ipsum dolor sit.
                        </span>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente totam, accusamus fugit ducimus consequatur accusantium sit pariatur sed. Impedit, quos?
                        </p>
                    </div>
                </main>
            </section>
        );
    }

    function Community03(){
        return(
            
        <section id="community03">
        <div className='inner'>
            <div className='innerNumber'>
                <BsArrowsFullscreen className='innerNumberBg' />
                <div>03</div>
            </div>
            <h3>
                FREQUNETLY ASKED QUESTIONS
            </h3>
            <ul>
                <li>
                    <strong>
                        Lorem ipsum dolor sit
                    </strong>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, fugiat!
                    </p>
                </li>
                
                <li>
                    <strong>
                        Lorem ipsum dolor sit
                    </strong>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, fugiat!
                    </p>
                </li>
                
                <li>
                    <strong>
                        Lorem ipsum dolor sit
                    </strong>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, fugiat!
                    </p>
                </li>
                
                <li>
                    <strong>
                        Lorem ipsum dolor sit 
                    </strong>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, fugiat!
                    </p>
                </li>
            </ul>
        </div>
    </section>
        )
    }

}