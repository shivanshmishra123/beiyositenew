import { useState } from 'react'
import '@radix-ui/themes/styles.css';
import './App.css'
import 'swiper/css';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Hostel from './pages/Hostel';
import Navbar from './pages/Home page/Nav';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Footer from './pages/Home page/Footer';
AOS.init();



function App() {


  return (
    <div id='main'>
    <Navbar/>
    <a  href="https://wa.me/918305523140">
   <div className="whatsapp">
      <img src="/images/whatsapp.svg" alt="" />
      <h3>Chat with us</h3>
    </div>
   </a>
  <Router>
         <Routes>
         <Route path="/" exact element={<Homepage/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/hostel" element={<Hostel/>} />
         </Routes>
  </Router>
   <Footer/>
    </div>
  )
}

export default App
