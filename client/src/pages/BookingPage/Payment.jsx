import React, { useEffect, useState } from 'react';
import axios from 'axios';
import api from '@/api/apiKey';

const StepSix = ({ updateBookingData, onPaymentComplete, bookingDetails }) => {
  const [formFee, setFormFee] = useState(1);
  const [maintainaceCharge, setmaintainaceCharge] = useState(1000);
  const [totalAmount, setTotalAmount] = useState(formFee);
  const [selectedItems, setSelectedItems] = useState({
    formFee: true,
    maintainaceCharge: false,
    securityDeposit: false,
    extraDayPaymentAmount: false,
  });

 

     

  

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
      updateBookingData({maintainaceChargeStatus:true})
    }
    if (updatedSelection.securityDeposit) {
      updatedTotal += Number(bookingDetails.securityDeposit);
      updateBookingData({securityDepositStatus:true})
    }
    if (updatedSelection.extraDayPaymentAmount) {
      updatedTotal += bookingDetails.extraDayPaymentAmount;
      updateBookingData({extraDayPaymentAmountStatus:true})
    }



    // Set total amount and update booking details
    setTotalAmount(updatedTotal);
    
  };

  const handlePayment = async () => {
    // API call to initiate the payment
    // const response = await api.post(`https://beiyo-admin.in/api/pay/initiate`,{
    //   amount:totalAmount
    // })
    const response = await api.post(`https://beiyo-admin.in/api/pay/initiate`,{
      amount:totalAmount
    })
    const transactionId = response.data.data.merchantTransactionId;
    window.location.href = response.data.data.instrumentResponse.redirectInfo.url;
    localStorage.setItem('transactionId',transactionId);
    localStorage.setItem('bookingData', JSON.stringify(bookingDetails));
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
