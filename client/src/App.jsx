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
import HostelDetail from './pages/HostelDetail';
import Privacypolicy from './pages/FooterComponents/Privacypolicy';
import OwnerForm from './components/OwnerForm';
import HomeOfConduct from './pages/FooterComponents/HomeOfConduct';
import Achievement from './pages/FooterComponents/Achievement';
import ListYourProperty from './pages/ListYourProperty';

AOS.init();



function App() {


  return (
    <div id='main'>
    <Navbar/>
    <a  href="https://wa.me/918305523140" target="_blank">
   <div className="whatsapp">
      <img src="/images/whatsapp.svg" alt="" />
      <h3> Chat with us</h3>
    </div>
   </a>
  <Router>
         <Routes>
         <Route path="/" exact element={<Homepage/>} />
          <Route path="/about" exact element={<About/>} />
          <Route path='/listyourproperty' exact element={<ListYourProperty/>}/>
          <Route path="/hostel" exact element={<Hostel/>} />
          <Route path="/hostel/:id" exact element={<HostelDetail/>} />
          <Route path='/privacy-policy' exact element={<Privacypolicy/>}/>
          <Route path='/homeOfConduct' exact element={<HomeOfConduct/>}/>
          <Route path='/achievement' exact element={<Achievement/>}/>
         </Routes>
  </Router>
   <Footer/>
    </div>
  )
}

export default App
