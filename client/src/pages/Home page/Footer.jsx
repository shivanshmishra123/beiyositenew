import React from 'react'
import "./Homestyles/footer.css"
const Footer = () => {
  return (
    <div className='footercontainor'>
<div className="footer">
  <div className="footercompoents">
    <img src="/images/beiyo_logo2.svg" alt="" />
    <p>
    Beiyo is a startup specializing in hostel <br /> accommodation. We partner with PG <br /> and hostel owners to renovate rooms <br /> and enhance facilities, offering a <br /> modern and comfortable living experience
    </p>
  </div>
  <div className="footercompoents">
    <ul>
      <li>About us</li>
      <li>Our Team</li>
      <li>Partner with us</li>
    </ul>
  </div>
  <div className="footercompoents">
  <ul>
      <li>Privacy Policy</li>
      <li>T&C</li>
      <li>Cookie Policy</li>
    </ul>
  </div>
  <div className="footercompoents">
  <ul>
      <li>Contact Us</li>
     <div className="socialmediadiv">
     <p className='socilamedia' >Linkedin</p>
      <p className='socilamedia' >Instagram</p>
      <p className='socilamedia'>Twitter</p>
      <p className='socilamedia'>Mail:- beiyo.work@gmail.com</p>
     </div>
    </ul>
  </div>
  
</div>
<img src="images\Ellipse 6.png" alt="" className="randomfooterelem" />
</div>
  )
}

export default Footer