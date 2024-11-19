import React, { useCallback } from 'react'
// import Form from './Form';

import { Link, useNavigate } from 'react-router-dom';
import  { useState, useEffect,useRef } from 'react';

import { CircularProgress, Skeleton } from '@mui/material';
import api from '@/api/apiKey';
const HostelsComponent = ({notincludID, noOfHostels,searchBoolean}) => {
    const [hostels, setHostels] = useState([]);
    const [loading, setLoading] = useState(false);
    const [filteredHostels, setFilteredHostels] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [page,setPage] = useState(1);
    const navigate = useNavigate();
    
    const [filterGender, setFilterGender] = useState(null); // Boys, Girls, or null
    const [filterArea, setFilterArea] = useState(null); // Area name or null
    const [priceRange, setPriceRange] = useState(10000); // Max price
    const searchTimeoutRef = useRef(null); // Ref for debouncing
    useEffect(() => {
        const fetchHostels = async()=>{
            const startTime = performance.now(); // Start timing
            setLoading(true);
            try {
                const response = await api.get(`https://beiyo-admin.in/api/hostels`);
                const endTime = performance.now(); // End timing
                if(noOfHostels===null){
                    setHostels(response.data);
                    setFilteredHostels(response.data);
                }else{
                    const firstThreeHostels = response.data.slice(0, noOfHostels);
                    setHostels([...firstThreeHostels])
                    setFilteredHostels([...firstThreeHostels]);
                }
                console.log(`Time taken: ${(endTime - startTime).toFixed(2)} ms`); // Log time taken
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchHostels();
    }, []);





    const handleSearchButton = () => {
        const lowerCaseSearchTerm = searchTerm.toLowerCase();
    
        const filtered = hostels.filter((hostel) =>
          Object.values(hostel).some((value) =>
            String(value).toLowerCase().includes(lowerCaseSearchTerm)
          )
        );
    
        setFilteredHostels(filtered);
      };
    
      // Dynamically filter hostels on input change
  // Filtering logic with debounce
  useEffect(() => {
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current); // Clear previous timeout
    }

    searchTimeoutRef.current = setTimeout(() => {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();

      const filtered = hostels.filter((hostel) => {
        // Search term match
        const matchesSearchTerm = Object.values(hostel).some((value) =>
          String(value).toLowerCase().includes(lowerCaseSearchTerm)
        );

        // Gender filter
        const matchesGender =
          !filterGender || hostel.hostelType === filterGender;

        // Area filter
        const matchesArea  =  !filterArea || Object.values(hostel).some((value) =>
            String(value).toLowerCase().includes(filterArea.toLowerCase())
          );

        // Price range filter
        const matchesPrice = hostel.price <= priceRange;

        return matchesSearchTerm && matchesGender && matchesArea && matchesPrice;
      });

      setFilteredHostels(filtered);
    }, 300); // Debounce time (300ms)
  }, [searchTerm, hostels, filterGender, filterArea, priceRange]);
   
  return (
    <>
        {loading ? (
        <div className="laodingscreen">
                <CircularProgress />
        </div>
    ) : (
        <div className="hostels" id='hostel' >
                      {/* Search Input and Button */}
          {searchBoolean?(
<div className="search-container mb-2 flex items-center gap-2 flex-wrap">
<div className='flex items-center gap-2'>
<input
  type="text"
  placeholder="Search hostels..."
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
  className="w-10/12 p-3 text-base border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-[#FFD700]"
/>
<button
    onClick={handleSearchButton}
    className="px-6 py-3 text-black text-base font-medium bg-[#FFD700]  rounded-md shadow-md hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-1"
  >
    Search
  </button>
</div>
                     {/* Gender Filter */}
                     <div className="gender-filter flex gap-2 justify-between md:justify-start">
                <button
                  onClick={() => setFilterGender("Boys")}
                  className={`px-4 py-2 text-sm font-medium rounded-md shadow-md ${
                    filterGender === "Boys"
                      ? "bg-[#FFD700] text-black"
                      : "bg-gray-100 hover:bg-[#FFD700] hover:text-black"
                  }`}
                >
                  Boys
                </button>
                <button
                  onClick={() => setFilterGender("Girls")}
                  className={`px-4 py-2 text-sm font-medium rounded-md shadow-md ${
                    filterGender === "Girls"
                      ? "bg-[#FFD700] text-black"
                      : "bg-gray-100 hover:bg-[#FFD700] hover:text-black"
                  }`}
                >
                  Girls
                </button>
                <button
                  onClick={() => setFilterGender(null)}
                  className={`px-4 py-2 text-sm font-medium rounded-md shadow-md ${
                    filterGender === null
                      ? "bg-[#FFD700] text-black"
                      : "bg-gray-100 hover:bg-[#FFD700] hover:text-black"
                  }`}
                >
                  All
                </button>
              </div>

              {/* Area Filter */}
              <div className="area-filter">
            <select
                value={filterArea} // Keeps the selected area in sync with the dropdown
                 onChange={(e) => setFilterArea(e.target.value)} // Set selected area directly
                 className="w-10/12 md:w-10/12 p-3 text-base border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-[#FFD700]"
                     >
                      <option value="">All Areas</option>
                      <option value="vallabh">Vallabh Nagar</option>
                      <option value="sapna">Sapna Sangeeta</option>
                      <option value="dhenu market">Dhenu Market</option> {/* Ensure the option value is consistent */}
                </select>
            </div>

              {/* Price Range Filter */}
              <div className="price-range-filter flex flex-col items-center md:items-start gap-2  border border-gray-300 rounded-md p-1 bg-white">
  <label className="font-medium text-sm text-black">Max Price: ₹{priceRange}</label>
  <input
    type="range"
    min={3000}
    max={10000}
    step={500}
    value={priceRange}
    onChange={(e) => setPriceRange(Number(e.target.value))}
    className="w-full  md:w-full rounded-lg border-2 border-[#FFD700] focus:outline-none focus:ring-1 focus:ring-black"
  />
</div>
            </div>
):(null)}

            {filteredHostels.map((hostel) => (
                <div  key={hostel._id} >{
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

