import React from 'react'
import './Homestyles/feature.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/pagination';
const Feature = () => {
  
  return (
     <>
     <div className="feature" data-aos="fade-up"   data-aos-duration="3000"  >
      <h1 className='featuretitle' >OUR SERVICES</h1>
      <div className="featuresection">
        <div className="taglinefeature">
      <h1 className='taglinetext1'>
      YOU     NEED
        </h1>
        <h1 className='taglinetext1'>
     THESE BUT
        </h1>
        <h1 className='taglinetext1'>
      NO
        </h1>
        <h1 className='taglinetext1'>
     ONE
        </h1>
        <h1 className='taglinetext1'>
    GIVES 
        </h1>
        </div>
      <div className="featuredisplay">
    <div className="featuredisplay1">
    <div className="featureblock" data-aos="zoom-in-up" data-aos-duration="2000">
    <div className="featurecontent">
    <h1>WIFI</h1>
    <img  src="/images/wifi.svg" alt="" />
    </div>
    <p>Experience unlimited high-speed Wi-Fi with Beiyo, setting a new standard in connectivity. Stay connected without any data-limit</p>
        <img className='rndomelem' src="/images/randomelem.svg" alt="" />
        </div>
        <div className="featureblock" data-aos="zoom-in-up"data-aos-duration="2000" >
        <div className="featurecontent">
    <h1>Cleaning Service</h1>
    <img src="/images/cleaning.svg" alt="" />
    </div>
    <p>You better focus on your Groove, while our team of experts ensures every corner of your room is dust-free</p>
    <img  className='rndomelem' src="/images/randomelem.svg" alt="" />
        </div>
    </div>
    <div className="featuredisplay1">
    <div className="featureblock" data-aos="zoom-in-up" data-aos-duration="2000" >
    <div className="featurecontent">
    <h1>Purified Water</h1>
    <img src="/images/water.svg" alt="" />
    </div>
    <p>Jaundice the surprise guest from poor water quality. No worries, our R.O. keeps you hydrated.</p>
    <img  className='rndomelem' src="/images/randomelem.svg" alt="" />
        </div>
        <div className="featureblock" data-aos="zoom-in-up" data-aos-duration="2000" >
        <div className="featurecontent">
       <h1>Washing Machine</h1>
       <img src="\images\washing machine.svg" alt="" />
     </div>
    <p>Ditch laundry hassle, We provide washing machine to keep your clothes fresh, making you the guy who turns head of every girl.</p>
    <img  className='rndomelem' src="/images/randomelem.svg" alt="" /> 
        </div>
    </div>
      </div>
      </div>
     </div>
     </>

       
  )
}

export default Feature