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
    <div className='testimonial'data-aos="fade-up"   data-aos-duration="2000" >
       <h1 className="testimonialtitle">
        TESTIMONIAL  
       </h1>
       <p className='testimonialtitlepara' >From Our Residence</p>
        <div className="swipersection">

        <Swiper className='swiper' style={{margin:"2rem"}}
      // install Swiper modules
      modules={[ Scrollbar , Pagination ,FreeMode  , Autoplay]}
      spaceBetween={10}
      slidesPerView = {1}
      loop={true}
     autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      // pagination={{
      //   dynamicBullets: true,
      // }}
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
          <img src="/images/fourthprofile.png" alt="" />
          <h6>Harsh <br /> Jain</h6>
          <p>
          Living here in beiyo is a game-changer! Great community, awesome facilities, and the staff rocks. Feels like family away from home. Highly recommend!</p>
         
        </div>
        </SwiperSlide>
      <SwiperSlide>
        <div className="testimonialsection">
        <img src="/images/firstprofile1.png" alt="" />
        <h6>Deepak <br /> Sharma</h6>
          <p>
          This type of living is a gem! From the welcoming community to the fantastic facilities, it's been an amazing student living experience.</p>
     
        </div>
       </SwiperSlide>
      <SwiperSlide>
        <div className="testimonialsection">
        <img src="/images/secondprofile.png" alt="" />
        <h6>Mukul <br /> Gupta</h6>
          <p>Couldn't have asked for a better  experience! Living here has genuinely enriched my 'student life' – it's more than four walls around you; it's a home away from home.</p>
    
        </div>
        </SwiperSlide>
      <SwiperSlide>
        <div className="testimonialsection">
        <img src="/images/fiveprofile.png" alt="" />
        <h6>Harsh <br /> Jain</h6>
          <p>Impressed by the cleanliness, spacious rooms, and excellent facilities. Reliable water, great Wi-Fi—a student's haven. Friendly staff. Highly recommend!</p>
       
        </div>
</SwiperSlide>
    <SwiperSlide> 
      <div className="testimonialsection">
      <img src="/images/thirdprofile.png" alt="" />
      <h6>Shivam <br /> Gupta</h6>
        <p>I'm thoroughly impressed with the cleanliness and hygiene of this hostel. The facilities are top notch, and the staff is warm and accommodating. Spaciousrooms, reliable water supply,excellent Wi-Fi—truly a student's haven!</p>
      </div>
      </SwiperSlide>
    <SwiperSlide>
      <div className="testimonialsection">

      <img src="/images/firstprofile.svg" alt="" />
      <h6>Devansh <br /> Porwal</h6>
        <p>The reliable water supply, excellent Wi-Fi, and attentive staff contribute to a positive living experience for students. Highly recommended!</p>
       
      </div>
     </SwiperSlide>
    </Swiper>
        
      </div>
        </div>
       
  )
}

export default Testimonial