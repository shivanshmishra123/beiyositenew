// // BookingPage.jsx
// import React, { useState } from 'react';
// import StepOne from './Sign-Up';
// import StepTwo from './SelectCategory';
// import StepThree from './Move-In';
// import StepFour from './PersonalInformation';
// import StepFive from './Payment';
// import Summary from './Summary';
// import { useParams } from 'react-router-dom';
// import StepSix from './RoomSelection'; 

// const BookingPage = () => {
//   const {hostelId} = useParams(); 
//   const [currentStep, setCurrentStep] = useState(1);
//   const [bookingData, setBookingData] = useState({
//     email: '',
//     selectedHostel: '',
//     selectedRoomCategory: '',
//     moveInDate: '',
//     contractTerm:'',
//     personalInfo: {
//       firstName: '',
//       lastName: '',
//       emailAddress: '',
//       gender: '',
//     },
//     paymentDetails: {
//       tokenAmount: 1998,
//       moveInCharges: 0,
//       securityDeposit: 0,
//       rentAmount: 0,
//     },
//   });

//   // Proceed to the next step
//   const nextStep = () => {
//     setCurrentStep((prev) => Math.min(prev + 1, 6)); // Ensure it doesn't go beyond step 6
//   };

//   const prevStep = () => {
//     if (currentStep > 1) {
//       setCurrentStep(currentStep - 1);
//     }
//   };

//   // Update booking data
//   const updateBookingData = (stepData) => {
//     setBookingData((prev) => ({ ...prev, ...stepData }));
//   };

//   return (
//     <div className="min-h-screen  flex justify-between p-40">
//       {/* Steps Column */}
//       <div className="w-3/4 p-8  bg-white shadow-lg rounded-md space-y-6 h-fit ">
//         <h2 className="text-2xl font-bold mb-4">Room Booking Process</h2>

//         {/* Step Navigation */}
//         <div className="flex justify-between mb-6">
//           {['Sign-Up', 'Select Room', 'Move-In Date', 'Personal Info', 'Payment','Room Selection'].map((label, index) => (
//             <div
//               key={index}
//               className={`cursor-pointer px-4 py-2 border-b-2 ${currentStep === index + 1 ? 'border-black font-bold' : 'border-gray-200'}`}
//             >
//               {label}
//             </div>
//           ))}
//         </div>

//         {/* Step Components */}
//         <div>
//           {currentStep === 1 && <StepOne updateBookingData={updateBookingData} nextStep={nextStep} />}
//           {currentStep === 2 && <StepTwo updateBookingData={updateBookingData} nextStep={nextStep} prevStep={prevStep} hostelId={hostelId} />}
//           {currentStep === 3 && <StepThree updateBookingData={updateBookingData} nextStep={nextStep} prevStep={prevStep} />}
//           {currentStep === 4 && <StepFour updateBookingData={updateBookingData} nextStep={nextStep} prevStep={prevStep} />}
//           {currentStep === 5 && <StepFive updateBookingData={updateBookingData} nextStep={nextStep} prevStep={prevStep} />}
//           {currentStep === 6 && (
//         <StepSix
//           hostelId={hostelId}
//           selectedRoomCategory={bookingData.selectedRoomCategory}
//           nextStep={nextStep}
//           prevStep={prevStep}
//           updateBookingData={updateBookingData}
//         />
//       )}
//           {/* {currentStep === 6 && <Summary bookingData={bookingData} />} */}
//         </div>
//       </div>

//       {/* Summary Column */}
//       <div className="w-1/3 bg-gray-50 p-6 shadow-md rounded-md sticky top-20 h-fit ml-4">
//         <h3 className="text-xl font-bold mb-4">Booking Summary</h3>
//         {bookingData.email&&(<div className="mb-2">Email: {bookingData.email}</div>)}
//         {bookingData.selectedHostel&&(<div className="mb-2">Hostel: {bookingData.selectedHostel}</div>)}
//         {bookingData.selectedRoomCategory&&(<div className="mb-2">Room Category: {bookingData.selectedRoomCategory}</div>)}
//         {bookingData.moveInDate&&(<div className="mb-2">Move-in Date: {bookingData.moveInDate}</div>)}
//         {bookingData.contractTerm&&(<div className="mb-2">Contract Term: {bookingData.contractTerm} month </div>)}
//         {bookingData.personalInfo.firstName&&(<div className="mb-2">
//           Personal Info: {bookingData.personalInfo.firstName} {bookingData.personalInfo.lastName}, {bookingData.personalInfo.gender}
//         </div>)}

