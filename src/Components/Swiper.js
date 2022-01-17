import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import SwiperCore, { Navigation,Pagination,Autoplay} from 'swiper';


import Background1 from '../images/banner.jpg';
import Background2 from '../images/youtubeBanner.jpg';
import Background3 from '../images/galleryBanner.png';

export const SwiperComponent = () => {
  
  SwiperCore.use([Navigation,Pagination,Autoplay]);
  const [swiper, setSwiper] = useState(null);
  const [swiperIndex, setSwiperIndex] = useState(null);
  
  const bannerBackground = useRef(null);    
  const bgSrc = [Background1,Background2,Background3];
  const [bg,setBg] = useState(bgSrc[0]);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const paginationNums = useRef(null);
  const menu = ['1','2','3']
  const swiperParams = {
      slidesPerView: 1,
      spaceBetween: 100,
      navigation: {prevEl: navigationPrevRef.current, nextEl: navigationNextRef.current},
      autoplay:{delay:2000},
      pagination:{
          el:paginationNums.current,
          clickable:true,
          renderBullet: function (index, className) {
              return '<span class="' + className + '">' + (menu[index]) + '</span>';
            },
      },
      onBeforeInit: (swiper) =>{
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.activeIndex = swiperIndex;
          swiper.navigation.update();
      },
      onSwiper: setSwiper,
      onSlideChange: (e) => {setSwiperIndex(e.activeIndex);
          setTimeout(() => {
              setBg(bgSrc[e.activeIndex]);
          }, 100);
      }
      
  }
  return(
    
    <section id="banner" ref={bannerBackground} style={{backgroundImage: `url(${bg})`}} >
    <div className="inner" >
        <div className='wrap'>
            <Swiper {...swiperParams} className="swiperStyle" ref={swiper}>
                <SwiperSlide className='swipers'>
                    <div className='title'>
                        <p>
                            CREATIVITY IS
                        </p>
                        <span className='titleTop'>OUR</span>
                        <h1>VI<span>S</span>ION</h1>
                        <p className='titleBottom'>
                        WHAT WE DO
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='swipers'>
                    <div className='title'>
                        <p>
                            PEERLESS
                            IS
                        </p>
                        <span className='titleTop'>OUR</span>
                        <h1>GO<span>A</span>L</h1>
                        <p className='titleBottom'>
                        WHAT WE BELIEVE
                        </p>
                    </div></SwiperSlide>
                <SwiperSlide className='swipers'>
                    <div className='title'>
                        <p>
                            PRACTICALNESS IS
                        </p>
                        <span className='titleTop'>OUR</span>
                        <h1>MI<span>S</span>SION</h1>
                        <p className='titleBottom'>
                        WHAT WE BEHAVE
                        </p>
                    </div></SwiperSlide>
            </Swiper>
            <div 
            className='swiperPagination'
            ref={paginationNums}>
            </div>
        </div>
    </div>
    <div className='arrows'>
        <button className='arrowLeft' ref={navigationPrevRef}>←</button>
        <span>I</span>
        <button className='arrowRight' ref={navigationNextRef}>→</button>
    </div>
</section>
  )
}