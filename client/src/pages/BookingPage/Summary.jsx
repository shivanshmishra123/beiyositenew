// Summary.jsx
import React from 'react';

const Summary = ({ bookingData }) => {
  return (
    <div className="bg-white p-6 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Booking Summary</h2>
      <div className="mb-2"><strong>Email:</strong> {bookingData.email}</div>
      <div className="mb-2"><strong>Selected Hostel:</strong> {bookingData.selectedHostel}</div>
      <div className="mb-2"><strong>Room Category:</strong> {bookingData.selectedRoomCategory}</div>
      <div className="mb-2"><strong>Move-in Date:</strong> {bookingData.moveInDate}</div>
      
      <h3 className="text-xl font-semibold mt-4">Personal Information:</h3>
      <div className="mb-2"><strong>First Name:</strong> {bookingData.personalInfo.firstName}</div>
      <div className="mb-2"><strong>Last Name:</strong> {bookingData.personalInfo.lastName}</div>
      <div className="mb-2"><strong>Email Address:</strong> {bookingData.personalInfo.emailAddress}</div>
      <div className="mb-2"><strong>Gender:</strong> {bookingData.personalInfo.gender}</div>

      <h3 className="text-xl font-semibold mt-4">Payment Details:</h3>
      <div className="mb-2"><strong>Token Amount:</strong> ₹{bookingData.paymentDetails.tokenAmount}</div>
      <div className="mb-2"><strong>Move-In Charges:</strong> ₹{bookingData.paymentDetails.moveInCharges}</div>
      <div className="mb-2"><strong>Security Deposit:</strong> ₹{bookingData.paymentDetails.securityDeposit}</div>
      <div className="mb-2"><strong>Rent Amount:</strong> ₹{bookingData.paymentDetails.rentAmount}</div>
      
      <button className="bg-black text-white py-2 px-4 rounded mt-4">
        Confirm Booking
      </button>
    </div>
  );
};

export default Summary;
