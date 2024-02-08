import React, { useState } from 'react';
import "./Homestyles/nav.css"

function Navbar() {

  const toggleMobileMenu = () => {
    const x = document.querySelector('.nav');
    const y = document.querySelector('.page');
    const z = document.querySelector('.mobilenavlist')
    if (x.style.height === '5vh' || x.style.height === '') {
     
      x.setAttribute('style', 'justify-content:start; height:40vh; padding-top : 0rem; gap:3rem ')
      y.setAttribute('style', ' zIndex:  0 ;  opacity:0.3 ; pointerEvents: none; transition: opacity 0.3s ease-in-out')
      z.setAttribute('style','padding-top:0rem; gap:2rem')
      y.addEventListener("click",function(){
        // x.style.height = '5vh';
        x.setAttribute('style', 'justify-content:center; height:5vh; padding-top : 9vh;  ')
        y.setAttribute('style', ' zIndex:  1 ;  opacity:  1 ; pointerEvents: auto; transition: opacity 0.3s ease-in-out;')
        z.setAttribute('style','padding-top:1.2rem; gap:0rem')
    }) ; 
  }
  else {
      // x.style.height = '5vh';
      x.setAttribute('style', 'justify-content:center; height:5vh; padding-top : 9vh;  ')
      y.setAttribute('style', ' zIndex:  1 ;  opacity:  1 ; pointerEvents: auto; transition: opacity 0.3s ease-in-out;')
      z.setAttribute('style','padding-top:1.2rem; gap:0rem')
    }
  }
  return (

  <div className="nav" id='header'>
          <div className="mainlist">
          <a href="/"> <img className='logo' src="images\beiyo_logo2.svg" alt="" /></a>
             <div className="pclist">
             <ul className='pcnavlist'>
                <a href="/hostel"><li><p>Hostels</p></li></a>
                <a href="https://forms.gle/GngUZDmv44AHae8i7" target='blank'><li><p>List Your Property</p></li></a>
                <a href="/about"><li><p>About us</p></li></a>
                </ul>
           <img className='menubtn' src="images\menuicon.svg" alt="" onClick={toggleMobileMenu} />
          </div>
             </div>
                <ul className='mobilenavlist'>
                <a href="/hostel"><li><p>Hostels</p></li></a>
                <a href="https://forms.gle/GngUZDmv44AHae8i7" target='blank'><li><p>List Your Property</p></li></a>
                <a href="/about"><li><p>About us</p></li></a>
                </ul>

  </div>
  )
}
export default Navbar


document.addEventListener('scroll',()=>{
  const header = document.querySelector('.nav')
  if(window.scrollY>0){
    header.classList.add('scrollnav')
  }
})
var prevScrollPos = window.pageYOffset; 
window.onscroll = function() { 
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