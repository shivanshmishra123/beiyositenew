import React from 'react'
import HostelsComponent from '../../components/HostelsComponent'
import './ourhostel.css'
const OurHostel = () => {
  return (
    <div className='ourHosteldiv' data-aos="fade-up"
    data-aos-duration="1000">
        <h1 className='ourhostelsHeading'> Explore Our Hostels</h1>
        <HostelsComponent
        noOfHostels = "2"
        />
       <div className='explorediv'> <a href="/hostel" className='exploremore' style={{textAlign:'right'}}>Explore more</a></div>
    </div>

  )
}

export default OurHostel