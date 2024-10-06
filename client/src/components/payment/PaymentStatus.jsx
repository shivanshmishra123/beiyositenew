import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import api from '@/api/apiKey';


const PaymentStatus = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkPaymentStatus = async () => {
      const transactionId = localStorage.getItem('transactionId');
      const paymentId = localStorage.getItem('paymentId');
      console.log(paymentId);
     
      if (transactionId) {
        try {
          const response = await api.get(`https://beiyo-admin.in/api/pay/status/${transactionId}`);
          if (response.data.success === true) {
            // alert('Payment successful!');

            // Save payment info if transaction ID is present
              try {
                const paymentSaveResponse = await api.put(`https://beiyo-admin.in/api/dashboard/onlinePaymentSave/${paymentId}`);
                console.log('Payment Save Response:', paymentSaveResponse.data);
                navigate('/dashboard');
              } catch (error) {
                console.error('Error saving payment:', error);
              } 
            

            // Save student data if present
            // if (studentData) {
            //   try {
            //     const newResidentResponse = await api.post('https://beiyo-admin.vercel.app/api/newResident', studentData);
            //     console.log('New Resident Response:', newResidentResponse.data);
            //     navigate('/thank-you');
            //   } catch (error) {
            //     console.error('Error saving new resident:', error);
            //   }
            // }
          } else {
            alert('Payment failed or not completed.');
            navigate('/retry-payment');
          }
        } catch (error) {
          console.error('Error checking payment status:', error);
        }
      }
    };
    checkPaymentStatus();
  }, [navigate]);

  return (
    <div className='h-100 flex items-center justify-center'>
      <CircularProgress/>
    </div>
  );
};

export default PaymentStatus;
