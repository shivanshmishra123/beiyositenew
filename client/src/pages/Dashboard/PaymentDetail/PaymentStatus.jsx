// import React, { useContext, useEffect, useState } from 'react';
// import axios from 'axios';
// import { Box, Typography, CircularProgress, Button } from '@mui/material';
// import AuthContext from '../../../context/AuthContext';
// import {format} from 'date-fns'
// import '../Dashboard.css';
// const PaymentStatus = () => {
//   const [payments, setPayments] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const { user} = useContext(AuthContext);
//   const formatdate = (date) => {
//     const d = new Date(date);

//     // Custom format to include ordinal suffix
//     const formattedDate = format(d, "do MMMM yyyy");

//     return formattedDate;
//   };
//   useEffect(() => {
//     const fetchPayments = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         const response = await axios.get(`https://beiyo-admin.vercel.app/api/dashboard/payments/${user._id}`, {
//           headers: { Authorization: `Bearer ${token}` }
//         });
//         setPayments(response.data);
//       } catch (error) {
//         console.error('Error fetching payments:', error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchPayments();
//   }, []);
//   const handlePayment = async (id) => {
//     const token = localStorage.getItem('token');
//     const response = await axios.get(`https://beiyo-admin.vercel.app/api/dashboard/payment/${id}`, {
//       headers: { Authorization: `Bearer ${token}` }
//     });
//     const amount = response.data.amount;
//     console.log(amount);
//     const paymentResponse = await axios.post('https://beiyo-admin.vercel.app/api/pay/initiate', {
//       amount: amount, // Placeholder for the amount
//     });
//     const transactionId = paymentResponse.data.data.merchantTransactionId;
//     window.location.href = paymentResponse.data.data.instrumentResponse.redirectInfo.url;
//     localStorage.setItem('transactionId', transactionId);
//     localStorage.setItem('amount', amount);
//     localStorage.setItem('month', response.data.month);
//     localStorage.setItem('userId', response.data.userId);
//   }

//   if (loading) return <CircularProgress />;

//   return (
//     <div className='paymentDetails'>
//       <Typography variant="h4" gutterBottom>Payment Status</Typography>
//       <Box className='paymentDetailstatusbox flex flex-col gap-2 ' >
//       {payments.map((payment) => (
//         <Box key={payment._id} sx={{  p: 2, border: '1px solid #ccc'}} className='h-100'>
//           <Typography variant="body1">Amount: {payment.amount}</Typography>
//           <Typography variant="body2">Date: {formatdate(payment.date)}</Typography>
//           <Typography variant="body2">Status: {payment.status}</Typography>
//           {payment.status==='due' && <Button onClick={()=>handlePayment(payment._id)}>Pay Now</Button>}
//         </Box>
//       ))}
//       </Box>
//     </div>
//   );
// };

// export default PaymentStatus;


import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Typography, CircularProgress, Button, Collapse, IconButton } from '@mui/material';
// import { ExpandMore, ExpandLess } from '@mui/icons-material';
import AuthContext from '../../../context/AuthContext';
import { format } from 'date-fns';
import '../Dashboard.css';
import { ChevronDownCircle, ChevronUpCircle, ExpandIcon } from 'lucide-react';

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

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`https://beiyo-admin.vercel.app/api/dashboard/payments/${user._id}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setPayments(response.data);
        console.log(currentYear)
      } catch (error) {
        console.error('Error fetching payments:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchPayments();
  }, [user._id]);

  const handlePayment = async (id) => {
    const token = localStorage.getItem('token');
    const response = await axios.get(`https://beiyo-admin.vercel.app/api/dashboard/payment/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    const amount = response.data.amount;
    console.log(amount);
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
    <div className='paymentDetails flex flex-col'>
      <Typography variant="h4" gutterBottom>Payment Status</Typography>

    <div className='flex flex-col gap-4'>
            {/* Current Payments */}
            <div className=' flex flex-col gap-2'>
        <Typography variant="h6" gutterBottom>Current Payment</Typography>
        {currentPayments.map(payment => (
          <Box key={payment._id} sx={{ p: 2, border: '1px solid #ccc' }} className='h-100'>
            <Typography variant="body1">Amount: {payment.amount}</Typography>
            <Typography variant="body2">Date: {formatDate(payment.date)}</Typography>
            <Typography variant="body2">Status: {payment.status}</Typography>
            {payment.status === 'due' && <Button onClick={() => handlePayment(payment._id)}>Pay Now</Button>}
          </Box>
        ))}
      </div>

      {/* Future Payments */}
      <div className=' flex flex-col gap-2 border-2 p-2 border-black rounded-lg'>
        <Box className="flex items-center justify-between">
          <Typography variant="h6" gutterBottom>Future Payments</Typography>
          <IconButton onClick={() => setExpandFuturePayments(!expandFuturePayments)}>
            {expandFuturePayments ? <ChevronUpCircle /> : <ChevronDownCircle />}
          </IconButton>
        </Box>
        <Collapse in={expandFuturePayments}>
          {futurePayments.map(payment => (
            <Box key={payment._id} sx={{ p: 2, border: '1px solid #ccc' }} className='h-100'>
              <Typography variant="body1">Amount: {payment.amount}</Typography>
              <Typography variant="body2">Date: {formatDate(payment.date)}</Typography>
              <Typography variant="body2">Status: {payment.status}</Typography>
              {payment.status === 'due' && <Button onClick={() => handlePayment(payment._id)}>Pay Now</Button>}
            </Box>
          ))}
        </Collapse>
      </div>

      {/* Past Payments */}
      <div className='flex flex-col gap-2 border-2 p-2 border-black rounded-lg'>
        <Box className="flex items-center justify-between">
          <Typography variant="h6" gutterBottom>Past Payments</Typography>
          <IconButton onClick={() => setExpandPastPayments(!expandPastPayments)}>
            {expandPastPayments ?<ChevronUpCircle /> : <ChevronDownCircle />}
          </IconButton>
        </Box>
        <Collapse in={expandPastPayments}>
          {pastPayments.map(payment => (
            <Box key={payment._id} sx={{ p: 2, border: '1px solid #ccc' }} className='h-100'>
              <Typography variant="body1">Amount: {payment.amount}</Typography>
              <Typography variant="body2">Date: {formatDate(payment.date)}</Typography>
              <Typography variant="body2">Status: {payment.status}</Typography>
            </Box>
          ))}
        </Collapse>
      </div>
    </div>
    </div>
  );
};

export default PaymentStatus;

