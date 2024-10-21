import React from 'react'
// import Form from './Form';

import { Link, useNavigate } from 'react-router-dom';
import  { useState, useEffect,useRef } from 'react';

import { CircularProgress, Skeleton } from '@mui/material';
import api from '@/api/apiKey';
const HostelsComponent = ({notincludID, noOfHostels}) => {
    const [hostels, setHostels] = useState([]);
    const [loading, setLoading] = useState(false);
    
    const [page,setPage] = useState(1);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchHostels = async()=>{
            const startTime = performance.now(); // Start timing
            setLoading(true);
            try {
                const response = await api.get(`https://beiyo-admin.in/api/hostels`);
                const endTime = performance.now(); // End timing
    
                console.log(response);
                if(noOfHostels===null){
                    setHostels(response.data);
                }else{
                    const firstThreeHostels = response.data.slice(0, noOfHostels);
                    setHostels([...firstThreeHostels])
                }
                console.log(`Time taken: ${(endTime - startTime).toFixed(2)} ms`); // Log time taken
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchHostels();
    }, []);

   
  return (
    <>
        {loading ? (
        <div className="laodingscreen">
                <CircularProgress />
        </div>
    ) : (
        <div className="hostels" id='hostel' >
            {hostels.map((hostel) => (
                <div  key={hostel.id} >{
                    hostel._id !== notincludID ?(
                   
                        // <a href={`/hostel/${hostel._id}`}>
                                       <div  className="single-hostel" >
                       
                       <img  src={hostel.image} alt="" className='hostelimage' />
                       <div className="hostelContentdiv">
                           <div className='nameprice'>
                           <div className="namediv">
                               <h1 className='whitespace-nowrap'>{hostel.name}{hostel.hostelType==='Boys'?(<span>(Boys)</span>):((<span>(Girls)</span>))}</h1>
                               <div style={{ display:"flex",flexDirection:'column',gap:'1rem'}}> 
                                       <p style={{color:'grey',display:'flex',justifyContent:'center'}}><img style={{opacity:'30%'}} src="/images/location_Marker.svg" alt="" />{hostel.location}</p>
                                      {hostel.siteTotalRemainingBeds===0?( <p style={{fontSize:'1.2rem',display:'flex', gap:'2px', alignItems:'center'}} >Fully Occupied</p>):( <p style={{fontSize:'1.2rem',display:'flex', gap:'2px', alignItems:'center'}} >Beds Remaining:   <span style={{fontWeight:'700',paddingTop:'2px'}}>{hostel.siteTotalRemainingBeds}</span></p>)}
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
             
                           <div className="doubletripledivpc">
                        <div className='bedcapacity'>
                            {hostel.singlePrice&&(
                                 <div className="double" >
                                 <img src="/images/bed.svg" alt="" />
                                 <p>Single</p>
                             </div>
                            )}
                        {hostel.doublePrice&&(
                            <div className="double" >
                            <img src="/images/bed.svg" alt="" />
                            <p>Double</p>
                        </div>
                        )}
                {hostel.triplePrice&&(
                            <div className="double" >
                            <img src="/images/bed.svg" alt="" />
                            <p>Triple</p>
                        </div>
                        )}
                        </div>
                        <a className='response' style={{cursor:"pointer"}} href={`/hostel/${hostel._id}`}>View Details </a>
                           
                           </div>
                      
                       </div>
                       {/* <div className='underlinem'></div> */}
                    

                       
                           <div className="doubletriplediv items-center ">
                        <div className='flex gap-1 '>
                        {hostel.singlePrice&&(
                                 <div className="double" >
                                 <img src="/images/bed.svg" alt="" />
                                 <p>Single</p>
                             </div>
                            )}
                        {hostel.doublePrice&&(
                            <div className="double" >
                            <img src="/images/bed.svg" alt="" />
                            <p>Double</p>
                        </div>
                        )}
                {hostel.triplePrice&&(
                            <div className="double" >
                            <img src="/images/bed.svg" alt="" />
                            <p>Triple</p>
                        </div>
                        )}
                        </div>
                       <a className='response flex items-center justify-center' style={{cursor:"pointer"} }  href={`/hostel/${hostel._id}`} >
                      
                                  View Details
                                
                                   </a> 
                           </div>
                    
                   </div>
                //    </a>
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

