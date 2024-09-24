import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const PaymentStatus = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkPaymentStatus = async () => {
      const transactionId = localStorage.getItem('transactionId');
      const studentData = JSON.parse(localStorage.getItem('studentData'));
      const amount = localStorage.getItem('amount');
      const month = localStorage.getItem('month');
      const userId = localStorage.getItem('userId');
      const paymentId = localStorage.getItem('paymentid');
      console.log(studentData);
      if (transactionId) {
        try {
          const response = await axios.get(`https://beiyo-admin.in/api/pay/status/${transactionId}`);
          if (response.data.success === true) {
            alert('Payment successful!');

            // Save payment info if transaction ID is present
              try {
                const paymentSaveResponse = await axios.post(`https://beiyo-admin.in/api/dashboard/paymentSave/${paymentId}`);
                console.log('Payment Save Response:', paymentSaveResponse.data);
                navigate('/dashboard');
              } catch (error) {
                console.error('Error saving payment:', error);
              }
            

            // Save student data if present
            // if (studentData) {
            //   try {
            //     const newResidentResponse = await axios.post('https://beiyo-admin.vercel.app/api/newResident', studentData);
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
    <div>
      Checking payment status...
    </div>
  );
};

export default PaymentStatus;
