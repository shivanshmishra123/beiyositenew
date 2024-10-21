import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import api from '@/api/apiKey';
import axios from 'axios';


const PaymentStatus = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkPaymentStatus = async () => {
      const transactionId = localStorage.getItem('transactionId');
      const paymentId = localStorage.getItem('paymentId');
      const bookingData = JSON.parse(localStorage.getItem('bookingData'));
      const duePaymentStatus = JSON.parse(localStorage.getItem('duePaymentStatus'));
      const duePaymentId = localStorage.getItem('duePaymentId');
      console.log(paymentId);
     
      if (transactionId) {
        try {
          const response = await api.get(`https://beiyo-admin.in/api/pay/status/${transactionId}`);
          if (response.data.success === true) {
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
                const paymentSaveResponse = await api.post(`https://beiyo-admin.in/api/newResident/websiteBooking`,{
                  name:bookingData.firstName+' '+bookingData.lastName,
                   email:bookingData.email,
                    mobileNumber:bookingData.mobileNumber,
                    hostelId:bookingData.hostelId,
                    roomNumberId:bookingData.roomNumberId,
                    dateJoined:bookingData.dateJoined,
                    rent:bookingData.rent,
                    deposit:bookingData.securityDeposit,
                    depositStatus:bookingData.securityDepositStatus,
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
                localStorage.removeItem('bookingData');
                navigate('/login');
              } catch (error) {
                console.error('Error saving payment:', error);
              } 
            }
            if(duePaymentStatus&&duePaymentId){
              try {
                const duePaymentResponseSave = await api.put(`https://beiyo-admin.in/api/dashboard/payment/dueAmount/onlinePayed/${duePaymentId}`,{
                  maintainaceChargeStatus: duePaymentStatus.maintainaceChargeStatus,
                  depositStatus:duePaymentStatus.securityDepositStatus,
                  extraDayPaymentStatus:duePaymentStatus.extraDayPaymentStatus
                })
                localStorage.removeItem(duePaymentStatus);
                localStorage.removeItem(duePaymentId);
                navigate('/dashboard');
              } catch (error) {
                console.log(error);
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
