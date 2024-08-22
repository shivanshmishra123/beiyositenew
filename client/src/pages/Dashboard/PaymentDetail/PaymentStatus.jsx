
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Typography, CircularProgress, Button, Collapse, IconButton } from '@mui/material';
// import { ExpandMore, ExpandLess } from '@mui/icons-material';
import AuthContext from '../../../context/AuthContext';
import { add, format } from 'date-fns';
import '../Dashboard.css';
import { ChevronDownCircle, ChevronUpCircle } from 'lucide-react';
import dayjs from 'dayjs';

const PaymentStatus = () => {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandFuturePayments, setExpandFuturePayments] = useState(false);
  const [expandPastPayments, setExpandPastPayments] = useState(false);
  const { user } = useContext(AuthContext);

  const formatDate = (date) => {
    const d = new Date(date);
    const formattedDate = format(d, "do MMMM yyyy");
    return formattedDate;
  };
  const today = dayjs();
  const dayofMonth = today.date();
  let additionalCharge = 0;

  if (dayofMonth > 7) {
    additionalCharge = (dayofMonth - 7) * 100;
  }
  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`https://beiyo-admin.vercel.app/api/dashboard/payments/${user._id}`, {
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
  }, [user._id]);

  const handleCurrentMonthPayment = async (id)=>{
     console.log(additionalCharge);
      const token = localStorage.getItem('token');
     const response = await axios.get(`https://beiyo-admin.vercel.app/api/dashboard/payment/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    const amount = response.data.amount;
    const paymentResponse = await axios.post('https://beiyo-admin.vercel.app/api/pay/initiate', {
      amount: amount+additionalCharge,
    });
    const transactionId = paymentResponse.data.data.merchantTransactionId;
    window.location.href = paymentResponse.data.data.instrumentResponse.redirectInfo.url;
    localStorage.setItem('transactionId', transactionId);
    localStorage.setItem('amount', amount);
    localStorage.setItem('month', response.data.month);
    localStorage.setItem('userId', response.data.userId);
  }

  const handleFuturePayment = async (id) => {
    const token = localStorage.getItem('token');
    const response = await axios.get(`https://beiyo-admin.vercel.app/api/dashboard/payment/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    const amount = response.data.amount;
    const paymentResponse = await axios.post('https://beiyo-admin.vercel.app/api/pay/initiate', {
      amount: amount,
    });
    const transactionId = paymentResponse.data.data.merchantTransactionId;
    window.location.href = paymentResponse.data.data.instrumentResponse.redirectInfo.url;
    localStorage.setItem('transactionId', transactionId);
    localStorage.setItem('amount', amount);
    localStorage.setItem('month', response.data.month);
    localStorage.setItem('userId', response.data.userId);
  };

  if (loading) return <CircularProgress />;

  // Get the current month and year
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  // Separate payments into current, future, and past
  const currentPayments = payments.filter(payment => {
    const paymentDate = new Date(payment.date);
    return paymentDate.getMonth() === currentMonth && paymentDate.getFullYear() === currentYear;  
  });

  const futurePayments = payments.filter(payment => {
    const paymentDate = new Date(payment.date);
    if(paymentDate.getFullYear()>currentYear){
      return paymentDate.getFullYear()>currentYear;
    }else if(paymentDate.getFullYear()===currentYear){
      if(paymentDate.getMonth()>currentMonth){
        return paymentDate.getMonth()>currentMonth;
      }
    }
  });

  const pastPayments = payments.filter(payment => {
    const paymentDate = new Date(payment.date);
    // return paymentDate.getMonth() < currentMonth || paymentDate.getFullYear() < currentYear;
    if(paymentDate.getFullYear()<currentYear){
      return paymentDate.getFullYear()<currentYear;
    }else if(paymentDate.getFullYear()===currentYear){
      if(paymentDate.getMonth()<currentMonth){
        return paymentDate.getMonth()<currentMonth;
      }
    }
  });

  return (
    <div className='paymentDetails flex flex-col gap-4'>
      <Typography variant="h4" gutterBottom>Payment Status</Typography>

    <div className='flex flex-col gap-4'>
            {/* Current Payments */}
            <div className=' flex flex-col gap-2 border-2 p-2 border-black rounded-lg'>
        <Typography variant="h6" gutterBottom>Current Month Payment</Typography>
        {currentPayments.map(payment => (
          <div key={payment._id}  className='h-fit p-2 flex justify-between items-center border-2 border-[#575756]'>
          <div className='flex flex-col gap-[0.2rem]'>
          <Typography variant="body1">Amount: {payment.amount}</Typography>
          {additionalCharge!==0&&(<Typography>Additional charge: {additionalCharge}</Typography>)}
            <Typography variant="body2">Date: {formatDate(payment.date)}</Typography>
            <Typography variant="body2">Status: {payment.status}</Typography>
            {payment.cash&&(<Typography variant="body2">Payment done by cash</Typography>)}
          </div>
            {payment.status === 'due' && <button className='bg-[#f7d442] border-black border-2 rounded-full p-2' onClick={() => handleCurrentMonthPayment(payment._id)}>Pay Now</button>}
          </div>
        ))}
      </div>

      {/* Future Payments */}
      <div className=' flex flex-col gap-4 border-2 p-2 border-black rounded-lg'>
        <div className="flex items-center justify-between ">
          <Typography variant="h6" gutterBottom>Future Payments</Typography>
          <IconButton onClick={() => setExpandFuturePayments(!expandFuturePayments)}>
            {expandFuturePayments ? <ChevronUpCircle  /> : <ChevronDownCircle />}
          </IconButton>
        </div>
        <Collapse in={expandFuturePayments}>
         <div className='flex flex-col gap-2'>
         {futurePayments.map(payment => (
            <div key={payment._id}  className='h-fit p-2  flex justify-between items-center border-2 border-[#575756] rounded-lg'>
             <div className='flex flex-col gap-[0.2rem]'>
             <Typography variant="body1">Amount: {payment.amount}</Typography>
              <Typography variant="body2">Date: {formatDate(payment.date)}</Typography>
              <Typography variant="body2">Status: {payment.status}</Typography>
              {payment.cash  &&(<Typography variant="body2">Payment done by cash</Typography>)}
             </div>
              {payment.status === 'due' && <button className='bg-[#f7d442] border-black border-2 rounded-full p-2' onClick={() => handleFuturePayment(payment._id)}>Pay Now</button>}
            </div>
          ))}
         </div>
        </Collapse>
      </div>

      {/* Past Payments */}
      <div className='flex flex-col gap-2 border-2 p-2 border-black rounded-lg'>
        <div className="flex items-center justify-between ">
          <Typography variant="h6" gutterBottom>Past Month Payments</Typography>
          <IconButton onClick={() => setExpandPastPayments(!expandPastPayments)}>
            {expandPastPayments ?<ChevronUpCircle /> : <ChevronDownCircle />}
          </IconButton>
        </div>
        <Collapse in={expandPastPayments}>
          {pastPayments.map(payment => (
            <div key={payment._id} sx={{ p: 2, border: '1px solid #ccc' }} className='h-fit p-2 flex justify-between items-center border-2 border-[#575756]'>
            <div className='flex flex-col gap-[0.2rem]'>
            <Typography variant="body1">Amount: {payment.amount}</Typography>
              <Typography variant="body2">Date: {formatDate(payment.date)}</Typography>
              <Typography variant="body2">Status: {payment.status}</Typography>
              {payment.cash===true &&(<Typography variant="body2">Payment done by cash</Typography>)}
            </div>
            </div>
          ))}
        </Collapse>
      </div>
    </div>
    </div>
  );
};

export default PaymentStatus;

