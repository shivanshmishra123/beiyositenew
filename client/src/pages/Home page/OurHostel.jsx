import React from 'react'
import HostelsComponent from '../../components/HostelsComponent'
import './ourhostel.css'
const OurHostel = () => {
  return (
    <div className='ourHosteldiv p-4 md:p-16' data-aos="fade-up"
    data-aos-duration="1000">
        <h1 className='ourhostelsHeading whitespace-nowrap'> Ready to find your perfect accommodation? <span className='pcourhostelsheading'>Explore our listings and book your stay today!</span></h1>
        <HostelsComponent
        noOfHostels = "3"
        />
       <div className='flex items-center justify-center mt-4 sm:mt-0 '><a
              href="/hostel"
              className="bg-yellow-500 hover:bg-yellow-600  text-black px-6 py-3 rounded-lg shadow-lg text-lg font-medium"
            >
              Explore More
            </a></div>
    </div>

  )
}

export default OurHostel