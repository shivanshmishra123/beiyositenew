import React, { useState } from 'react';
import "./Homestyles/nav.css"

function Navbar() {

  const toggleMobileMenu = () => {
    const x = document.querySelector('.mobilenav');
    const y = document.querySelector('.homepage');
    if (x.style.height === '0px' || x.style.height === '') {
      x.style.height = '22rem';
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

  <div className="nav" id='header'>
           <a href="/"> <img className='logo' src="images\beiyo_logo2.svg" alt="" /></a>
                <ul>
                <a href="/hostel"><li><p>Hostels</p></li></a>
                <a href="https://forms.gle/GngUZDmv44AHae8i7" target='blank'><li><p>List</p></li></a>
                <a href="/about"><li><p>About us</p></li></a>
                </ul>
           <img className='menubtn' src="images\menuicon.svg" alt="" onClick={toggleMobileMenu} />

  <div className="mobilenav">
                <ul>
                <a href="/hostel"><li><p>Hostels</p></li></a>
                <a href="https://forms.gle/GngUZDmv44AHae8i7" target='blank'><li><p>List</p></li></a>
                <a href="/about"><li><p>About us</p></li></a>
                </ul>
  </div>
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