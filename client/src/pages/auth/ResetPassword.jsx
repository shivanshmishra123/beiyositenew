// ResetPassword.js
import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import axios from 'axios';

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://beiyo-admin.vercel.app/api/login/resetPassword', {
        email,
        otp,
        newPassword,
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Error resetting password');
      console.error('Error:', error);
    }
  };

  return (
    <div className='flex h-[100vh] items-center justify-center gap-4'>
          <Box className='flex flex-col gap-4'>
      <Typography variant="h4" align="center">Reset Password</Typography>
      <form onSubmit={handleResetPassword} className='flex flex-col gap-4'>
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          required
        />
        <TextField
          label="OTP"
          type="text"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          fullWidth
          required
        />
        <TextField
          label="New Password"
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          fullWidth
          required
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Reset Password
        </Button>
      </form>
      {message && <Typography color="textSecondary" align="center">{message}</Typography>}
    </Box>
    </div>
  );
};

export default ResetPassword;
