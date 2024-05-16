import React from 'react'
import Form from './Form';

import { Link } from 'react-router-dom';
import  { useState, useEffect } from 'react';
import axios from 'axios';
const HostelsComponent = ({notincludID, noOfHostels}) => {
    const [hostels, setHostels] = useState([]);
    const [loading, setLoading] = useState(false);
//     const [showForm, setShowForm] = useState(false);
//     const [hidebutton, setHidebutton] = useState(true);


//   const handleRequestCallback= () => {
//     setShowForm(true);
//     setHidebutton(false);
//   }
    useEffect(() => {
        // hostel updating beds
        const updateBeds = async()=>{
            await axios.patch(`https://beiyositenew-api-alpha.vercel.app/api/hostel`)
        }

        // Fetch hostels from the database
        const fetchHostels = async () => {
            try {

                setLoading(true);
                const response = await fetch(`https://beiyositenew-api-alpha.vercel.app/api/hostel`);
                const data = await response.json();
                if(noOfHostels===null){
                    setHostels(data);
                }else{
                    const firstThreeHostels = data.slice(0, noOfHostels);
                    setHostels([...firstThreeHostels])
                }
                
                console.log(data);
            } catch (error) {
                console.error('Error fetching hostels:', error.message);
            } finally {
                setLoading(false);
            }
        };
        updateBeds();
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
        <div className="hostels" id='hostel' >
            {hostels.map((hostel) => (
                  hostel._id !== notincludID ?(
                     <a href={`/hostel/${hostel._id}`}>
                                    <div key={hostel.id} className="single-hostel" >
                    
                    <img src={hostel.image} alt="" className='hostelimage' />
                    <div className="hostelContentdiv">
                        <div className='nameprice'>
                        <div className="namediv">
                            <h1>{hostel.name}</h1>
                            <div style={{ display: "flex" }}> <img style={{opacity:'30%'}} src="/images/location_Marker.svg" alt="" />
                                    <p style={{color:'grey'}}>{hostel.location}</p>
                                    <p>Beds Remaining: </p>
                                    </div>
                                   
                            </div>
                           
                        <div className="pricediv">
                                <p className='price'>Starting from <br /><img src="/images/rupee.svg" alt="" /><span className=''>{hostel.price}</span>/bed</p>
                        </div>
                        </div>
                        <div className="ammentiesbeddiv">

                        </div>
                   
                        <div className='underline'></div>
                               {hostel.single===true?(
                                            <div className="doubletripledivpc">
                                            <div className="double" >
                                                <img src="/images/bed.svg" alt="" />
                                                <p>Single</p>
                                            </div>
                                            <div className="triple">
                                                <img src="/images/bed.svg" alt="" />
                                                <p>Double</p>
                                            </div>
                                            <a href={`/hostel/${hostel._id}`}>    <button  className='response' style={{cursor:"pointer"}} >  View Details </button> </a>
                                            </div>
                    ):(
                        <div className="doubletripledivpc">
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
                    )}
                    </div>
                    {hostel.single===true?(
                                            <div className="doubletriplediv">
                                            <div className="double" >
                                                <img src="/images/bed.svg" alt="" />
                                                <p>Single</p>
                                            </div>
                                            <div className="triple">
                                                <img src="/images/bed.svg" alt="" />
                                                <p>Double</p>
                                            </div>
                                            <a href={`/hostel/${hostel._id}`}>    <button  className='response' style={{cursor:"pointer"}} >  View Details </button> </a>
                                            </div>
                    ):(
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
                    )}
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