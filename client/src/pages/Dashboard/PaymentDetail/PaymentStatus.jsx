import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Typography, CircularProgress } from '@mui/material';

const PaymentStatus = () => {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('https://beiyo-admin.vercel.app/api/dashboard/payments', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setPayments(response.data);
      } catch (error) {
        console.error('Error fetching payments:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchPayments();
  }, []);

  if (loading) return <CircularProgress />;

  return (
    <Box>
      <Typography variant="h4" gutterBottom>Payment Status</Typography>
      {payments.map((payment) => (
        <Box key={payment._id} sx={{ mb: 2, p: 2, border: '1px solid #ccc' }}>
          <Typography variant="body1">Amount: {payment.amount}</Typography>
          <Typography variant="body2">Date: {new Date(payment.date).toLocaleDateString()}</Typography>
          <Typography variant="body2">Status: {payment.status}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default PaymentStatus;

