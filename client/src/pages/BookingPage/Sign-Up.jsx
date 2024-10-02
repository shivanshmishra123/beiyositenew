// StepOne.jsx

import { Toaster } from '@/components/ui/toaster';
import { useToast } from '@/hooks/use-toast';
import React, { useState } from 'react';


const StepOne = ({ updateBookingData, nextStep }) => {
  const [email, setEmail] = useState('');
  const { toast } = useToast() 
  const handleContinue = () => {
    if (email.trim() === '') {
        toast({
            title: "Pls Fill all The information",
            description: "Please enter your email address.",
          })
      return;
    }
    // Update booking data and proceed to next step
    updateBookingData({ email });
    nextStep();
  };

  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Sign Up</h3>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="border p-2 w-full"
      />
      <button onClick={handleContinue} className="bg-black text-white py-2 px-4 mt-4 rounded">
        Continue
      </button>
      <Toaster  className="left-[0%]" />
    </div>
  );
};

export default StepOne;
