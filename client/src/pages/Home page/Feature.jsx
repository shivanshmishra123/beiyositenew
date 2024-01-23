import React from 'react'
import './Homestyles/feature.css'

import { Scrollbar, Pagination ,FreeMode } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

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
    <img  src="/images/wifi.png" alt="" />
    </div>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium dicta fuga ipsam dolore quae assumenda aliquam. Omnis accusantium saepe eos velit nam expedita itaque, rerum quod nostrum sed distinctio facere.</p>
        <img className='rndomelem' src="/images/randomelem.svg" alt="" />
        </div>
        <div className="featureblock" data-aos="zoom-in-up"data-aos-duration="2000" >
        <div className="featurecontent">
    <h1>WIFI</h1>
    <img src="/images/wifi.png" alt="" />
    </div>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium dicta fuga ipsam dolore quae assumenda aliquam. Omnis accusantium saepe eos velit nam expedita itaque, rerum quod nostrum sed distinctio facere.</p>
    <img  className='rndomelem' src="/images/randomelem.svg" alt="" />
        </div>
    </div>
    <div className="featuredisplay1">
    <div className="featureblock" data-aos="zoom-in-up" data-aos-duration="2000" >
    <div className="featurecontent">
    <h1>WIFI</h1>
    <img src="/images/wifi.png" alt="" />
    </div>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium dicta fuga ipsam dolore quae assumenda aliquam. Omnis accusantium saepe eos velit nam expedita itaque, rerum quod nostrum sed distinctio facere.</p>
    <img  className='rndomelem' src="/images/randomelem.svg" alt="" />
        </div>
        <div className="featureblock" data-aos="zoom-in-up" data-aos-duration="2000" >
        <div className="featurecontent">
       <h1>WIFI</h1>
       <img src="/images/wifi.png" alt="" />
     </div>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium dicta fuga ipsam dolore quae assumenda aliquam. Omnis accusantium saepe eos velit nam expedita itaque, rerum quod nostrum sed distinctio facere.</p>
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