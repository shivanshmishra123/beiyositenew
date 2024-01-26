import React, { useState, useEffect } from 'react';
import './HostelStyles/hostelmain.css'
const Hostel = () => {
    const [hostels, setHostels] = useState([]);
  
    useEffect(() => {
      // Fetch hostels from the database
      const fetchHostels = async () => {
        try {
          const response = await fetch('http://localhost:5000/api/hostel');
          
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
    
          const data = await response.json();
          setHostels(data);
        } catch (error) {
          console.error('Error fetching hostels:', error.message);
        }
      };
      fetchHostels();
    }, []);
  return (
    <div className='hostelMainpage' >
      <p className='Hostelheading'>Beiyo/Hostel</p>
      <h1 className="mainHead">
      Explore Our PG/Hostels in Indore
      </h1>
      <div className="hostels">
      {hostels.map((hostel)=>(
        <div key={hostel.id} className="single-hostel" >
          <img src="images/Hostel image/hostel1.svg" alt="" className='hostelimage'/>
          <div className="hostelContentdiv">
          <div className="namediv">
           <h1>{hostel.name}</h1>
          <div className="address">
           <p>{hostel.location}</p>
          <a href={hostel.locationLink}>View Directions on Map</a>
          </div>
          </div>
          <div className="pricediv">
          <p>
            Starting from <br /> {hostel.price}/mo*
          </p>
         <div className="buttonhosteldiv">
         <button className="requestCallBAckForm">
            View Details
            </button>
            <button className="requestCallBAckForm">
            Request a callBack
            </button>
         </div>
          </div>
          </div>
          </div>
      ))}
      </div>
    </div>
  )
}

export default Hostel