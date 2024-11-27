import { useState } from 'react'
import '@radix-ui/themes/styles.css';
import './App.css'
import 'swiper/css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';

import Homepage from './pages/Homepage';
import About from './pages/About';
import Hostel from './pages/Hostel';
import Navbar from './pages/Home page/Nav';

import HostelDetail from './pages/HostelDetail';
import Privacypolicy from './pages/FooterComponents/Privacypolicy';
import OwnerForm from './components/OwnerForm';
import HomeOfConduct from './pages/FooterComponents/HomeOfConduct';
import Achievement from './pages/FooterComponents/Achievement';
import ListYourProperty from './pages/ListYourProperty';
import TermsandConditon from './pages/FooterComponents/TermsandConditon';
import RefundPolicy from './pages/FooterComponents/RefundPolicy';
import Payment from './components/payment/Payment';
// import PaymentStatus from './components/payment/PaymentStatus';
import Dashboard from './pages/Dashboard/Dashboard';
import { AuthProvider } from './context/AuthContext';
import Login from './pages/auth/login';
import ProtectedRoute from './pages/auth/protectedRoutes';
import './index.css'

import Footer from './pages/Home page/Footer';
import Layout from './context/LayoutContext';
import RequestOtp from './pages/auth/RequestOTPForm';
import ResetPassword from './pages/auth/ResetPassword';

import MapComponent from './components/googleMapComponent/page';
import BookingPage from './pages/BookingPage/Bookingpage';
import DiwaliLoader from './components/festiveSeason/DiwaliLoader';
// import PaymentRazor from './testing/Payment';

AOS.init();


function App() {
  // const [loading, setLoading] = useState(true);

  // const handleLoaderComplete = () => {
  //   setLoading(false);
  // };
  return (
    <div id='main' className='bg-gray-100'>    
  {/* {loading ? (
        <DiwaliLoader onComplete={handleLoaderComplete} />
      ) : ( */}
        <>
    <a  href="https://wa.me/918305523140" target="_blank">
   <div className="whatsapp">
      <img src="/images/whatsapp.svg" alt="" />
      <h3> Chat with us</h3>
    </div>
   </a>
   <AuthProvider>
  <Router>
    <Layout>
         <Routes>
          <Route path="/" exact element={<Homepage/>}  />
          <Route path="/about" exact element={<About/>} />
          <Route path='/listyourproperty' exact element={<ListYourProperty/>}/>
          <Route path="/hostel" exact element={<Hostel/>} />
          <Route path="/hostel/:id" exact element={<HostelDetail/>} />
          <Route path='/privacy-policy' exact element={<Privacypolicy/>}/>
          <Route path='/homeOfConduct' exact element={<HomeOfConduct/>}/>
          <Route path='/achievement' exact element={<Achievement/>}/>
          <Route path='/termsandcondition' exact element={<TermsandConditon/>}/>
          <Route path='/refund-policy' exact element={<RefundPolicy/>}/>
          <Route path='/payment' exact element={<Payment/>}/>
          {/* <Route path='/paymentstatus' exact element={<PaymentStatus/>}/>  */}
          <Route path='/map' exact element={<MapComponent/>}/> 
          {/* <Route path='/dashboard' exact element={<Dashboard/>}/> */}
          <Route path='/bookingpage/:hostelId' exact element={<BookingPage/>}/>
         </Routes>
  {/* </Router> */}
 
  {/* <Router> */}
  <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/forget-password" element={<RequestOtp />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route
            path="/dashboard/*"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
             </Routes>
             </Layout>
             </Router>
          </AuthProvider>
          </>
      {/* )} */}
    </div>
          
  )
}

export default App
