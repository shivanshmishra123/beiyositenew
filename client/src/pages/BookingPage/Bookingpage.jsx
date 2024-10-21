// BookingPage.jsx
import React, { useEffect, useState } from 'react';
import StepOne from './Sign-Up';
import StepTwo from './SelectCategory';
import StepThree from './Move-In';
import StepFour from './PersonalInformation';
import StepSix from './Payment';
import StepFive from './RoomSelection';
import Summary from './Summary';
import { useParams } from 'react-router-dom';
import api from '@/api/apiKey';

const BookingPage = () => {
  const { hostelId } = useParams();
  const [hostel,setHostel]=useState(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [hostelType,setHostelType]=useState("");
  const [bookingData, setBookingData] = useState({
    email: '',
    hostelId:hostelId,
    selectedRoomCategory: '',
    dateJoined: '',
    contractTerm: '',
    firstName: '',
    lastName: '',
    mobileNumber: '',
    gender: '',
    roomNumberId:'',
    selectedRoom:'',
      formFee: 1,
      formFeeStatus:true,
      maintainaceCharge:1000, 
      maintainaceChargeStatus:false,
      securityDeposit:0,
      securityDepositStatus:false,
      extraDayPaymentAmount:0,
      extraDayPaymentAmountStatus:false,
      remainingDays:0,
  });
  useEffect(()=>{
    const fetchSingleHostel = async ()=>{
      try{
        const URL = `https://beiyo-admin.in/api/hostels/${hostelId}`
      const response = await api.get(URL);
     
      setHostel(response.data);
      setHostelType(response.data.hostelType)
      
      document.title=`Book your Bed in ${hostel.name}`
      }catch(error){
        console.log(error);
      }
    }
   fetchSingleHostel(); 
  },[hostelId])
  // Proceed to the next step
  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 6)); // Ensure it doesn't go beyond step 6
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Update booking data
  const updateBookingData = (stepData) => {
    setBookingData((prev) => ({ ...prev, ...stepData }));
  };

  return (
    <div className="min-h-screen  flex flex-col lg:flex-row lg:justify-between p-4 pt-32 lg:p-32">
      {/* Steps Column */}
      <div className="lg:w-3/4 w-full p-4 lg:p-8 bg-white shadow-lg rounded-md space-y-6">
        <h2 className="text-2xl font-bold mb-4">Room Booking Process</h2>

        {/* Step Navigation */}
        <div className="flex justify-between mb-6 overflow-x-auto gap-8">
          {['Sign-Up', 'Select Room', 'Move-In Date', 'Personal Info', 'Room Selection', 'Payment'].map(
            (label, index) => (
              <div
                key={index}
                className={`cursor-pointer whitespace-nowrap py-2 border-b-2 ${
                  currentStep === index + 1 ? 'border-black font-bold' : 'border-gray-200'
                }`}
              >
                {label}
              </div>
            )
          )}
        </div>

        {/* Step Components */}
        <div>
          {currentStep === 1 && 
          <StepOne updateBookingData={updateBookingData} nextStep={nextStep} />
          // <StepFive updateBookingData={updateBookingData} nextStep={nextStep} prevStep={prevStep} />
          }
          {currentStep === 2 && (
            <StepTwo updateBookingData={updateBookingData} nextStep={nextStep} prevStep={prevStep} hostelId={hostelId} />
          )}
          {currentStep === 3 && <StepThree updateBookingData={updateBookingData} nextStep={nextStep} prevStep={prevStep} />}
          {currentStep === 4 && <StepFour updateBookingData={updateBookingData} nextStep={nextStep} prevStep={prevStep}  hostelType={hostel.hostelType} />}
        
          {currentStep === 5 && (
            <StepFive 
              hostelId={hostelId}
              selectedRoomCategory={bookingData.selectedRoomCategory}
              nextStep={nextStep}
              prevStep={prevStep}
              updateBookingData={updateBookingData}
             
            />
          )}
            {currentStep === 6 && <StepSix updateBookingData={updateBookingData} nextStep={nextStep} prevStep={prevStep} bookingDetails={bookingData} />}
        </div>
      </div>

      {/* Summary Column */}
      <div className="lg:w-1/3 w-full mt-8 lg:mt-0 bg-gray-50 p-6 shadow-md rounded-md sticky top-20">
        <h3 className="text-xl font-bold mb-4">Booking Summary</h3>
        Hostel Name: {hostel&&hostel.name}
        {bookingData.email && <div className="mb-2">Email: {bookingData.email}</div>}
        {bookingData.selectedHostel && <div className="mb-2">Hostel: {bookingData.selectedHostel}</div>}
        {bookingData.selectedRoomCategory && <div className="mb-2">Room Category: {bookingData.selectedRoomCategory}</div>}
        {bookingData.dateJoined && <div className="mb-2">Move-in Date: {bookingData.dateJoined}</div>}
        {bookingData.contractTerm && (
          <div className="mb-2">Contract Term: {bookingData.contractTerm} month </div>
        )}
        {bookingData.firstName && (
          <div className="mb-2">
            Personal Info: {bookingData.firstName} {bookingData.lastName},{' '}
            {bookingData.gender}
            <br />
           Mobile no.: {bookingData.mobileNumber}
          </div>
        )}
        {bookingData.selectedRoom&&(
          <div>
            Room No.: {bookingData.selectedRoom}
            </div>
        )}
      </div>
    </div>
  );
};

export default BookingPage;
