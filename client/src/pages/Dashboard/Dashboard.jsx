import React, { useContext, useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useState } from 'react';
import PaymentStatus from './PaymentDetail/PaymentStatus';
import StayDetails from './StayDetails/StayDetail';
import Support from './Support/Support';
import AuthContext from '../../context/AuthContext';
import './Dashboard.css';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('PaymentStatus');
  const { user, logout } = useContext(AuthContext);
  useEffect(() => {
    console.log(user);  
  }, [user])
  const handleTabChange = (tab) => {
    // e.preventDefault();
    setActiveTab(tab);
  };
  return (
    <div className='dashboard'>
      <Box sx={{ display: 'flex', minHeight: '100vh' }}>
        <Box sx={{ width: 250, bgcolor: '#f0f0f0', p: 2 }}>
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6">{user?.name}</Typography>
            <Typography variant="body2">{user?.hostel}</Typography>
            <Typography variant="body2">{user?.roomNumber}</Typography>
          </Box>
          <Button fullWidth onClick={() => handleTabChange('PaymentStatus')}>Payment</Button>
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