//         {/* Payment details */}
//         {currentStep >= 5 && (
//           <div className="mt-4">
//             <h4 className="font-bold">Payment Details:</h4>
//             <div>Token Amount: ₹{bookingData.paymentDetails.tokenAmount}</div>
//             <div>Move-In Charges: ₹{bookingData.paymentDetails.moveInCharges}</div>
//             <div>Security Deposit: ₹{bookingData.paymentDetails.securityDeposit}</div>
//             <div>Rent Amount: ₹{bookingData.paymentDetails.rentAmount}</div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default BookingPage;


// BookingPage.jsx
import React, { useState } from 'react';
import StepOne from './Sign-Up';
import StepTwo from './SelectCategory';
import StepThree from './Move-In';
import StepFour from './PersonalInformation';
import StepFive from './Payment';
import StepSix from './RoomSelection';
import Summary from './Summary';
import { useParams } from 'react-router-dom';

const BookingPage = () => {
  const { hostelId } = useParams();
  const [currentStep, setCurrentStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    email: '',
    selectedHostel: '',
    selectedRoomCategory: '',
    moveInDate: '',
    contractTerm: '',
    personalInfo: {
      firstName: '',
      lastName: '',
      emailAddress: '',
      gender: '',
    },
    paymentDetails: {
      tokenAmount: 1998,
      moveInCharges: 0,
      securityDeposit: 0,
      rentAmount: 0,
    },
  });

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
    <div className="min-h-screen  flex flex-col lg:flex-row lg:justify-between p-4 pt-32 lg:p-20">
      {/* Steps Column */}
      <div className="lg:w-3/4 w-full p-4 lg:p-8 bg-white shadow-lg rounded-md space-y-6">
        <h2 className="text-2xl font-bold mb-4">Room Booking Process</h2>

        {/* Step Navigation */}
        <div className="flex justify-between mb-6 overflow-x-auto gap-8">
          {['Sign-Up', 'Select Room', 'Move-In Date', 'Personal Info', 'Payment', 'Room Selection'].map(
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
          {currentStep === 1 && <StepOne updateBookingData={updateBookingData} nextStep={nextStep} />}
          {currentStep === 2 && (
            <StepTwo updateBookingData={updateBookingData} nextStep={nextStep} prevStep={prevStep} hostelId={hostelId} />
          )}
          {currentStep === 3 && <StepThree updateBookingData={updateBookingData} nextStep={nextStep} prevStep={prevStep} />}
          {currentStep === 4 && <StepFour updateBookingData={updateBookingData} nextStep={nextStep} prevStep={prevStep} />}
          {currentStep === 5 && <StepFive updateBookingData={updateBookingData} nextStep={nextStep} prevStep={prevStep} />}
          {currentStep === 6 && (
            <StepSix
              hostelId={hostelId}
              selectedRoomCategory={bookingData.selectedRoomCategory}
              nextStep={nextStep}
              prevStep={prevStep}
              updateBookingData={updateBookingData}
            />
          )}
        </div>
      </div>

      {/* Summary Column */}
      <div className="lg:w-1/3 w-full mt-8 lg:mt-0 bg-gray-50 p-6 shadow-md rounded-md sticky top-20">
        <h3 className="text-xl font-bold mb-4">Booking Summary</h3>
        {bookingData.email && <div className="mb-2">Email: {bookingData.email}</div>}
        {bookingData.selectedHostel && <div className="mb-2">Hostel: {bookingData.selectedHostel}</div>}
        {bookingData.selectedRoomCategory && <div className="mb-2">Room Category: {bookingData.selectedRoomCategory}</div>}
        {bookingData.moveInDate && <div className="mb-2">Move-in Date: {bookingData.moveInDate}</div>}
        {bookingData.contractTerm && (
          <div className="mb-2">Contract Term: {bookingData.contractTerm} month </div>
        )}
        {bookingData.personalInfo.firstName && (
          <div className="mb-2">
            Personal Info: {bookingData.personalInfo.firstName} {bookingData.personalInfo.lastName},{' '}
            {bookingData.personalInfo.gender}
          </div>
        )}

        {/* Payment details */}
        {currentStep >= 5 && (
          <div className="mt-4">
            <h4 className="font-bold">Payment Details:</h4>
            <div>Token Amount: ₹{bookingData.paymentDetails.tokenAmount}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingPage;
