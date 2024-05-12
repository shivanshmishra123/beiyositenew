import React from 'react'
import "./Homestyles/footer.css"
const Footer = () => {
  return (
    <div className='footercontainor'>
<div className="footer">
  <div className="footercompoents">
    <img src="/images/beiyo_logo2.svg" alt="" />
    <p>
    Beiyo is a startup specializing in hostel <br /> accommodation. We partner with PG <br /> and hostel owners to renovate rooms <br /> and enhance facilities, offering a <br /> modern and comfortable living experience.
    </p>
  </div>
 <div className="footercontent">
 <div className="footercompoents">
    <ul>
    <a className='link' href="/about"><li>Our Story</li></a>
      
      <a href="" className='link'><li>Partner with us</li></a>
      <a href="/privacy-policy" className='link'><li>Privacy Policy</li></a>
    </ul>
  </div>
  <div className="footercompoents">
    <ul>
      
      <a href="/homeOfConduct" className='link'><li>Home Code Of Conduct</li></a>
      <a href="/achievement" className='link'><li>Our Achievements</li></a>
    </ul>
  </div>
  {/* <div className="footercompoents">
  <ul>
      <a href=""><li>Privacy Policy</li></a>
      <a href=""><li>T&C</li></a>
      <a href=""><li>Cookie Policy</li></a>
    </ul>
  </div> */}
  <div className="ContactUsDiv">
  <ul>
     <div className="contactmaildiv">
     <li className='contact'>Contact Us</li>
      <p className='mail'>Mail:- beiyo.work@gmail.com</p>
      <p className='phone'>Phone:- +91 83055 23140</p>
     </div>
     <div className="socialmediadiv">
     <a href="https://in.linkedin.com/company/beiyo" target="_blank"><p className='socilamediaMobile' ><img src="/images/Linkedin.svg" alt="" /></p></a>
     <a href="https://www.instagram.com/beiyo.in/" target="_blank"><p className='socilamediaMobile' ><img src="/images/Instagram.svg" alt="" /></p></a>
     <a href="https://www.threads.net/@beiyo.in/" target="_blank"><p className='socilamediaMobile' ><img src="/images/Twitter.svg" alt="" /></p></a>
     </div>
   
   
    </ul>
  </div>
 </div>
  
</div>
    {/* <img className='randomfooterelem' src="/images/Ellipse 6.png" alt="" /> */}
</div>
  )
}

export default Footer