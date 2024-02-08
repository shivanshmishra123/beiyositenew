import React, { useState, useEffect } from 'react';
import './HostelStyles/hostelmain.css'

const Hostel = () => {
    const [hostels, setHostels] = useState([]);
    const [loading,setLoading] = useState(false);
  
    useEffect(() => {
      // Fetch hostels from the database
      const fetchHostels = async () => {
        try {
          setLoading(true);
          const response = await fetch("https://adksh-backend.onrender.com/api/hostel");
          const data = await response.json();
          setHostels(data);
        } catch (error) {
          console.error('Error fetching hostels:', error.message);
        }
        finally{
          setLoading(false)
        }
      };
      fetchHostels();
    }, []);
  return (
    <div className='hostelMainpage' >
      <p className='Hostelheading'>
        <a href="/">Beiyo</a>/Hostel
      </p>
      <h1 className="mainHead">
      Explore Our PG/Hostels in Indore
      </h1>
      {loading?(
        <div className="laodingscreen">
         <h1>Hostels are Loading...</h1>
          <p>Thanks for Your Patience</p>
        </div>
      ):(
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
           <a href="https://forms.gle/vLeURBFpqA9ZQgEcA">
           <button className="requestCallBAckForm">
            Request a callBack
            </button>
           </a>
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
      )}
  
    </div>
  )
}

export default Hostel
