import React from 'react'
import './Homestyles/testimonial.css'

import { Scrollbar, Pagination ,FreeMode,  Autoplay, EffectCards } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/pagination';
import "swiper/css/effect-cube";
const Testimonial = () => {
  const isMobile = window.innerWidth <= 768;

  // Swiper options with cube effect
  const swiperOptions = {
    effect: isMobile ? 'cards' : 'slide', // Use cube effect on mobile, slide on PC
    // Add other Swiper options as needed
  };
  return (
    <div className='testimonial'data-aos="fade-up"   data-aos-duration="3000" >
       <h1 className="testimonialtitle">
        TESTIMONIAL  
       </h1>
       <p className='testimonialtitlepara' >From Our Residence</p>
        <div className="swipersection">

        <Swiper className='swiper'
      // install Swiper modules
      modules={[ Scrollbar , Pagination ,FreeMode , EffectCards , Autoplay]}
      spaceBetween={10}
      slidesPerView = {1}
      loop={true}
    autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      {...swiperOptions}
      grabCursor={true}
    
      breakpoints={{
        
        640:{
          slidesPerView: 3.3,
        spaceBetween:40,
        pagination: {
         dynamicBullets:true,
      },
      
    }
       } }
    >
      <SwiperSlide>
        <div className="testimonialsection">
          <img src="/images/firstprofile.svg" alt="" />
          <h6>Daksh <br /> Baxi</h6>
          <p>
          Impressed by the cleanliness, spacious rooms, and excellent facilities. Reliable water, great Wi-Fi—a student's haven. Friendly staff. Highly recommend!</p>
         
        </div>
        </SwiperSlide>
      <SwiperSlide>
        <div className="testimonialsection">
        <img src="/images/firstprofile.svg" alt="" />
        <h6>Daksh <br /> Baxi</h6>
          <p>
          Impressed by the cleanliness, spacious rooms, and excellent facilities. Reliable water, great Wi-Fi—a student's haven. Friendly staff. Highly recommend!</p>
     
        </div>
       </SwiperSlide>
      <SwiperSlide>
        <div className="testimonialsection">
        <img src="/images/firstprofile.svg" alt="" />
        <h6>Daksh <br /> Baxi</h6>
          <p>Impressed by the cleanliness, spacious rooms, and excellent facilities. Reliable water, great Wi-Fi—a student's haven. Friendly staff. Highly recommend!</p>
    
        </div>
        </SwiperSlide>
      <SwiperSlide>
        <div className="testimonialsection">
        <img src="/images/firstprofile.svg" alt="" />
        <h6>Daksh <br /> Baxi</h6>
          <p>Impressed by the cleanliness, spacious rooms, and excellent facilities. Reliable water, great Wi-Fi—a student's haven. Friendly staff. Highly recommend!</p>
       
        </div>
</SwiperSlide>
    <SwiperSlide> 
      <div className="testimonialsection">
      <img src="/images/firstprofile.svg" alt="" />
      <h6>Daksh <br /> Baxi</h6>
        <p>Impressed by the cleanliness, spacious rooms, and excellent facilities. Reliable water, great Wi-Fi—a student's haven. Friendly staff. Highly recommend!</p>
      </div>
      </SwiperSlide>
    <SwiperSlide>
      <div className="testimonialsection">

      <img src="/images/firstprofile.svg" alt="" />
      <h6>Daksh <br /> Baxi</h6>
        <p>Impressed by the cleanliness, spacious rooms, and excellent facilities. Reliable water, great Wi-Fi—a student's haven. Friendly staff. Highly recommend!</p>
       
      </div>
     </SwiperSlide>
    </Swiper>
        
      </div>
        </div>
       
  )
}

export default Testimonial