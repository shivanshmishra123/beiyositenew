import React from 'react'
import HostelsComponent from '../../components/HostelsComponent'
import './Homestyles/OurHostel.css'
const OurHostel = () => {
  return (
    <div className='ourHosteldiv'>
        <h1 className='ourhostelsHeading'>Hostels</h1>
        <HostelsComponent
        noOfHostels = "2"
        />
       <div className='explorediv'> <a href="/hostel" className='exploremore' style={{textAlign:'right'}}>Explore more</a></div>
    </div>

  )
}

export default OurHostel