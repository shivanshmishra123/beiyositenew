import React from 'react'
import Form from './Form';

import { Link } from 'react-router-dom';
import  { useState, useEffect } from 'react';
const HostelsComponent = ({notincludID}) => {
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
                const response = await fetch(`https://beiyositenew-api-alpha.vercel.app/api/hostel`);
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
                  hostel._id !== notincludID ?(
                     <a href={`/hostel/${hostel._id}`}>
                                    <div key={hostel.id} className="single-hostel" >
                    
                    <img src={hostel.image} alt="" className='hostelimage' />
                    <div className="hostelContentdiv">
                        <div className="namediv">
                            <h1>{hostel.name}</h1>
                            <div style={{ display: "flex" }}> <img src="/images/location_Marker.svg" alt="" />
                                    <p>{hostel.location}</p></div>
                            </div>
                           
                        <div className="pricediv">
                                <p className='price'>Starting from <br /><img src="/images/rupee.svg" alt="" /><span className=''>{hostel.price}</span>/mo*</p>
                        </div>
           
                    </div>
                    <div className="doubletriplediv">
                    <div className="double" >
                        <img src="/images/bed.svg" alt="" />
                        <p>Double</p>
                    </div>
                    <div className="triple">
                        <img src="/images/bed.svg" alt="" />
                        <p>Triple</p>
                    </div>
                    <a href={`/hostel/${hostel._id}`}>    <button  className='response' style={{cursor:"pointer"}} >  View Details </button> </a>
                    </div>
                </div>
                </a>
                 ):null  
            ))}
        </div>
    )}
    </>
  )
}

export default HostelsComponent