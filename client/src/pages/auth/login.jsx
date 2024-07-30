import React, { useState, useContext } from 'react';
import { Box, TextField, Button, Typography, CircularProgress } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await login(email, password);
      navigate('/dashboard');
    } catch (err) {
      setError('Login failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
   <div className='min-h-screen flex items-center'>
     <Box component="form" className='flex flex-col justify-center w-full items-center gap-4' onSubmit={handleSubmit} sx={{ maxHeight:'100%', maxWidth: 400, mx: 'auto', mt: 10, p: 3, border: '1px solid #ccc', borderRadius: 4 }}>
     <a href="/"> <img className='' src="/images/beiyo_logo2.svg" alt="" /></a>
      <div>
      <Typography variant="h4" align="center" >Login</Typography>
      <Typography variant="h6" align="center">Only for Beiyo Residents</Typography> 
      </div>
      {error && <Typography color="error" align="center" mb={2}>{error}</Typography>}
     <div className='flex flex-col gap-1 w-full'>
     <TextField
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        sx={{ mb: 2 }}
        required
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
        sx={{ mb: 2 }}
        required
      />
       <Link to='/forget-password'>Forget Password</Link>
       <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        disabled={loading}
      >
        {loading ? <CircularProgress size={24} /> : 'Login'}
      </Button>
     </div>
    </Box>
   
   </div>
  );
};

export default Login;
