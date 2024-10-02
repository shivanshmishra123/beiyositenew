// StepFour.jsx
import React, { useState } from 'react';

const StepFour = ({ updateBookingData, nextStep, prevStep }) => {
  const [personalInfo, setPersonalInfo] = useState({
    firstName: '',
    lastName: '',
    emailAddress: '',
    gender: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleContinue = () => {
    const { firstName, lastName, emailAddress, gender } = personalInfo;
    if (!firstName || !lastName || !emailAddress || !gender) {
      alert('Please fill in all personal information fields.');
      return;
    }
    // Update booking data and proceed to next step
    updateBookingData({ personalInfo });
    nextStep();
  };

  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Personal Information</h3>
      <input
        type="text"
        name="firstName"
        value={personalInfo.firstName}
        onChange={handleChange}
        placeholder="First Name"
        className="border p-2 w-full mb-4"
      />
      <input
        type="text"
        name="lastName"
        value={personalInfo.lastName}
        onChange={handleChange}
        placeholder="Last Name"
        className="border p-2 w-full mb-4"
      />
      <input
        type="email"
        name="emailAddress"
        value={personalInfo.emailAddress}
        onChange={handleChange}
        placeholder="Email Address"
        className="border p-2 w-full mb-4"
      />
      <select
        name="gender"
        value={personalInfo.gender}
        onChange={handleChange}
        className="border p-2 w-full"
      >
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>
      <div className="flex justify-between mt-4">
        <button onClick={prevStep} className="bg-gray-300 py-2 px-4 rounded">
          Previous
        </button>
        <button onClick={handleContinue} className="bg-black text-white py-2 px-4 rounded">
          Continue
        </button>
      </div>
    </div>
  );
};

export default StepFour;
