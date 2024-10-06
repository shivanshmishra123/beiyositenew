import React, { useState, useEffect } from 'react';
import { Toaster } from '@/components/ui/toaster';
import { useToast } from '@/hooks/use-toast';
import api from '@/api/apiKey';


const StepOne = ({ updateBookingData, nextStep }) => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [correctOtp,setCorrectOtp]=useState('')// Corrected OTP saving
  const [isVerifying, setIsVerifying] = useState(false);
  const { toast } = useToast();



  // Handle sending OTP
  const sendOtp = async () => {
    if (email.trim() === '') {
      toast({
        title: "Please Fill in the Information",
        description: "Please enter your email address.",
      });
      return;
    }
  
    try {
      const response = await api.post(`https://beiyo-admin.in/api/otp/send`, {
        email: email,
      });
      
    setCorrectOtp(response.data); // Correctly store the OTP from the response
      console.log(correctOtp); // Log the OTP directly from the response
      setIsOtpSent(true);
      
      toast({
        title: "OTP Sent",
        description: `OTP has been sent to ${email}.`,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send OTP. Please try again.",
      });
    }
  };

  // Handle OTP Verification
  const verifyOtp = () => {
    console.log("Entered OTP:", otp.trim());
    console.log("Correct OTP:", correctOtp);
    if (otp.trim().toString() !== correctOtp.toString()) {
    
     toast({
      title: "Invalid OTP",
      description: "Please enter the correct OTP.",
    });
    return;
    }
     // If OTP is correct, update booking data and proceed
    updateBookingData({ email });
    nextStep();
   
    
  };

  return (
    <div className="max-w-md mx-auto w-full bg-white p-8 rounded-md shadow-md">
      <h3 className="text-2xl font-bold mb-4">Sign Up</h3>

      {!isOtpSent ? (
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="border p-2 w-full mb-4"
          />
          <button onClick={sendOtp} className="bg-black text-white py-2 px-4 rounded w-full">
            Send OTP
          </button>
        </div>
      ) : (
        <div>
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter OTP"
            className="border p-2 w-full mb-4"
          />
          <button
            onClick={verifyOtp}
            className={`bg-black text-white py-2 px-4 rounded w-full ${isVerifying && 'opacity-50 cursor-not-allowed'}`}
          >
            Verify OTP
          </button>

          <div className="text-center mt-4">
            <button
              onClick={sendOtp}
              className="text-blue-500 underline"
              disabled={isVerifying}
            >
              Resend OTP
            </button>
          </div>
        </div>
      )}
      <Toaster className="left-[0%]" />
    </div>
  );
};

export default StepOne;
