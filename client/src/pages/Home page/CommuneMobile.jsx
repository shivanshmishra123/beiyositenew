import React from 'react'
import "./Homestyles/CommuneMobile.css"

import { Scrollbar, Pagination ,FreeMode,  Autoplay, EffectCards,Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/pagination';
import "swiper/css/effect-cube";
import "swiper/css/navigation";
const CommuneMobile = () => {
  return (
    <div>
      {/* Your races wrapper element */}
      <div className="racesWrapperMobile">
        <div  className="racesMobile">
        <h1>Introducing <span style={{color:'#ffc72c'}}>Commune</span>   </h1>
   
       
        <Swiper
               modules={[ Navigation, Autoplay]}
               slidesPerView = {1}  
               loop={true}
               navigation={true}
               autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              >
                  <SwiperSlide>
                  <div className="componetsMobile">
                  <div data-aos="zoom-in-up" data-aos-duration="1000" className="componentMobilefirst">
                      <p>Take part in 
                 any <span className='Conversation'>Conversation</span>
              that interests you, 
                 with Our Community</p>
            <img src="/images/firstmobile.svg" alt="" />
            </div>
            </div>
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="componetsMobile">
    <div data-aos="zoom-in-up" data-aos-duration="1000" className="componentMobilesecond">
    <p><span className="anonymous">Don’t Wanna
          Show your Identity 
          so its totally </span>
          Anonymous</p>
            <img src="/images/secondMobile.svg" alt="" />
        </div>
    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="componetsMobile">
    <div data-aos="zoom-in-up" data-aos-duration="1000" className="componentMobilethird">
    <p> <span className="oneToOne">One-to-One </span>mentors
          with regular 
          Informative Sessions</p>
            <img src="/images/thirdMobile.svg" alt="" />
        </div>
    </div>
                  </SwiperSlide>
              </Swiper>

       
  
  
    
        </div>
      </div>
    </div>
  )
}

export default CommuneMobile