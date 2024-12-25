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
    quote: "Beiyo is close to my college and essential stores. It’s so convenient, and I never worry about long commutes anymore.",
    rating: 5,
    highlights: ["Location", "Convenient"]
  },
  {
    name: "Deepak Sharma", 
    image: "/images/firstprofile1.png",
    quote: "Beiyo’s community events are the best part of my week. I’ve learned so much and made amazing friends through these fun activities.",
    rating: 4,
    highlights: ["Community", "Learnings"]
  },
  {
    name: "Mukul Gupta",
    image: "/images/secondprofile.png", 
    quote: "I always feel safe at Beiyo. With 24/7 security and strict entry rules for outsiders, it’s a worry-free place to focus on my studies.",
    rating: 5,
    highlights: ["Safe and Secure"]
  },
  {
    name: "Mukul Gupta",
    image: "/images/secondprofile.png", 
    quote: "Beiyo truly feels like home for me. The friendly culture and supportive people make it easy to make friends and feel comfortable every day.",
    rating: 5,
    highlights: ["Culture", "Vibes"]
  },
  {
    name: "Mukul Gupta",
    image: "/images/secondprofile.png", 
    quote: "Beiyo has everything I need. The Wi-Fi is reliable, the rooms are always clean, and having washing facilities here saves me so much time..",
    rating: 5,
    highlights: ["Reliable", "Comfy"]
  },
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