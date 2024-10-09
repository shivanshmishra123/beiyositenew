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
      const bookingData = localStorage.getItem('bookingData')
      console.log(paymentId);
     
      if (transactionId) {
        try {
          const response = await api.get(`https://beiyo-admin.in/api/pay/status/${transactionId}`);
          if (response.data.success === true) {
            // alert('Payment successful!');

            // Save payment info if transaction ID is present
            if(paymentId){
              try {
                const paymentSaveResponse = await api.put(`https://beiyo-admin.in/api/dashboard/onlinePaymentSave/${paymentId}`);
                console.log('Payment Save Response:', paymentSaveResponse.data);
                localStorage.removeItem('paymentId');
                navigate('/dashboard');
              } catch (error) {
                console.error('Error saving payment:', error);
              } 
            }
            if(bookingData){
              try {
                const paymentSaveResponse = await api.post(`http://localhost:5000/api/newResident/websiteBooking`,{
                  name:bookingData.firstName+' '+bookingData.lastName,
                   email:bookingData.email,
                    mobileNumber:bookingData.mobileNumber,
                    hostelId:bookingData.hostelId,
                    roomNumberId:bookingData.roomNumberId,
                    dateJoined:bookingData.dateJoined,
                    rent:bookingData.rent,
                    deposit:bookingData.securityDeposit,
                    depositStatus:bookingData.securityDepositStatus,
                    firstMonthRentStatus:bookingData.rentStatus,
                    maintainaceCharge:bookingData.maintainaceCharge,
                    maintainaceChargeStatus:bookingData.maintainaceChargeStatus,
                    formFee:bookingData.formFee,
                    formFeeStatus:bookingData.formFeeStatus,
                    contractTerm:bookingData.contractTerm,
                    extraDayPaymentAmount:bookingData.extraDayPaymentAmount,
                    extraDayPaymentAmountStatus:bookingData.extraDayPaymentAmountStatus,
                    extraDays:bookingData.remainingDays,
                    gender:bookingData.gender
                });
                console.log('Booking Data', bookingData);
                localStorage.removeItem('bookingData');
                console.log(paymentSaveResponse.status);
                navigate('/login');
              } catch (error) {
                console.error('Error saving payment:', error);
              } 
            }
            
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
