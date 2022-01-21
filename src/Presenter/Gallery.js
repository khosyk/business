import React from 'react';
import Article from '../Components/Article';
import Loader from '../Components/Loader';

// icons
import { AiOutlineSearch } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { saveInput, setIsPop } from '../modules/GallerySlice';


const body = document.querySelector("body");

function Gallery({ setIndex, index, showPop, handleValue, }) {


    return (
        <>
            <GalleryBanner />
            <Gallery01 />
            <Gallery02
                setIndex={setIndex}
                index={index}
                showPop={showPop}
                handleValue={handleValue}
            />
        </>
    )

    function GalleryBanner() {
        return (
            <section id="galleryBanner">
                <div className="inner">
                    <div className='wrap'>
                        <p>
                            UNIQUENESS IS
                        </p>
                        <div className='title'>
                            <span>OUR</span>
                            <h1>PA<span>T</span>H</h1>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    function Gallery01() {

        return (

            <section id='gallery01'>
                <Article
                    name='word'
                    num='01' first='VIEW' second='PROJECTS' third='Lorem ipsum, dolor sit amet'
                    fourth='adipisicing elit. Incidunt blanditiis fugiat similique cupiditate nobis fugit, veniam amet aut distinctio obcaecati?'
                />
            </section>

        )
    }

}

// gallery 02 를 통해 전달되는 값들을 redux state 에서 관리하기
// 해당 state들은 pop에게도 전달되어야한다.

function Gallery02({ setIndex, index, showPop, handleValue }) {

    const input = useSelector((state) => state.gallery.input);
    const data = useSelector((state) => state.gallery.data);
    const isPop = useSelector((state) => state.gallery.isPop);
    const dispatch = useDispatch();

    return (
        <section id="gallery02">
            <div className="inner">
                <main>
                    <div className='searchWrap'>
                        <input
                            type='text'
                            onChange={e => {
                                dispatch(saveInput(e.target.value));
                            }} 
                            value={input}
                            placeholder='search here'
                        />

                        <button onClick={() => { handleValue() }} ><AiOutlineSearch /></button>
                    </div>
                    {data.length <= 0 ? <Loader /> : <div className='wrap'>
                        {data.map((data, index) => {
                            const { server, id, secret, title, farm, owner } = data;
                            const imgSrc = `https://live.staticflickr.com/${server}/${id}_${secret}_m.jpg`;
                            const ownerImgSrc = `http://farm${farm}.staticflickr.com/${server}/buddyicons/${owner}.jpg`;
                            return (
                                <article key={index} onClick={() => {
                                    dispatch(setIsPop(true))
                                    //버튼 클릭시 index state변경
                                    setIndex(index);
                                    showPop(index);
                                }}>
                                    <div className="inner">
                                        <span>
                                            {id.substring(7, 11)}.
                                        </span>
                                        <div className="pic" >
                                            <img src={imgSrc} alt={`${title}`} />
                                        </div>
                                        <h2>{title === '' ? 'NULL' : title}</h2>
                                        <div className='picBottom'>
                                            <div>
                                                <img src={ownerImgSrc} alt={title}></img>
                                                <strong>{owner}</strong>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            )
                        })
                        }
                    </div>}
                </main>
                {isPop ? <Pop index={index} /> : null}
            </div>
        </section>)

    function Pop({ index }) {

        const imgSrc = useSelector((state => state.gallery.imgSrc));

        return (
            <aside className="pop">
                {/* 해당 이미지 url적용 */}
                <img src={imgSrc} alt={data[index].title} />
                {/* items의 index번째 객체 안에 있는 텍스트 */}
                <p>{data[index].title}</p>
                <span onClick={() => {
                    dispatch(setIsPop(false));
                    body.style.overflow = "auto";
                }}>Close</span>
            </aside>
        )
    }

}
export default Gallery;
