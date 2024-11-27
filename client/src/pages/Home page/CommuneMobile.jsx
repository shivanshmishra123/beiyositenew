// import React from 'react'
// import "./Homestyles/CommuneMobile.css"

// import { Scrollbar, Pagination ,FreeMode,  Autoplay, EffectCards,Navigation } from 'swiper/modules';
// import { Swiper, SwiperSlide } from 'swiper/react';
// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/scrollbar';
// import 'swiper/css/pagination';
// import "swiper/css/effect-cube";
// import "swiper/css/navigation";
// const CommuneMobile = () => {
//   return (
//     <div>
//       {/* Your races wrapper element */}
//       <div className="racesWrapperMobile">
//         <div  className="racesMobile">
//         <h1>Introducing <span style={{color:'#ffc72c'}}>Commune</span>   </h1>
   
       
//         <Swiper
//                modules={[ Navigation, Autoplay]}
//                slidesPerView = {1}  
//                loop={true}
//                navigation={true}
//                autoplay={{
//                 delay: 2000,
//                 disableOnInteraction: false,
//               }}
//               >
//                   <SwiperSlide>
//                   <div className="componentsMobile">
//                   <div data-aos="zoom-in-up" data-aos-duration="1000" className="componentMobilefirst">
//                       <p>Take part in 
//                  any <span className='Conversation'>Conversation</span>
//               that interests you, 
//                  with Our Community</p>
//             <img src="/images/firstmobile.svg" alt="" />
//             </div>
//             </div>
//                   </SwiperSlide>
//                   <SwiperSlide>
//                   <div className="componentsMobile">
//     <div data-aos="zoom-in-up" data-aos-duration="1000" className="componentMobilesecond">
//     <p><span className="anonymous">Don’t Wanna
//           Show your Identity 
//           so its totally </span>
//           Anonymous</p>
//             <img src="/images/secondMobile.svg" alt="" />
//         </div>
//     </div>
//                   </SwiperSlide>
//                   <SwiperSlide>
//                   <div className="componentsMobile">
//     <div data-aos="zoom-in-up" data-aos-duration="1000" className="componentMobilethird">
//     <p> <span className="oneToOne">One-to-One </span>mentors
//           with regular 
//           Informative Sessions</p>
//             <img src="/images/thirdMobile.svg" alt="" />
//         </div>
//     </div>
//                   </SwiperSlide>
//               </Swiper>

       
  
  
    
//         </div>
//       </div>
//     </div>
//   )
// }

// export default CommuneMobile


import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const CommuneMobile = () => {
  return (
    <div className="block md:hidden">
      {/* Wrapper */}
      <div className="px-4">
        <div className="flex flex-col gap-4 ">
          <h1 className="text-3xl text-center font-bold">
            Introducing <span className="text-yellow-500">Commune</span>
          </h1>

          {/* Swiper Component */}
          <Swiper
            modules={[Navigation, Autoplay]}
            slidesPerView={1}
            loop={true}
            navigation={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            className="w-full"
          >
            {/* Slide 1 */}
            <SwiperSlide>
              <div className="bg-orange-100 rounded-3xl flex flex-col items-center justify-center gap-6 p-8 ">
                <p className="text-center text-lg px-6 ">
                  Take part in any{" "}
                  <span className="font-semibold text-orange-500">
                    Conversation
                  </span>{" "}
                  that interests you, with Our Community
                </p>
                <img
                  src="/images/firstmobile.svg"
                  alt="Conversation"
                  className="h-80"
                />
              </div>
            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide>
              <div className="bg-pink-100 rounded-3xl flex flex-col items-center justify-center gap-6 p-8">
                <p className="text-center text-lg px-6">
                  <span className="font-semibold text-pink-500">
                    Don’t Wanna Show your Identity
                  </span>{" "}
                  so it's totally Anonymous
                </p>
                <img
                  src="/images/secondMobile.svg"
                  alt="Anonymous"
                  className="h-80"
                />
              </div>
            </SwiperSlide>

            {/* Slide 3 */}
            <SwiperSlide>
              <div className="bg-blue-100 rounded-3xl flex flex-col items-center justify-center gap-6 p-8">
                <p className="text-center text-lg px-6">
                  <span className="font-semibold text-blue-500">One-to-One</span>{" "}
                  mentors with regular Informative Sessions
                </p>
                <img
                  src="/images/thirdMobile.svg"
                  alt="Mentorship"
                  className="h-80"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default CommuneMobile;
