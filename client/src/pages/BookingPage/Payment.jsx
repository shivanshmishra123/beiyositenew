import React, { useEffect, useState } from 'react';
import axios from 'axios';
import api from '@/api/apiKey';
import Cookies from 'js-cookie';
import loadRazorpayScript from "@/loadPaymentfunction/loadRazorpayScript";
import { useNavigate } from 'react-router-dom';
const StepSix = ({ updatebookingDetails, onPaymentComplete, bookingDetails }) => {
  const [formFee, setFormFee] = useState(999);
  const [maintainaceCharge, setmaintainaceCharge] = useState(1000);
  const [totalAmount, setTotalAmount] = useState(formFee);
  const [selectedItems, setSelectedItems] = useState({
    formFee: true,
    maintainaceCharge: false,
    securityDeposit: false,
    extraDayPaymentAmount: false,
  });

 const navigate = useNavigate();

     

  

  const handleCheckboxChange = (item) => {
    const updatedSelection = {
      ...selectedItems,
      [item]: !selectedItems[item], // Toggle the checkbox state
    };
    setSelectedItems(updatedSelection);

    // Update booking data with the corresponding status
    let updatedTotal = 0;


    if (updatedSelection.formFee) {
      updatedTotal += Number(formFee);
    }
    if (updatedSelection.maintainaceCharge) {
      updatedTotal += Number(maintainaceCharge);
      updatebookingDetails({maintainaceChargeStatus:true})
    }
    if (updatedSelection.securityDeposit) {
      updatedTotal += Number(bookingDetails.securityDeposit);
      updatebookingDetails({securityDepositStatus:true})
    }
    if (updatedSelection.extraDayPaymentAmount) {
      updatedTotal += bookingDetails.extraDayPaymentAmount;
      updatebookingDetails({extraDayPaymentAmountStatus:true})
    }



    // Set total amount and update booking details
    setTotalAmount(updatedTotal);
    
  };

  const handlePayment = async () => {
    const scriptLoaded = await loadRazorpayScript();

    if (!scriptLoaded) {
      alert("Razorpay SDK failed to load. Please check your connection.");
      return;
    }

    try {
      // Create an order by calling the backend
      const { data: order } = await api.post("https://beiyo-admin.in/api/pay/razor/intiate", {
        amount:totalAmount,
      });

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID, // Replace with your Razorpay Key ID
        amount: order.amount,
        currency: order.currency,
        name: "BEIYO TECHNVEN PRIVATE LIMITED",
        description: "Booking Bed",
        // image: "/", // Optional
        order_id: order.id, // Pass order ID returned by backend
        handler: async (response) => {
          // Verify payment on backend
          try {
            const verification = await api.post("https://beiyo-admin.in/api/pay/razor/verify", response);
            if(verification.data.status="Payment verified"){
              try {
                const paymentSaveResponse = await api.post(`https://beiyo-admin.in/api/newResident/websiteBooking`, {
                  name: bookingDetails.firstName + ' ' + bookingDetails.lastName,
                  email: bookingDetails.email,
                  mobileNumber: bookingDetails.mobileNumber,
                  hostelId: bookingDetails.hostelId,
                  roomNumberId: bookingDetails.roomNumberId,
                  dateJoined: bookingDetails.dateJoined,
                  rent: bookingDetails.rent,
                  deposit: bookingDetails.securityDeposit,
                  depositStatus: bookingDetails.securityDepositStatus,
                  maintainaceCharge: bookingDetails.maintainaceCharge,
                  maintainaceChargeStatus: bookingDetails.maintainaceChargeStatus,
                  formFee: bookingDetails.formFee,
                  formFeeStatus: bookingDetails.formFeeStatus,
                  contractTerm: bookingDetails.contractTerm,
                  extraDayPaymentAmount: bookingDetails.extraDayPaymentAmount,
                  extraDayPaymentAmountStatus: bookingDetails.extraDayPaymentAmountStatus,
                  extraDays: bookingDetails.remainingDays,
                  gender: bookingDetails.gender
                });
                const token = paymentSaveResponse.data.token;
                Cookies.set('token', token);
                navigate('/dashboard');
              } catch (error) {
                console.error('Error saving payment:', error);
              }
            }
            // alert("Payment successful! " + verification.data.status);
          } catch (error) {
            alert("Payment verification failed! " + error.response.data.error);
          }
        },
        prefill: {
          name: bookingDetails.firstName+" "+bookingDetails.lastName, // Replace with actual data if available
          email: bookingDetails.email,
          contact: bookingDetails.mobileNumber,
        },
        theme: {
          color: "#f7d441",
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      alert("Failed to create Razorpay order. Please try again.");
      console.error(error);
    }



  };

  return (
    <div className="bg-white p-5 shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">5. Payment</h2>
      <div className="bg-yellow-100 p-3 rounded mb-4">
        <p className="text-orange-500">
          You have to pay the token amount before move-in and you can pay rent and security deposit in advance. Rent will start from the selected move-in date.
        </p>
      </div>

      <div className="mb-4">
        <div>
          <label className="flex items-center mb-2">
            <input 
              type="checkbox" 
              checked={selectedItems.formFee}
              onChange={() => handleCheckboxChange('formFee')}
              className="mr-2"
              disabled
            />
            Token Amount - ₹{formFee}
          </label>
        </div>
        <div>
          <label className="flex items-center mb-2">
            <input 
              type="checkbox" 
              checked={selectedItems.maintainaceCharge}
              onChange={() => handleCheckboxChange('maintainaceCharge')}
              className="mr-2"
            />
            Maintance Charges - ₹{maintainaceCharge}
          </label>
        </div>
        <div>
          <label className="flex items-center mb-2">
            <input 
              type="checkbox" 
              checked={selectedItems.securityDeposit}
              onChange={() => handleCheckboxChange('securityDeposit')}
              className="mr-2"
            />
            Security Deposit Amount [1 Month Rent] - ₹{bookingDetails.securityDeposit}
          </label>
        </div>
        <div>
          <label className="flex items-center mb-2">
            <input 
              type="checkbox" 
              checked={selectedItems.extraDayPaymentAmount}
              onChange={() => handleCheckboxChange('extraDayPaymentAmount')}
              className="mr-2"
            />
            Advance Rent Amount [For {bookingDetails.remainingDays} Day] - ₹{bookingDetails.extraDayPaymentAmount}
          </label>
        </div>
      </div>

      <div className="mt-4">
        <p className="text-lg font-bold">Total Amount: ₹{totalAmount}</p>
      </div>

      <p className="mt-4 text-sm text-gray-500">
        By clicking on the payment button you agree to our Terms and conditions.
      </p>

      <button 
        className="mt-4 bg-green-500 text-white w-full py-2 rounded"
        onClick={handlePayment}
      >
        Pay ₹{totalAmount}
      </button>

      <ul className="mt-4 text-xs text-gray-600">
        <li>• A minimum token amount of Rs. 999 per bed is required to confirm your booking.</li>
        <li>• Before moving in, you must pay the listed refundable security deposit and rent for the current month.</li>
        <li>• Room and bed allocation is at the discretion of the management and representatives.</li>
        <li>• Rent, including any additional charges, must be paid before the 5th of each month to avoid late fees.</li>
      </ul>
    </div>
  );
};

export default StepSix;
