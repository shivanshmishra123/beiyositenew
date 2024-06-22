import React from 'react'
import './Achievement.css'
const Achievement = () => {
  return (
    <div  className='achievementPage'>
        <h1><span className="highlighter" style={{color:'#F7D441',fontWeight:'600'}}>Highlighting</span> our Achievement</h1>
        <div className="achivementMain">
        <div className='achivementMain1 subachievement'>
           <p className='achievementParadiv'>Breaking the Mold in Student Accommodation! ‘Introducing BEIYO, where students revolutionize hostel living. Acquiring and managing hostels, we offer modern, affordable spaces, seamlessly booked online. Join the accommodation evolution today!’</p>
            <img src="./images/newspaper.png" alt="" />
        </div>
        <div className='achivementMain2 subachievement'>
            <img src="./images/kgpbeiyo.png" alt="" />
            <p className='achievementParadiv'>"BEIYO is thrilled to announce its selection among the top 8 startups at LSM Indore, hosted by the Entrepreneurship Cell, IIT Kharagpur. This achievement underscores the team's relentless dedication. Heartfelt gratitude goes to the esteemed panelists and Lead Investor for their invaluable support. Special appreciation to the teams at Entrepreneurship Cell, IIT Kharagpur, and Medi-Caps University. The entire BEIYO team celebrates this milestone, further fueling their commitment to innovation. <a href="https://in.linkedin.com/company/beiyo">Learn More</a></p>
        </div>
        <div className='subachievement achievement3'>
         <p>"BEIYO is proud to announce its selection in the prestigious EMPRESARIO Business Model Competition, organized by Entrepreneurship Cell, IIT Kharagpur! Among 2000+ registered startups nationwide, we've secured a place in the top 200. This recognition highlights our innovative business model and the hard work of our dedicated team. We're honored to participate in this esteemed competition, further fueling our commitment to excellence and innovation in our industry. Special thanks to our mentor for invaluable guidance. Thank you, Entrepreneurship Cell, IIT Kharagpur Empresario, for providing a platform that celebrates entrepreneurship and fosters innovation. Excited for the opportunities ahead! <a href="https://in.linkedin.com/company/beiyo">Learn More</a></p>
            <img src="./images/kgpbeiyo2.png" alt="" />
        </div>
        </div>
    </div>
  )
}

export default Achievement