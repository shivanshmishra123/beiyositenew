import React from 'react'
import "./Homestyles/hero.css"
const Hero = () => {
  return (
    <div className="main" id='main'>
      <h1 data-aos="fade-up"   data-aos-duration="2000" >Offering You <br className="lineBreakHero" /> <span className='perfect'>Perfect</span> <br/>Accommodation Services </h1>
      <p data-aos="fade-right" data-aos-duration="2000" > Seamless Living, <br className='parabreakk' /> Elevated Learning: Your Student Accommodation of Choice!</p>
     <div className="imagediv"></div>
    <a href="/hostel"> <button className='explore' data-aos="zoom-in" data-aos-duration="2000">Explore</button> </a>
  </div>
  )
}

export default Hero