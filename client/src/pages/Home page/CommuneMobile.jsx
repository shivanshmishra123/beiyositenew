import React from 'react'
import "./Homestyles/CommuneMobile.css"
const CommuneMobile = () => {
  return (
    <div>
      {/* Your races wrapper element */}
      <div className="racesWrapperMobile">
        <div  className="racesMobile">
    <div className="componetsMobile">
        <h1>Introducing  Commune  </h1>

        <div data-aos="zoom-in-up" data-aos-duration="1000" className="componentMobilefirst">
          <p>Take part in 
        any <span className='Conversation'>Conversation</span>
      that interests you, 
        with Our Community</p>
            <img src="/images/firstmobile.svg" alt="" />
        </div>
    </div>
    <div className="componetsMobile">
    <div data-aos="zoom-in-up" data-aos-duration="1000" className="componentMobilesecond">
    <p><span className="anonymous">Don’t Wanna
          Show your Identity 
          so its totally </span>
          Anonymous</p>
            <img src="/images/secondMobile.svg" alt="" />
        </div>
    </div>
    <div className="componetsMobile">
    <div data-aos="zoom-in-up" data-aos-duration="1000" className="componentMobilethird">
    <p> <span className="oneToOne">One-to-One </span>mentors
          with regular 
          Informative Sessions</p>
            <img src="/images/thirdMobile.svg" alt="" />
        </div>
    </div>
        </div>
      </div>
    </div>
  )
}

export default CommuneMobile