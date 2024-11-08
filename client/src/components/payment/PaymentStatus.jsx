// import React, { useContext, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { CircularProgress } from '@mui/material';
// import api from '@/api/apiKey';
// import axios from 'axios';


// const PaymentStatus = () => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     const checkPaymentStatus = async () => {
//       const transactionId = sessionStorage.getItem('transactionId');
//       const paymentId = sessionStorage.getItem('paymentId');
//       const bookingData = JSON.parse(sessionStorage.getItem('bookingData'));
//       const duePaymentStatus = JSON.parse(sessionStorage.getItem('duePaymentStatus'));
//       const duePaymentId = sessionStorage.getItem('duePaymentId');
//       console.log(paymentId);
     
//       if (transactionId) {
//         try {
//           const response = await api.get(`https://beiyo-admin.in/api/pay/status/${transactionId}`);
//           if (response.data.success === true) {
//             if(paymentId){
//               try {
//                 const paymentSaveResponse = await api.put(`https://beiyo-admin.in/api/dashboard/onlinePaymentSave/${paymentId}`);
//                 console.log('Payment Save Response:', paymentSaveResponse.data);
//                 sessionStorage.removeItem('paymentId');
//                 navigate('/dashboard');
//               } catch (error) {
//                 console.error('Error saving payment:', error);
//               } 
//             }
//             if(bookingData){
//               try {
//                 const paymentSaveResponse = await api.post(`https://beiyo-admin.in/api/newResident/websiteBooking`,{
//                   name:bookingData.firstName+' '+bookingData.lastName,
//                    email:bookingData.email,
//                     mobileNumber:bookingData.mobileNumber,
//                     hostelId:bookingData.hostelId,
//                     roomNumberId:bookingData.roomNumberId,
//                     dateJoined:bookingData.dateJoined,
//                     rent:bookingData.rent,
//                     deposit:bookingData.securityDeposit,
//                     depositStatus:bookingData.securityDepositStatus,
//                     maintainaceCharge:bookingData.maintainaceCharge,
//                     maintainaceChargeStatus:bookingData.maintainaceChargeStatus,
//                     formFee:bookingData.formFee,
//                     formFeeStatus:bookingData.formFeeStatus,
//                     contractTerm:bookingData.contractTerm,
//                     extraDayPaymentAmount:bookingData.extraDayPaymentAmount,
//                     extraDayPaymentAmountStatus:bookingData.extraDayPaymentAmountStatus,
//                     extraDays:bookingData.remainingDays,
//                     gender:bookingData.gender
//                 });
//                 sessionStorage.removeItem('bookingData');
//                 const token = paymentSaveResponse.data.token
//                 localStorage.setItem('token', token);
//                 navigate('/dashboard');
//               } catch (error) {
//                 console.error('Error saving payment:', error);
//               } 
//             }
//             if(duePaymentStatus&&duePaymentId){
//               try {
//                 const duePaymentResponseSave = await api.put(`https://beiyo-admin.in/api/dashboard/payment/dueAmount/onlinePayed/${duePaymentId}`,{
//                   maintainaceChargeStatus: duePaymentStatus.maintainaceChargeStatus,
//                   depositStatus:duePaymentStatus.securityDepositStatus,
//                   extraDayPaymentStatus:duePaymentStatus.extraDayPaymentStatus
//                 })
//                 sessionStorage.removeItem(duePaymentStatus);
//                 sessionStorage.removeItem(duePaymentId);
//                 navigate('/dashboard');
//               } catch (error) {
//                 console.log(error);
//               }
//             }    
//           } else {
//             alert('Payment failed or not completed.');
//             navigate('/retry-payment');
//           }
//         } catch (error) {
//           console.error('Error checking payment status:', error);
//         }
//       }
//     };
//     checkPaymentStatus();
//   }, [navigate]);

//   return (
//     <div className='h-100 flex items-center justify-center'>
//       <CircularProgress/>
//     </div>
//   );
// };

// export default PaymentStatus;


import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import api from '@/api/apiKey';
import Cookies from 'js-cookie';
import axios from 'axios';

const PaymentStatus = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkPaymentStatus = async () => {
      const transactionId = Cookies.get('transactionId');
      const paymentId = Cookies.get('paymentId');
      const bookingData = Cookies.get('bookingData') ? JSON.parse(Cookies.get('bookingData')) : null;
      const duePaymentStatus = Cookies.get('duePaymentStatus') ? JSON.parse(Cookies.get('duePaymentStatus')) : null;
      const duePaymentId = Cookies.get('duePaymentId');
      console.log(paymentId);

      if (transactionId) {
        try {
          const response = await api.get(`https://beiyo-admin.in/api/pay/status/${transactionId}`);
          if (response.data.success === true) {
            if (paymentId) {
              try {
                const paymentSaveResponse = await api.put(`https://beiyo-admin.in/api/dashboard/onlinePaymentSave/${paymentId}`);
                console.log('Payment Save Response:', paymentSaveResponse.data);
                Cookies.remove('paymentId');
                navigate('/dashboard');
              } catch (error) {
                console.error('Error saving payment:', error);
              }
            }
            if (bookingData) {
              try {
                const paymentSaveResponse = await api.post(`https://beiyo-admin.in/api/newResident/websiteBooking`, {
                  name: bookingData.firstName + ' ' + bookingData.lastName,
                  email: bookingData.email,
                  mobileNumber: bookingData.mobileNumber,
                  hostelId: bookingData.hostelId,
                  roomNumberId: bookingData.roomNumberId,
                  dateJoined: bookingData.dateJoined,
                  rent: bookingData.rent,
                  deposit: bookingData.securityDeposit,
                  depositStatus: bookingData.securityDepositStatus,
                  maintainaceCharge: bookingData.maintainaceCharge,
                  maintainaceChargeStatus: bookingData.maintainaceChargeStatus,
                  formFee: bookingData.formFee,
                  formFeeStatus: bookingData.formFeeStatus,
                  contractTerm: bookingData.contractTerm,
                  extraDayPaymentAmount: bookingData.extraDayPaymentAmount,
                  extraDayPaymentAmountStatus: bookingData.extraDayPaymentAmountStatus,
                  extraDays: bookingData.remainingDays,
                  gender: bookingData.gender
                });
                Cookies.remove('bookingData');
                const token = paymentSaveResponse.data.token;
                Cookies.set('token', token);
                navigate('/dashboard');
              } catch (error) {
                console.error('Error saving payment:', error);
              }
            }
            if (duePaymentStatus && duePaymentId) {
              try {
                const duePaymentResponseSave = await api.put(`https://beiyo-admin.in/api/dashboard/payment/dueAmount/onlinePayed/${duePaymentId}`, {
                  maintainaceChargeStatus: duePaymentStatus.maintainaceChargeStatus,
                  depositStatus: duePaymentStatus.securityDepositStatus,
                  extraDayPaymentStatus: duePaymentStatus.extraDayPaymentStatus
                });
                Cookies.remove('duePaymentStatus');
                Cookies.remove('duePaymentId');
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
      <CircularProgress />
    </div>
  );
};

export default PaymentStatus;
