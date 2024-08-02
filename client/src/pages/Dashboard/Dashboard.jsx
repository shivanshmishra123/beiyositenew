import React, { useContext, useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useState } from 'react';
import PaymentStatus from './PaymentDetail/PaymentStatus';
import StayDetails from './StayDetails/StayDetail';
import Support from './Support/Support';
import AuthContext from '../../context/AuthContext';
import './Dashboard.css';
import "../Home page/Homestyles/nav.css"
import { cn } from '@/lib/utils';
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
    <div className='dashboard min-h-screen '>
       <div className="nav dashboardnav" id='header'>
        <div className="mainlist">
          <a href="/"> <img className='logo' id='dashboardlogo' src="/images/beiyo_logo2.svg" alt="" /></a>
          <img className='menubtn' id='dashboardOpen' src="/images\menuicon.svg" alt="" onClick={toggleMobileMenu} />
          <img className='menubtn' id='dashboardClose' src="/images\close.png" alt="" onClick={toggleMobileMenu} style={{display:"none"}} />
        </div>

        <ul className='mobilenavlist flex flex-col gap-4'>
          <li className='dashboardNavigation' > <button className={cn(activeTab==='PaymentStatus'&&'text-[#f7d442]')} onClick={() => changeTab('PaymentStatus')}>Payment</button></li>
          <li className='dashboardNavigation' >  <button className={cn(activeTab==='StayDetails'&&'text-[#f7d442]')}  onClick={() => changeTab('StayDetails')}>Stay details</button></li>
          <li className='dashboardNavigation' > <button className={cn(activeTab==='Support'&&'text-[#f7d442]')} onClick={() => changeTab('Support')}>Support</button></li>
          <li className='dashboardNavigation w-full flex justify-center ' ><button  className=' border-2 rounded-full px-10 border-black  mt-[22rem] text-2xl py-4 h-fit  text-red-700 flex items-center gap-2 justify-center'  onClick={logout}><img src="/images/logout.png" alt="" />Log out</button></li>
        </ul>
      </div>
      <div className='flex w-full py-2 pr-2 pl-1 relative'>
        <div  className='sidebar flex flex-col gap-10 border-r-2 border-black fixed h-screen'>
<div>
<a href="/"> <img className='mt-4 mb-2' src="/images/beiyo_logo2.svg" alt="" /></a>
          <div sx={{ mb: 4 }}>
            <Typography variant="h6">{user?.name}</Typography>
            <Typography variant="body2">{user?.hostel} {user?.roomNumber}</Typography>
         </div>
</div>
        <div className='flex flex-col items-start'>
          <button className={cn('text-xl border-y-2 border-black w-full text-left py-3' ,activeTab==='PaymentStatus'&&'bg-[#f7d442]')}  onClick={() => handleTabChange('PaymentStatus')}  >Payment</button>
          <button className={cn('text-xl border-b-2 border-black w-full text-left py-3',activeTab==='StayDetails'&&'bg-[#f7d442]')} onClick={() => handleTabChange('StayDetails')}>Stay details</button>
          <button className={cn('text-xl border-b-2 border-black w-full text-left py-3',activeTab==='Support'&&'bg-[#f7d442]')} onClick={() => handleTabChange('Support')}>Support</button>
        </div>
          <button  className='mt-[20rem] text-xl  text-red-700 flex items-center gap-2 justify-center mx-4 py-2 border-2 rounded-3xl' onClick={logout}><img src="/images/logout.png" alt="" />Log out</button>
        </div>
        <Box sx={{ flexGrow: 1, p: 3 }} className='main-content-dashboard'>
          {activeTab === 'PaymentStatus' && <PaymentStatus />}
          {activeTab === 'StayDetails' && <StayDetails />}
          {activeTab === 'Support' && <Support />}
        </Box>
      </div>
    </div>
  );
};

export default Dashboard;

