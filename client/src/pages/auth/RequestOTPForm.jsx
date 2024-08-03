// RequestOtp.js
import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useToast } from "@/components/ui/use-toast"


const RequestOtp = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast()
  const [message, setMessage] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [otpsendcomponent,setotpSend]=useState(false);
  const [verifyOtpcomponent,setVerifyOtp]= useState(false);
  const [confirmPassword,setConfirmPassword]=useState('');
  const [resetPasswordComponent,setResetPassword]=useState(false);
  const navigate = useNavigate();
  const handleRequestOtp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://beiyo-admin.vercel.app/api/login/forgetPassword', { email });
       setMessage(response.data.message);
       setotpSend(true);
       setVerifyOtp(true);  
    } catch (error) {
      setMessage('Error sending OTP');
      console.error('Error:', error);
    }
  };
  const handleVerifyotp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://beiyo-admin.vercel.app/api/login/resetPassword', {
        email,
        otp,
      });
      setMessage(response.data.message);
      setResetPassword(true);
      setVerifyOtp(false);
    } catch (error) {
      setMessage('Error resetting password');
      console.error('Error:', error);
    }
  };
  const handleResetPassword = async (e) => {
    e.preventDefault();
   if(newPassword===confirmPassword){
    try {
      const response = await axios.post('https://beiyo-admin.vercel.app/api/login/updatePassword', {
        email,
        newPassword
      });
      setMessage(response.data.message);
      toast({
        title: "Password Updated",
      })
      navigate('/login');
    } catch (error) {
      setMessage('Error resetting password');
      console.error('Error:', error);
    }
   }
  };

  return (
    <div className='h-[100vh] flex items-center justify-center '>
      <Box className='flex flex-col gap-4 w-fit border-black border-2 p-8 rounded-lg'>
      <Typography variant="h4" align="center">Forgot Password</Typography>
     {
      !otpsendcomponent?(
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
      ):null
     }
      {message && <Typography color="textSecondary" align="center">{message}</Typography>}
     {verifyOtpcomponent?(
       <form onSubmit={handleVerifyotp} className='flex flex-col gap-4'>
       <TextField
         label="OTP"
         type="text"
         value={otp}
         onChange={(e) => setOtp(e.target.value)}
         fullWidth
         required
       />
       <Button type="submit" variant="contained" color="primary" fullWidth>
        Verify Your OTP
       </Button>
     </form>
     ):null}
{
      resetPasswordComponent?(
        <form onSubmit={handleResetPassword} className='flex flex-col gap-4'>
        <TextField
            label="New Password"
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            fullWidth
            required
          />
         <TextField
            label="Confirm your Password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            fullWidth
            required
          />
         <Button type="submit" variant="contained" color="primary" fullWidth>
           Reset Password
         </Button>
       </form>
      ):null
}
    </Box>
    </div>
  );
};

export default RequestOtp;
