import React from 'react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from 'framer-motion';
import './Homestyles/feature.css';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/pagination';

const Feature = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const featureItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  gsap.registerPlugin(ScrollTrigger);

const Counter = ({ from, to, duration = 3 }) => {
  const countRef = useRef(null);

  useEffect(() => {
    const countElement = countRef.current;

    // Create the scrollTrigger animation
    const scrollTriggerInstance = gsap.fromTo(
      countElement,
      {
        innerHTML: from,
      },
      {
        innerHTML: to,
        duration: duration,
        ease: 'easeOut',
        snap: { innerHTML: 1 },
        scrollTrigger: {
          trigger: countElement,
          start: 'top 95%',
          once: true,
        },
        onComplete: () => {
          countElement.innerHTML = `${countElement.innerHTML}+`;
        },
      }
    );

    // Cleanup ScrollTrigger on unmount
    return () => {
      if (scrollTriggerInstance) {
        scrollTriggerInstance.scrollTrigger.kill();
      }
    };
  }, [from, to, duration]);

  return (
    <div ref={countRef} className="text-6xl font-bold text-yellow-500">
      {from}
    </div>
  );
};


  return (
    <div className="hostel-container w-full max-w-full px-4  py-12 space-y-24">
      {/* Features Section */}
      <motion.section 
        className="features-section relative overflow-hidden rounded-2xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <div className="absolute top-[-90px] left-[-90px] w-[250px] h-[250px] bg-yellow-500 rounded-full z-0 opacity-80"></div>

        <div className="features-content-wrapper grid md:grid-cols-2 gap-8  items-center relative z-10 p-8 md:p-12">
          <motion.div 
            className="features-image-container  relative rounded-2xl"
            variants={fadeInLeft}
          >
            <img
              src="/images/multicultural-communities.png"
              alt="Community illustration"
              className="features-image w-full h-auto"
            />
          </motion.div>

          <motion.div 
            className="features-text-content space-y-8"
            variants={fadeInRight}
          >
            <motion.h1 
              className="features-title text-4xl md:text-5xl font-bold text-gray-800 whitespace-nowrap"
              variants={fadeInUp}
            >
              Hassle Free <span className="features-title-highlight  font-bold text=4xl text-yellow-500 ">Move-In.</span>
            </motion.h1>
            <motion.p 
              className="features-title text-3xl md:text-3xl font-medium text-gray-600 md:block hidden"
              variants={fadeInUp}
            >
              Just Arrive! We Handle the Rest
            </motion.p>

            <motion.div 
              className="feature-list space-y-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { icon: "fight.png", text: "No More Unwanted Fights with LandLords" },
                { icon: "contract.png", text: "Transparent Paperwork" },
                { icon: "headset.png", text: "24x7 Assistance" },
                { icon: "amenities.png", text: "All Amenities Covered: No Extra Bills for Wifi, Electricity, etc." }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="feature-item flex items-center gap-4"
                  variants={featureItemVariants}
                >
                  <div className="feature-icon-wrapper  rounded-lg">
                    <img src={`/images/${item.icon}`} alt="" className="feature-icon w-14 h-14" />
                  </div>
                  <span className="feature-text text-lg md:text-xl text-black">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Community Section */}
      <motion.section 
        className="community-section relative 
        
         overflow-hidden rounded-2xl "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <div className="absolute top-[-90px] right-[-90px] w-[250px] h-[250px] bg-yellow-500 rounded-full z-0 opacity-80"></div>

        <div className="community-content-wrapper grid md:grid-cols-2 gap-8 items-center relative z-10 p-8 md:p-12">
          <motion.div 
            className="community-text-content space-y-8"
            variants={fadeInLeft}
          >
            <motion.h2 
              className="community-title text-4xl md:text-5xl font-bold text-gray-800"
              variants={fadeInUp}
            >
              We are not just yet another <span className="font-bold text=4xl md:text-yellow-500">Hostel!</span>
            </motion.h2>

            <motion.div 
              className="community-feature-list space-y-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { icon: "love.png", text: "Enjoy Community of 10+ Hostels" },
                { icon: "calendar.png", text: "Regular Events & Celebrations" },
                { icon: "network.png", text: "Network With Like Minded Individuals" },
                { icon: "idea.png", text: "Have an Idea? We are here to mentor you" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="community-feature-item flex items-center gap-4"
                  variants={featureItemVariants}
                >
                  <div className="feature-icon-wrapper rounded-lg">
                    <img src={`/images/${item.icon}`} alt="" className="community-icon w-14 h-14" />
                  </div>
                  <span className="text-lg md:text-xl text-black">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            className="community-image-container relative rounded-2xl"
            variants={fadeInRight}
          >
            <img
              src="/images/events&celebrations.png"
              alt="Community activities"
              className="community-image w-full h-auto"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        className="stats-section relative bg-gradient-to-br from-amber-50 to-yellow-100 rounded-3xl p-4 md:p-12 shadow-lg overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <motion.div
          className="stats-header text-center space-y-4 mb-4"
          variants={fadeInUp}
        >
          <h1 className="stats-title text-4xl md:text-5xl text-gray-800 font-bold">
            Our Numbers speak for <span className="text-yellow-500">Us</span>
          </h1>
          <p className="stats-subtitle text-lg sm:text-xl md:text-2xl mt-2 font-bold text-gray-600">
            Join Our <span className="stats-subtitle-highlight text-yellow-500 font-bold">Expanding</span>{' '}
            Community
          </p>
        </motion.div>

        <motion.div
          className="stats-grid grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[{ value: 500, label: "Happy Customers" }, { value: 10, label: "Co-Living Spaces" }, { value: 3, label: "Community Events" }].map(
            (stat, index) => (
              <motion.div
                key={index}
                className="stat-item bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-center space-y-1">
                  {/* Counter component to animate numbers */}
                  <Counter from={0} to={stat.value} duration={5} />
                  <p className="stat-label text-xl text-gray-600 font-medium">{stat.label}</p>
                </div>
              </motion.div>
            )
          )}
        </motion.div>

        <motion.p className="stats-footer text-center text-2xl text-gray-400 font-medium mt-6" variants={fadeInUp}>
          And Still Counting<span className="heart-icon text-red-500 ml-2">❤</span>...
        </motion.p>
      </motion.section>
    </div>
  );
};

export default Feature;