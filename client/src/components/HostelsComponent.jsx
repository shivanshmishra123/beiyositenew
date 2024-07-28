import React from 'react'
import Form from './Form';

import { Link } from 'react-router-dom';
import  { useState, useEffect } from 'react';
import axios from 'axios';
import { CircularProgress } from '@mui/material';
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
        

        // Fetch hostels from the database
        const fetchHostels = async () => {
            try {

                setLoading(true);
                const response = await fetch(`https://beiyo-admin.vercel.app/api/hostels`);
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
        // updateBeds();
        fetchHostels();
    }, []);
   
  return (
    <>
        {loading ? (
        <div className="laodingscreen">
                <CircularProgress/>
        </div>
    ) : (
        <div className="hostels" id='hostel' >
            {hostels.map((hostel) => (
                <div  key={hostel.id} >{
                    hostel._id !== notincludID ?(
                   
                        <a href={`/hostel/${hostel._id}`}>
                                       <div  className="single-hostel" >
                       
                       <img  src={hostel.image} alt="" className='hostelimage' />
                       <div className="hostelContentdiv">
                           <div className='nameprice'>
                           <div className="namediv">
                               <h1>{hostel.name}</h1>
                               <div style={{ display: "flex",flexDirection:'column',gap:'1rem'}}> 
                                       <p style={{color:'grey',display:'flex',justifyContent:'center'}}><img style={{opacity:'30%'}} src="/images/location_Marker.svg" alt="" />{hostel.location}</p>
                                      {hostel.totalRemainingBeds===0?( <p style={{fontSize:'1.2rem',display:'flex', gap:'2px', alignItems:'center'}} >Fully Occupied</p>):( <p style={{fontSize:'1.2rem',display:'flex', gap:'2px', alignItems:'center'}} >Beds Remaining:   <span style={{fontWeight:'700',paddingTop:'2px'}}>{hostel.totalRemainingBeds}</span></p>)}
                                       <div className='featurehosteldiv' style={{display:'flex',alignItems:'center'}}>
                                           <img src="/images/Wifihostel.svg" alt="Wifi" />
                                           <img src="/images/Housekeeping.svg" alt="HouseKeeping" />
                                           <img src="/images/Cctv.svg" alt="CCTV" />
                                           <img src="/images/Parking.svg" alt="Parking" />
                                           <p style={{color:'grey',display:'flex',justifyContent:'center',fontSize:'1.3rem'}}>+4</p>
                                       </div>
                                       </div>             
                               </div>
                              
                           <div className="pricediv">
                                   <p className='price'><span style={{color:"#65ae00"}}>25%off</span><span style={{color:'grey',textDecoration:'line-through'}}>{Math.floor(hostel.price/0.75)}</span>
                                  
                                   </p>
                                  <p><span style={{fontWeight:'700',fontSize:'1.8rem',display:'flex',alignItems:'center'}}><img src="/images/rupee.svg" alt="" />{hostel.price} <span style={{color:'grey',fontSize:'1.3rem'}}>/Bed</span> </span></p>
                                  
                           </div>
                           </div>
                           <div className="ammentiesbeddiv">
   
                           </div>
                      
                           <div className='underlinepc'></div>
                         
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
                       {/* <div className='underlinem'></div> */}
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
                }
                </div>
                 
            ))}
        </div>
    )}
    </>
  )
}

export default HostelsComponent