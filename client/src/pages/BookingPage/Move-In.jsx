// StepThree.jsx
import React, { useState } from 'react';
import { Toaster } from '@/components/ui/toaster';
import { useToast } from '@/hooks/use-toast';

const StepThree = ({ updateBookingData, nextStep, prevStep }) => {
  const [dateJoined, setdateJoined] = useState('');
  const [contractTerm,setContractTerm]=useState('');
  const { toast } = useToast();
  const handleContinue = () => {
    if (!dateJoined) {
      toast({
        title: "Please select a move-in date.",
      });
      return;
    }
    if(!contractTerm){
      toast({
        title: "Please select a contract term.",
      });
      return;
    }
    // Update booking data and proceed to next step
    updateBookingData({ dateJoined,contractTerm });


    nextStep();
  };

  return (
    <div className='flex flex-col gap-2'>
      <h3 className="text-xl font-bold mb-4 ">Select Move-In Date</h3>
      <input
        type="date"
        value={dateJoined}
        onChange={(e) => setdateJoined(e.target.value)}
        className="border p-2 w-full"
      />
      <select className='"border p-2 w-full' value={contractTerm}  onChange={(e) => setContractTerm(e.target.value)}>
      <option value="">Select Contract Term</option>
        <option value="3">3 Months</option>
        <option value="6">6 Months</option>
        <option value="11">11 Months</option> 
      </select>
      <div className="flex justify-between mt-4">
        <button onClick={prevStep} className="bg-gray-300 py-2 px-4 rounded">
          Previous
        </button>
        <button onClick={handleContinue} className="bg-black text-white py-2 px-4 rounded">
          Continue
        </button>
      </div>
      <Toaster className="left-[0%]" />
    </div>
  );
};

export default StepThree;
