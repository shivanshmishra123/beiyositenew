import React, { useState } from 'react';
import axios from 'axios';

const Step5 = ({ bookingDetails, onPaymentComplete , prevStep ,nextStep }) => {
    const [couponCode, setCouponCode] = useState('');
    const [tokenAmount, setTokenAmount] = useState(1998);



    
    const handlePayment = () => {
        // API call to initiate the payment
        axios.post('/api/initiate-payment', {
            amount: tokenAmount,
            bookingDetails,
            selectedItems
        })
            .then(response => {
                if (response.data.success) {
                    // Handle successful payment
                    onPaymentComplete();
                }
            });
    };

    return (
        <div className="bg-white p-5 shadow-md rounded-lg">
            <h2 className="text-xl font-bold mb-4">5. Payment</h2>
            <div className="bg-yellow-100 p-3 rounded mb-4">
                <p className="text-orange-500">
                    You have to pay the token amount before move-in. Rent will start from the selected move-in date.
                </p>
            </div>
            {/* <div className="flex items-center mb-4">
                <input 
                    type="text" 
                    placeholder="Enter Coupon" 
                    className="border p-2 w-full mr-2" 
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                />
                <button 
                    className="bg-black text-white px-4 py-2 rounded" 
                    onClick={handleApplyCoupon}
                >
                    Apply
                </button>
            </div> */}

            {/* <div className="mb-4">
                <div>
                    <label className="flex items-center mb-2">
                        <input 
                            type="checkbox" 
                            checked={selectedItems.tokenAmount}
                            onChange={() => handleCheckboxChange('tokenAmount')}
                            className="mr-2"
                        />
                        Token Amount - ₹{tokenAmount}
                    </label>
                </div>
                <div>
                    <label className="flex items-center mb-2">
                        <input 
                            type="checkbox" 
                            checked={selectedItems.moveInCharges}
                            onChange={() => handleCheckboxChange('moveInCharges')}
                            className="mr-2"
                        />
                        Move-In Charges - ₹{moveInCharges}
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
                        Security Deposit Amount [1 Month Rent - Token Amount] - ₹{securityDeposit}
                    </label>
                </div>
                <div>
                    <label className="flex items-center mb-2">
                        <input 
                            type="checkbox" 
                            checked={selectedItems.advanceRent}
                            onChange={() => handleCheckboxChange('advanceRent')}
                            className="mr-2"
                        />
                        Advance Rent Amount [For 1 Day] - ₹{advanceRent}
                    </label>
                </div>
            </div> */}

            <div className="mt-4">
                <p className="text-lg font-bold">Total Token Amount: ₹{tokenAmount}</p>
            </div>
            
            <p className="mt-4 text-sm text-gray-500">
                By clicking on the payment button you agree to our Terms and conditions.
            </p>
            
            <button 
                className="mt-4 bg-green-500 text-white w-full py-2 rounded"
                onClick={handlePayment}
            >
                Pay ₹{tokenAmount}
            </button>

            <ul className="mt-4 text-xs text-gray-600">
                <li>• A minimum token amount of Rs. 999 per bed is required to confirm your booking.</li>
                <li>• Before moving in, you must pay the listed refundable security deposit and rent for the current month.</li>
                <li>• Room and bed allocation is at the discretion of the management and representatives.</li>
                <li>• Rent, including any additional charges, must be paid before the 5th of each month to avoid late fees.</li>
            </ul>
            <div className="flex justify-between mt-4">
        <button onClick={prevStep} className="bg-gray-300 py-2 px-4 rounded">
          Previous
        </button>
        <button onClick={nextStep} className="bg-black text-white py-2 px-4 mt-4 rounded">
        Continue
      </button>
      </div>
        </div>
    );
};

export default Step5;
