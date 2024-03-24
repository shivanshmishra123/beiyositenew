import React, { useState } from 'react';
import "./Homestyles/nav.css"

function Navbar() {

  const toggleMobileMenu = () => {
    const x = document.querySelector('.nav');
    const y = document.querySelector('.page');
    const z = document.querySelector('#close');
    const a = document.querySelector('#open');

    if (x.style.height === '3.5rem' || x.style.height === '') {

      x.setAttribute('style', ' height:auto; margin: 0;   padding-top: 1.8rem; background: linear-gradient(180deg, #FFFFFF 51.78%, rgba(255, 255, 255, 0.51) 85.71%, rgba(255, 255, 255, 0) 100%);border-radius: 0; width: 100%;   padding-left: 1.5rem;   padding-right: 1.5rem; ')
      y.setAttribute('style', ' zIndex:  0 ;');
      z.setAttribute('style', ' display:  block;');
      a.setAttribute('style', ' display:  none;');
      y.addEventListener("click", function () {
        a.setAttribute('style', ' display:  block;');
        z.setAttribute('style', ' display:  none;');
        x.setAttribute('style', ' height:3.5rem; margin-top: 1.8rem;  padding-top: 0.5rem; background: white ; border-radius: 12px; width:  90%;   padding-left: 3vw;   padding-right: 3vw;  ')
        y.setAttribute('style', ' zIndex:  1 ; ')
      });
    }
    else {
      a.setAttribute('style', ' display:  block;');
      z.setAttribute('style', ' display:  none;');
      x.setAttribute('style', '  height:3.5rem; margin-top: 1.8rem;  padding-top: 0.5rem; background: white ; border-radius: 12px; width:  90%;   padding-left: 3vw;   padding-right: 3vw;  ')
      y.setAttribute('style', ' zIndex:  1 ; ')
    }
  }
  return (

    <div className="navmainhead">
      <div className="nav" id='header'>
        <div className="mainlist">
          <a href="/"> <img className='logo' src="/images/beiyo_logo2.svg" alt="" /></a>
          <div className="pclist">
            <ul className='pcnavlist'>
              <a href="/hostel"><li><p>Hostels</p></li></a>
              <a href="https://forms.gle/GngUZDmv44AHae8i7" target='blank'><li><p>List Your Property</p></li></a>
              {/* <a href="/listyourproperty" target='blank'><li><p>List Your Property</p></li></a> */}
              <a href="/about"><li><p>About us</p></li></a>
            </ul>
            <img className='menubtn' id='open' src="/images\menuicon.svg" alt="" onClick={toggleMobileMenu} />
            <img className='menubtn' id='close' src="/images\close.png" alt="" onClick={toggleMobileMenu} style={{display:"none"}} />
          </div>
        </div>
        <ul className='mobilenavlist'>
          <a href="/hostel"><li><p>Hostels</p></li></a>
          <a href="https://forms.gle/GngUZDmv44AHae8i7" target='blank'><li><p>List Your Property</p></li></a>
          {/* <a href="/listyourproperty" target='blank'><li><p>List Your Property</p></li></a> */}
          <a href="/about"><li><p>About us</p></li></a>
        </ul>

      </div>
    </div>
  )
}
export default Navbar


document.addEventListener('scroll', () => {
  const header = document.querySelector('.nav')
  if (window.scrollY > 0) {
    header.classList.add('scrollnav')
  }
})
var prevScrollPos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;

  // Scroll down 
  if (prevScrollPos < currentScrollPos) {
    document.getElementById("header").classList.add("header-hidden");
    document.getElementById("header").classList.remove("header-visible");
  }
  // Scroll up 
  else {
    document.getElementById("header").classList.add("header-visible");
    document.getElementById("header").classList.remove("header-hidden");
  }

  prevScrollPos = currentScrollPos;
}; 