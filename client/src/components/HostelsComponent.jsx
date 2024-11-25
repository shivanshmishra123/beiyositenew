import React, { useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { CircularProgress } from '@mui/material';
import api from '@/api/apiKey';

const HostelsComponent = ({ notincludID, noOfHostels, searchBoolean }) => {
  const [hostels, setHostels] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filteredHostels, setFilteredHostels] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const [filterGender, setFilterGender] = useState(null);
  const [filterArea, setFilterArea] = useState(null);
  const [priceRange, setPriceRange] = useState(10000);
  const searchTimeoutRef = useRef(null);
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
        <div className="flex items-center justify-center min-h-screen">
          <CircularProgress />
        </div>
      ) : (
        <div className="p-4 space-y-6" id="hostel">
          {/* Breadcrumb */}
          <nav className="flex mb-4" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link to="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-[#FFD700]">
                  Home
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                  </svg>
                  <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">Hostels</span>
                </div>
              </li>
            </ol>
          </nav>

          {searchBoolean && (
            <div className="backdrop-blur-sm bg-white/30 p-6 rounded-xl shadow-lg border border-white/20 space-y-4">
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex-1 min-w-[300px]">
                  <input
                    type="text"
                    placeholder="Search hostels..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full p-3 text-base rounded-lg bg-white/50 border border-white/30 focus:ring-2 focus:ring-[#FFD700] focus:border-transparent transition duration-200"
                  />
                </div>
                <button
                  onClick={handleSearchButton}
                  className="px-6 py-3 text-black font-medium bg-[#FFD700] rounded-lg shadow-md hover:bg-black hover:text-white transition duration-200"
                >
                  Search
                </button>
              </div>

              <div className="flex flex-wrap gap-2 justify-between">
  <div className="flex gap-8">
    {['Boys', 'Girls', 'All'].map((type) => (
      <button
        key={type}
        onClick={() => setFilterGender(type === 'All' ? null : type)}
        className={`px-4  py-2 rounded-md text-sm font-medium transition duration-200 ${
          (filterGender === type || (type === 'All' && filterGender === null))
            ? 'bg-[#FFD700] text-black'
            : 'bg-white/50 hover:bg-[#FFD700] hover:text-black'
        }`}
      >
        {type}
      </button>
    ))}
  </div>


                <select
                  value={filterArea}
                  onChange={(e) => setFilterArea(e.target.value)}
                  className="p-3  rounded-lg bg-white/50 border  border-white/30 focus:ring-2 focus:ring-[#FFD700] focus:border-transparent"
                >
                  <option value="">All Areas</option>
                  <option value="vallabh">Vallabh Nagar</option>
                  <option value="sapna">Sapna Sangeeta</option>
                  <option value="dhenu market">Dhenu Market</option>
                </select>

                <div className="w-full md:w-auto p-2 rounded-lg bg-white/50 border flex flex-col border-white/30">
                  <label className="block mb-2 font-medium">Max Price: ₹{priceRange}</label>
                  <input
                    type="range"
                    min={3000}
                    max={10000}
                    step={500}
                    value={priceRange}
                    onChange={(e) => setPriceRange(Number(e.target.value))}
                    className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-gray-200"
                  />
                </div>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredHostels.map((hostel) => (
              hostel._id !== notincludID && (
                <div key={hostel._id} className="group backdrop-blur-md bg-white/40 rounded-xl shadow-lg border border-white/20 overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                  <div className="relative">
                    <img src={hostel.image} alt="" className="w-full h-48 object-cover" />
                    <div className="absolute top-4 right-4 flex gap-2">
                      <span className="px-3 py-1 rounded-full text-sm font-medium bg-[#FFD700]/90 text-black">
                        {hostel.hostelType}
                      </span>
                      {hostel.siteTotalRemainingBeds === 0 ? (
                        <span className="px-3 py-1 rounded-full text-sm font-medium bg-red-500/90 text-white">
                          Full
                        </span>
                      ) : (
                        <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-500/90 text-white">
                          {hostel.siteTotalRemainingBeds} Beds
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="flex justify-between items-start">
                      <h2 className="text-xl font-bold">{hostel.name}</h2>
                      <div className="text-right">
                        <span className="text-green-600 font-medium">25% off</span>
                        <p className="text-gray-500 line-through text-sm">₹{Math.floor(hostel.price/0.75)}</p>
                        <p className="text-2xl font-bold">₹{hostel.price}<span className="text-sm text-gray-500">/Bed</span></p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-gray-600">
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
  </svg>
  <span className="text-sm text-ellipsis overflow-hidden whitespace-nowrap">{hostel.location}</span>
</div>


                    <div className='featurehosteldiv' style={{display:'flex',alignItems:'center'}}>
                                           <img src="/images/Wifihostel.svg" alt="Wifi" />
                                           <img src="/images/Housekeeping.svg" alt="HouseKeeping" />
                                           <img src="/images/Cctv.svg" alt="CCTV" />
                                           <img src="/images/Parking.svg" alt="Parking" />
                                           <p style={{color:'grey',display:'flex',justifyContent:'center',fontSize:'1.3rem'}}>+4</p>
                                       </div>
                                   

                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div className="flex gap-3">
                        {hostel.singlePrice && (
                          <span className="px-3 py-1 rounded-full text-sm bg-white/50">Single</span>
                        )}
                        {hostel.doublePrice && (
                          <span className="px-3 py-1 rounded-full text-sm bg-white/50">Double</span>
                        )}
                        {hostel.triplePrice && (
                          <span className="px-3 py-1 rounded-full text-sm bg-white/50">Triple</span>
                        )}
                      </div>
                      <Link
                        to={`/hostel/${hostel._id}`}
                        className="px-4 py-2 text-sm font-medium text-black bg-[#FFD700] rounded-lg hover:bg-black hover:text-white transition duration-200"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default HostelsComponent;
