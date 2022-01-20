import React, { useEffect, useRef, useState } from 'react';

// component
import Article from "../Components/Article";

// icons
import { BsArrowsFullscreen } from 'react-icons/bs'


export default function Community() {
    return (
        <>
            <CommunityBanner />
            <Community01 />
            <Community02 />
            <Community03 />
        </>
    )
}


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
                num='01' first='CREATE' second='YOUR POST' third='Lorem ipsum, dolor sit amet'
                fourth='adipisicing elit. Incidunt blanditiis fugiat similique cupiditate nobis fugit, veniam amet aut distinctio obcaecati?'
            />
        </section>

    )
}


function Community02() {


    const frame = useRef(null);
    const input = useRef(null);
    const textarea = useRef(null);
    const updateInput = useRef(null);
    const updateTextarea = useRef(null);
    const showBox = useRef(null);


    const getLocalItems =()=>{
        let data = localStorage.getItem('posts');

        if(data){
            return JSON.parse(data);
        }else{
            return[];
        }
    }

    const [posts,setPosts] = useState(getLocalItems);
    
    const createPost = () => {
        if (!input.current.value || !textarea.current.value) {
            alert('제목과 본문을 입력하세요');
            return;
        }
        setPosts([
            {
                title: input.current.value,
                content: textarea.current.value
            }
            , ...posts
        ]);
        input.current.value = '';
        textarea.current.value = '';
    }

    const deletePost = index => {
        setPosts(
            posts.filter((_, postIndex) => postIndex !== index)
        )
    }

    const enableUpdate = index => {
        setPosts(
            posts.map((post, postIndex) => {
                if (postIndex === index) post.enableUpdate = true;
                return post;
            })
        )
    }

    const disableUpdate = index => {
        setPosts(
            posts.map((post, postIndex) => {
                if (postIndex === index) post.enableUpdate = false;
                return post;
            })
        )
    }

    const updatePost = index => {
        if (!updateInput.current.value || !updateTextarea.current.value) {
            alert('수정할 제목과 본문을 모두 입력하세요.');
            return;
        }
        setPosts(
            posts.map((post, postIndex) => {
                if (postIndex === index) {
                    post.title = updateInput.current.value;
                    post.content = updateTextarea.current.value;
                    post.enableUpdate = false;
                }
                return post;
            })
        )
    }

    useEffect(() => {
        localStorage.setItem('posts', JSON.stringify(posts))
        frame.current.classList.add('on');
    }, [posts]);

    return (
        <section ref={frame} id='community02'>
            <div className="inner">
                <div className="inputWrap">
                    <h3>여기서 게시글을 작성하세요.</h3>
                    <input
                        type="text"
                        placeholder='제목을 입력하세요'
                        ref={input}
                    />
                    <textarea
                        cols="30" rows="5"
                        placeholder='본문을 입력하세요'
                        ref={textarea}
                    >
                    </textarea>
                    <div className='btnWrap'>
                    <button onClick={() => {
                        input.current.value = '';
                        textarea.current.value = '';
                    }}>취소</button>
                    <button onClick={createPost}>생성</button>
                    </div>
                </div>

                <div className="postsWrap" ref={showBox}>
                    {
                        posts.map((post, index) => {
                            return (
                                <article key={index}>
                                    {
                                        post.enableUpdate
                                            ?
                                            // update
                                                <div className="postInput">
                                                    <input type="text" defaultValue={post.title} ref={updateInput} />
                                                    <textarea defaultValue={post.content} ref={updateTextarea}></textarea>
                                                    
                                                <ul className="btns">
                                                <li onClick={() => disableUpdate(index)}>취소</li>
                                                    <li onClick={() => updatePost(index)}>입력</li>
                                                    
                                                </ul>
                                                </div>
                                            :
                                            //read 
                                            <>
                                                <div className="postText">
                                                    <h3>{post.title}</h3>
                                                    <p>{post.content}</p>

                                                <ul className="btns">
                                                    <li onClick={() => deletePost(index)}>삭제</li>
                                                    <li onClick={() => enableUpdate(index)}>수정</li>
                                                </ul>
                                                
                                                </div>
                                            </>
                                    }
                                </article>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}






function Community03() {
    return (

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
