import React, { useContext, useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useState } from 'react';
import PaymentStatus from './PaymentDetail/PaymentStatus';
import StayDetails from './StayDetails/StayDetail';
import Support from './Support/Support';
import AuthContext from '../../context/AuthContext';
import './Dashboard.css';
import "../Home page/Homestyles/nav.css"
const Dashboard = () => {
  const toggleMobileMenu = () => {
    const x = document.querySelector('.nav');
    const y = document.querySelector('.page');
    const z = document.querySelector('#dashboardClose');
    const a = document.querySelector('#dashboardOpen');

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
  const [activeTab, setActiveTab] = useState('PaymentStatus');
  const { user, logout } = useContext(AuthContext);
  const handleTabChange = (tab) => {
    // e.preventDefault();
    setActiveTab(tab);
  };
  const changeTab = (tab)=>{
    handleTabChange(tab);
    toggleMobileMenu();
  }
  return (
    <div className='dashboard min-h-screen'>
       <div className="nav dashboardnav" id='header'>
        <div className="mainlist">
          <a href="/"> <img className='logo' id='dashboardlogo' src="/images/beiyo_logo2.svg" alt="" /></a>
          <img className='menubtn' id='dashboardOpen' src="/images\menuicon.svg" alt="" onClick={toggleMobileMenu} />
          <img className='menubtn' id='dashboardClose' src="/images\close.png" alt="" onClick={toggleMobileMenu} style={{display:"none"}} />
        </div>

        <ul className='mobilenavlist'>
          <li className='dashboardNavigation' > <button  onClick={() => changeTab('PaymentStatus')}>Payment</button></li>
          <li className='dashboardNavigation' >  <button  onClick={() => changeTab('StayDetails')}>Stay details</button></li>
          <li className='dashboardNavigation' > <button  onClick={() => changeTab('Support')}>Support</button></li>
          <li className='dashboardNavigation' ><button  sx={{ mt: 4 }} color="error" onClick={logout}>Log out</button></li>
        </ul>
      </div>
      <Box sx={{ display: 'flex' }} className='p-0'>
        <Box  className='sidebar flex flex-col'>
        <a href="/"> <img className='mt-4 mb-2' src="/images/beiyo_logo2.svg" alt="" /></a>
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6">{user?.name}</Typography>
            <Typography variant="body2">{user?.hostel} {user?.roomNumber}</Typography>
          </Box>
          <Button fullWidth  onClick={() => handleTabChange('PaymentStatus')}>Payment</Button>
          <Button fullWidth onClick={() => handleTabChange('StayDetails')}>Stay details</Button>
          <Button fullWidth onClick={() => handleTabChange('Support')}>Support</Button>
          <Button fullWidth sx={{ mt: 4 }} color="error" onClick={logout}>Log out</Button>
        </Box>
        <Box sx={{ flexGrow: 1, p: 3 }}>
          {activeTab === 'PaymentStatus' && <PaymentStatus />}
          {activeTab === 'StayDetails' && <StayDetails />}
          {activeTab === 'Support' && <Support />}
        </Box>
      </Box>
    </div>
  );
};

export default Dashboard;

