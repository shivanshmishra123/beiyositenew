// Layout.js
import React from 'react';
import { useLocation } from 'react-router-dom';
// Import your Navbar component
import Footer from '@/pages/Home page/Footer';
import Navbar from '@/pages/Home page/Nav';

const Layout = ({ children }) => {
  const location = useLocation();
  
  // Define paths where the navbar should not be displayed
  const noNavbarPaths = ['/dashboard','/login'];
  const noFooterPaths =['/dashboard']
  // Check if the current path is in the no-navbar paths list
  const showNavbar = !noNavbarPaths.includes(location.pathname);
  const showFooter = !noFooterPaths.includes(location.pathname); 
  return (
    <div>
      {showNavbar && <Navbar />}
      <main>{children}</main>
      {showFooter && <Footer/>}
    </div>
  );
};

export default Layout;
