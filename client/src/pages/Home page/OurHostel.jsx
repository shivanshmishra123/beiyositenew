import React from 'react'
import HostelsComponent from '../../components/HostelsComponent'
import './ourhostel.css'
const OurHostel = () => {
  return (
    <div className='ourHosteldiv' data-aos="fade-up"
    data-aos-duration="1000">
        <h1 className='ourhostelsHeading'> Ready to find your perfect accommodation? <span className='pcourhostelsheading'>Explore our listings and book your stay today!</span></h1>
        <HostelsComponent
        noOfHostels = "3"
        />
       <div className='flex items-center justify-center mt-4 sm:mt-0 '><a href="/hostel" 
   className="text-xl px-6 py-4 bg-[#ffc72c] rounded-full border-black border-2 drop-shadow-md transition-all 
          hover:bg-black hover:text-white hover:drop-shadow-lg transform hover:translate-y-[-2px]">
   Explore more
</a></div>
    </div>

  )
}

export default OurHostel