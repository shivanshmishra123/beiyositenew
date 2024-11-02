// StepSix.jsx

import api from '@/api/apiKey';
import React, { useEffect, useState } from 'react';
import { Toaster } from '@/components/ui/toaster';
import { useToast } from '@/hooks/use-toast';
const StepFive= ({ hostelId, selectedRoomCategory, updateBookingData, nextStep, prevStep }) => {
  const { toast } = useToast();
  const [availableRooms, setAvailableRooms] = useState([]);
  const [rentAmount, setRentAmount] = useState(0);
  const [roomNumberId,setRoomNumberId]=useState('');
  const [remainingDays,setRemainingDays]=useState(0);
  const [securityDeposit,setSecurityDeposit] = useState(0);
  const [selectedRoom,setSelectedRoom]=useState();
  const [extraDayPaymentAmount,setExtraDayPaymentAmount]=useState(0);
  // Fetch the list of rooms from the API based on the selected room category
  const fetchRooms = async () => {
    try {
      const response = await api.get(`https://beiyo-admin.in/api/hostels/${hostelId}/remainingCapacityRooms`);
      // Filter rooms based on the category selected in step 2
      const filteredRooms = response.data.filter((room) => room.type === selectedRoomCategory);
      setAvailableRooms(filteredRooms);
    } catch (error) {
      console.error('Error fetching room data:', error);
    }
  };

  useEffect(() => {
    fetchRooms();
  }, [hostelId, selectedRoomCategory]);

  const handleRoomSelect = (room) => {

    const oneDayRent = Math.ceil(room.price/30);
    console.log(oneDayRent);
    const currentDate = new Date();
    console.log(currentDate);
    const nextMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
    console.log(nextMonth)
    const remainingDays = Math.ceil((nextMonth - currentDate) / (1000 * 60 * 60 * 24));
    setRemainingDays(remainingDays);
    const remainingDaysRent = oneDayRent * remainingDays;
    console.log(remainingDaysRent);
    setSelectedRoom(room.roomNumber);
    setRentAmount(room.price);
    setRoomNumberId(room._id);
    setSecurityDeposit(room.price);
    setExtraDayPaymentAmount(remainingDaysRent)
  };

  const handleContinue = () => {
    if (!selectedRoom) {
      toast({
        title: "Please select a room.",
      });
      return;
    }

    // Update booking data and proceed to the next step
    updateBookingData({ selectedRoom, rent:rentAmount,roomNumberId:roomNumberId, securityDeposit,extraDayPaymentAmount,remainingDays });
    nextStep();
  };

  return (
    <div className="p-4">
      <h3 className="text-xl font-bold mb-4">Select Your Room</h3>
      <div className="border rounded-lg p-4">
        {availableRooms.length > 0 ? (
          availableRooms.map((room, index) => (
            <div
              key={index}
              className={`flex justify-between items-center border-b py-4 ${
                selectedRoom === room.roomNumber ? 'bg-green-100' : ''
              }`}
            >
              <div>
                <div className="font-bold">Room Number: {room.roomNumber}</div>
                <div className="text-gray-600">₹{room.price}/month</div>
              </div>
              <button
                onClick={() => handleRoomSelect(room)}
                className={`py-2 px-4 rounded ${
                  selectedRoom === room.roomNumber ? 'bg-green-600 text-white' : 'bg-green-300'
                }`}
              >
                {selectedRoom === room.roomNumber ? 'Selected' : 'Select'}
              </button>
            </div>
          ))
        ) : (
          <div>No available rooms found for the selected category.</div>
        )}
      </div>
      
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

export default StepFive;
