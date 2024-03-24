import React from 'react'
import "./Homestyles/hero.css"
const Hero = () => {
  return (
    <div className="main" id='main'>
      <h1 data-aos="fade-up"   data-aos-duration="2000" >Offering You <br className="lineBreakHero" /> <span className='perfect'>Perfect</span> <br/>Accommodation <br className='serviceBreak' /> Services </h1>
      <p data-aos="fade-right" data-aos-duration="2000" > Seamless Living, <br className='parabreakk' />
      Dynamic Environments: 
      The Ultimate Destination for Professionals and Students 
 </p>
     <img className='image' src="images/heroSectionimg.svg" alt="" />
    <a href="/hostel"> <button className='explore' data-aos="zoom-in" data-aos-duration="2000">Explore</button> </a>
  </div>
  )
}

export default Hero