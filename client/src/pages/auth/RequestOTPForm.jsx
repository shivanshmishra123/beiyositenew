// RequestOtp.js
import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RequestOtp = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const handleRequestOtp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://beiyo-admin.vercel.app/api/login/forgetPassword', { email });
       setMessage(response.data.message);
     navigate('/reset-password');
    } catch (error) {
      setMessage('Error sending OTP');
      console.error('Error:', error);
    }
  };

  return (
    <div className='h-[100vh] flex items-center justify-center '>
      <Box className='flex flex-col gap-4 w-fit'>
      <Typography variant="h4" align="center">Forgot Password</Typography>
      <form onSubmit={handleRequestOtp} className='flex flex-col gap-4 w-full'>
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          required
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Send OTP
        </Button>
      </form>
      {message && <Typography color="textSecondary" align="center">{message}</Typography>}
    </Box>
    </div>
  );
};

export default RequestOtp;
