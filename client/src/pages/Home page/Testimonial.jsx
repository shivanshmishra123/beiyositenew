import React from 'react'
import { Quote, Star, ArrowRight, Check } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, Pagination, FreeMode, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/pagination';

const TestimonialData = [
  {
    name: "Harsh Jain",
    image: "/images/fourthprofile.png",
    quote: "Living here in beiyo is a game-changer! Great community, awesome facilities, and the staff rocks.",
    rating: 5,
    highlights: ["Community", "Facilities", "Staff Support"]
  },
  {
    name: "Deepak Sharma", 
    image: "/images/firstprofile1.png",
    quote: "This type of living is a gem! From the welcoming community to the fantastic facilities.",
    rating: 4,
    highlights: ["Welcoming Environment", "Top Facilities"]
  },
  {
    name: "Mukul Gupta",
    image: "/images/secondprofile.png", 
    quote: "Couldn't have asked for a better experience! Living here has genuinely enriched my student life.",
    rating: 5,
    highlights: ["Student Life", "Personal Growth"]
  }
];

const Testimonial = () => {
  return (
    <div className=" py-16 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black text-black mb-4 tracking-wider uppercase">
            Real Stories
          </h1>
          <p className="text-xl text-gray-600 font-light">Experiences That Speak Volumes</p>
        </div>

        <Swiper
          modules={[Scrollbar, Pagination, FreeMode, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            }
          }}
          className="testimonial-swiper"
        >
          {TestimonialData.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 h-full 
                             transform transition-all duration-300 
                             hover:shadow-2xl hover:scale-105 hover:border-yellow-400">
                <div className="flex justify-between items-start mb-6">
                  <Quote className="text-yellow-500 opacity-50" size={40} />
                  <div className="flex text-yellow-500">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={24} fill="currentColor" className="mr-1" />
                    ))}
                  </div>
                </div>
                
                <p className="text-gray-700 italic mb-6 min-h-[100px]">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-16 h-16 rounded-full object-cover mr-4 
                               border-2 border-yellow-500 shadow-md"
                  />
                  <div>
                    <h6 className="text-lg font-bold text-black">{testimonial.name}</h6>
                    <p className="text-gray-500 text-sm">Beiyo Resident</p>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <h5 className="text-sm font-semibold text-black mb-2">Highlights</h5>
                  <div className="flex flex-wrap gap-2">
                    {testimonial.highlights.map((highlight, idx) => (
                      <span 
                        key={idx} 
                        className="flex items-center bg-yellow-100 text-yellow-800 
                                   px-2 py-1 rounded-full text-xs font-medium"
                      >
                        <Check className="mr-1" size={12} />
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default Testimonial