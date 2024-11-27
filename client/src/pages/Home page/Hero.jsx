// import React from 'react'
// import "./Homestyles/hero.css"
// const Hero = () => {
//   return (
//     <div className="main" id='main'>
//      <div> <h1 data-aos="fade-up"   data-aos-duration="2000"  >Offering You <br className="lineBreakHero" /> <span className='perfect'>Perfect</span> <br/>Accommodation <br className='serviceBreak' /> Services </h1></div>
//       <p data-aos="fade-right" data-aos-duration="2000" ><br className='parabreakk' />
    
//       Affordable Comfortable Living for Professionals and Students 
//  </p>
//      <img className='image' src="images/heroSectionimg.svg" alt="" />
//     <a href="/hostel"> <button className='explore  text-black'  data-aos="zoom-in" data-aos-duration="2000">Explore</button> </a>
//   </div>
//   )
// }

// export default Hero

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // For navigation if using React Router

const Hero = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate(); // For navigation

 

  const handleSearch = () => {
      // Navigate to the hostel page with the search term as a query parameter
      navigate(`/hostel?search=${encodeURIComponent(searchTerm)}`);
    };
  

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center pt-[8rem] md:pt-20">
    <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
      {/* Responsive grid layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-8 lg:items-center gap-2">
        {/* Right Content (Image) */}
        <div className="lg:order-none order-1 relative">
          <img
            src="/images/nexus+1-min.jpg"
            alt="Cozy Room"
            className="rounded-lg shadow-lg"
          />
          {/* Optional Decoration */}
          <div className="absolute top-0 left-0 bg-yellow-500 w-16 h-16 rounded-full transform -translate-y-6 -translate-x-6"></div>
        </div>
  
        {/* Left Content (Text and Buttons) */}
        <div className="lg:order-none order-3 text-center lg:text-left mt-8 lg:mt-0">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
            Find Your <span className="text-yellow-500">Perfect Stay</span> Today
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Comfortable and affordable living spaces tailored for professionals and students alike.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4">
            <a
              href="/hostel"
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg shadow-md text-lg font-medium"
            >
              Explore Hostels
            </a>
            <a
              href="/hostel"
              className="border-2 border-yellow-500 hover:border-yellow-600 text-yellow-500 hover:text-yellow-600 px-6 py-3 rounded-lg shadow-md text-lg font-medium"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
  
      {/* Search Bar */}
      <div className="order-2 mt-12 bg-white shadow-lg rounded-lg p-6 lg:p-8 flex flex-col sm:flex-row items-center gap-4">
        <input
          type="text"
          placeholder="Enter location or preferences..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 border border-gray-300 w-full rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        <button
          onClick={handleSearch}
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-medium"
        >
          Search
        </button>
      </div>
    </div>
  </div>
  );
};

export default Hero;

