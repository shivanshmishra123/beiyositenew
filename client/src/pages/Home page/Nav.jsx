import React, { useState } from 'react';
import "./Homestyles/nav.css"

function Navbar() {

  const toggleMobileMenu = () => {
    const x = document.querySelector('.mobilenav');
    const y = document.querySelector('.homepage');
    if (x.style.height === '0px' || x.style.height === '') {
      x.style.height = '24rem';
      y.setAttribute('style', ' zIndex:  0 ;  opacity:  0.3 ; pointerEvents: none; transition: opacity 0.3s ease-in-out')
      y.addEventListener("click",function(){
        x.style.height = '0px';
        y.setAttribute('style', ' zIndex:  1 ;  opacity:  1 ; pointerEvents: auto; transition: opacity 0.3s ease-in-out;')
    }) ; 
  }
  else {
      x.style.height = '0';
      y.setAttribute('style', ' zIndex:  1 ;  opacity:  1 ; pointerEvents: auto; transition: opacity 0.3s ease-in-out;')
    }
  }
  return (
<div className="mainnav">
  <div className="nav">
           <a href="/"> <img className='logo' src="images\beiyo_logo2.svg" alt="" /></a>
                <ul>
                <a href="/hostel"><li><p>Hostels</p></li></a>
                <a href="/list_form.pdf" download="list-form.pdf"><li><p>List</p></li></a>
                <a href="/about"><li><p>About us</p></li></a>
                </ul>
               <p className='menu'onClick={toggleMobileMenu} > M Menu</p>
  </div>
  <div className="mobilenav">
                <ul>
                <a href="/hostel"><li><p>Hostels</p></li></a>
                <a href="/list_form.pdf" download="list-form.pdf"><li><p>List</p></li></a>
                <a href="/about"><li><p>About us</p></li></a>
                </ul>
  </div>
  </div>
  )
}
export default Navbar
