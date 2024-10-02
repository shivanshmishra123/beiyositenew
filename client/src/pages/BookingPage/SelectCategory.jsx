// StepTwo.jsx
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const StepTwo = ({ updateBookingData, nextStep, prevStep, hostelId }) => {
  // const [selectedRooms, setSelectedRooms] = useState([]);
  const [selectedRoomCategory, setSelectedRoomCategory] = useState('');
  const [groupedRooms, setGroupedRooms] = useState({});

  const fetchHostelData = async () => {
    try {
      const response = await axios.get(`https://beiyo-admin.in/api/hostels/${hostelId}/remainingCapacityRooms`);
      const rooms = response.data;

      // Group rooms by type
      const grouped = rooms.reduce((acc, room) => {
        if (!acc[room.type]) {
          acc[room.type] = {
            type: room.type,
            price: room.price,
            count: 1,
          };
        } else {
          acc[room.type].count += 1;
          if (room.price < acc[room.type].price) {
            acc[room.type].price = room.price; // Update to the lowest price
          }
        }
        return acc;
      }, {});

      setGroupedRooms(grouped);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // Initial data fetching when the component mounts
    fetchHostelData();
  }, [hostelId]);

  const handleRoomSelect = (roomType) => {
    setSelectedRoomCategory(roomType);
  };

  const handleContinue = () => {
    if (!selectedRoomCategory) {
      alert('Please select a room category.');
      return;
    }
    // Update booking data and proceed to next step
    updateBookingData({ selectedRoomCategory });
    nextStep();
  };

  return (
    <div className="p-4">
      <h3 className="text-xl font-bold mb-4">Select Room Category</h3>

      {Object.keys(groupedRooms).length > 0 ? (
        <div className="border rounded-lg p-4">
          <div className="grid grid-cols-1 gap-4">
          {Object.values(groupedRooms).map((room, index) => (
              <div key={index} className="flex justify-between items-center border-b py-4">
                <div className="flex flex-col">
                  <div className="font-bold">
                    {room.type.charAt(0).toUpperCase() + room.type.slice(1)} Sharing ({room.count} available)
                  </div>
                  <div className="text-gray-600">₹{room.price}/month</div>
                </div>
                <button
                  onClick={() => handleRoomSelect(room.type)}
                  className={`py-2 px-4 rounded ${
                    selectedRoomCategory === room.type ? 'bg-green-600 text-white' : 'bg-green-300'
                  }`}
                >
                  {selectedRoomCategory === room.type ? 'Selected' : 'Select'}
                </button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>No available rooms</div>
      )}

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

export default StepTwo;
