import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PaymentStatus = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkPaymentStatus = async () => {
      const transactionId = localStorage.getItem('transactionId');
      const studentData = JSON.parse(localStorage.getItem('studentData'));
      console.log(studentData);
      if (transactionId) {
        try {
          const response = await axios.get(`https://beiyo-admin.vercel.app/api/pay/status/${transactionId}`);
          if (response.data.success === true) {
            alert('Payment successful!');

            await axios.post('http://beiyo-admin.vercel.app/api/newResident', studentData); // Save student data
            navigate('/thank-you'); // Redirect to a thank you page or desired location
          } else {
            alert('Payment failed or not completed.');
            navigate('/retry-payment'); // Redirect to a retry payment page or desired location
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
