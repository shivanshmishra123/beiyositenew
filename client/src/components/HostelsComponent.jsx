import React from 'react'
import Form from './Form';
import { Link } from 'react-router-dom';
import  { useState, useEffect } from 'react';
const HostelsComponent = () => {
    const [hostels, setHostels] = useState([]);
    const [loading, setLoading] = useState(false);
//     const [showForm, setShowForm] = useState(false);
//     const [hidebutton, setHidebutton] = useState(true);


//   const handleRequestCallback= () => {
//     setShowForm(true);
//     setHidebutton(false);
//   }
    useEffect(() => {
        // Fetch hostels from the database
        const fetchHostels = async () => {
            try {
                setLoading(true);
                const response = await fetch(`https://beiyo-backend-tdk4.onrender.com/api/hostel`);
                const data = await response.json();
                setHostels(data);
                console.log(data);
            } catch (error) {
                console.error('Error fetching hostels:', error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchHostels();
    }, []);
  return (

    <>
        {loading ? (
        <div className="laodingscreen">
            <h1>Hostels are Loading...</h1>
            <p>Thanks for Your Patience</p>
        </div>
    ) : (
        <div className="hostels" id='hostel'>
            {hostels.map((hostel) => (
                
                <div key={hostel.id} className="single-hostel" >
                    
                    <img src={hostel.image} alt="" className='hostelimage' />
                    <div className="hostelContentdiv">
                        <div className="namediv">
                            <h1>{hostel.name}</h1>
                            <div className="address">
                                <div style={{ display: "flex" }}> <img src="/images/location_Marker.svg" alt="" />
                                    <p>{hostel.location}</p></div>
                                <a href={hostel.locationLink}>View Directions on Map</a>
                            </div>
                        </div>
                        <div className="pricediv">
                            <div>
                                <p>
                                    Starting from
                                </p>
                                <p className='price'><img src="/images/rupee.svg" alt="" />{hostel.price}/mo*</p>
                            </div>
                            
                            <Link to={`/hostel/${hostel._id}`}>    <button  className='response' >  View Details </button> </Link>
                  
                        </div>
                    </div>
                    <div className="double">
                        <img src="/images/double.svg" alt="" />
                        <p>Double</p>
                    </div>
                    <div className="triple">
                        <img src="/images/triple.svg" alt="" />
                        <p>Triple</p>
                    </div>
              
                </div>
              
            ))}
        </div>
    )}
    </>
  )
}

export default HostelsComponent