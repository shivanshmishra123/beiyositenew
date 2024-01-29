import React, { useState, useEffect } from 'react';
import './HostelStyles/hostelmain.css'
import Testimonial from './Home page/Testimonial';
import Form from '../components/Form';
const Hostel = () => {
    const [hostels, setHostels] = useState([]);
  
    useEffect(() => {
      // Fetch hostels from the database
      const fetchHostels = async () => {
        try {
          const response = await fetch('https://adksh-backend.onrender.com/api/hostel');
          
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
          <img src="images\Hostel image\hostel2.png" alt="" className='hostelimage'/>
          <div className="hostelContentdiv">
          <div className="namediv">
           <h1>{hostel.name}</h1>
          <div className="address">
           <div style={{display:"flex"}}> <img src="images\location_Marker.svg" alt="" />
           <p>{hostel.location}</p></div>
          <a href={hostel.locationLink}>View Directions on Map</a>
          </div>
          </div>
          <div className="pricediv">
         <div>
         <p>
            Starting from  
          </p>
          <p className='price'><img src="images\rupee.svg" alt="" />{hostel.price}/mo*</p>
         </div>
         <div className="buttonhosteldiv">
         {/* <button className="requestCallBAckForm">
            View Details
            </button> */}
            <button className="requestCallBAckForm">
            Request a callBack
            </button>
         </div>
          </div>
          </div>
          <div className="double">
            <img src="images/double.svg" alt="" />
            <p>Double</p>
          </div>
          <div className="triple">
            <img src="images/triple.svg" alt="" />
            <p>Triple</p>
          </div>
          </div>
      ))}
      </div>
    </div>
  )
}

export default Hostel
