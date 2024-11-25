import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { useParams } from 'react-router-dom';
import MapComponent from '../components/googleMapComponent/page';
import api from '@/api/apiKey';
import 'swiper/css';
import HostelsComponent from '../components/HostelsComponent';
import 'swiper/css/navigation';

const HostelDetail = () => {
  const { id } = useParams();
  const [hostel, setHostel] = useState(null);

  useEffect(() => {
    const fetchSingleHostel = async () => {
      try {
        const response = await api.get(`https://beiyo-admin.in/api/hostels/${id}`);
        setHostel(response.data);
        if (response.data) {
          document.title = `Book your Bed in ${response.data.name}`;
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchSingleHostel();
  }, [id]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white/5 to-gray-50/10 p-4 md:p-8">
      {/* Breadcrumb */}
      <nav className="mt-16 ml-20 flex py-4 mb-6" aria-label="Breadcrumb">
        {/* <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <a href="/" className="text-gray-700 hover:text-[#FFD700] transition-colors">Beiyo</a>
          </li>
          <li>
            <div className="flex items-center">
              <svg className="w-3 h-3 text-gray-400 mx-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
              </svg>
              <a href="/hostel" className="text-gray-700 hover:text-[#FFD700] transition-colors">Hostels</a>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <svg className="w-3 h-3 text-gray-400 mx-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
              </svg>
              <span className="text-gray-500">{hostel?.name}</span>
            </div>
          </li>
        </ol> */}
      </nav>

      <div className="backdrop-blur-md bg-white/30 rounded-2xl shadow-lg border border-white/20 overflow-hidden">
        {/* Header Section */}
        <div className="p-6 border-b border-gray-200/50">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold mb-2">
                Beiyo {hostel?.name}
                <span className="ml-2 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#FFD700]/20">
                  {hostel?.hostelType}
                </span>
              </h1>
              <div className="flex items-center gap-2 text-gray-600">
                <img src="/images/location_Marker.svg" alt="" className="h-4 w-4" />
                <p>{hostel?.location}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <a 
                href={`https://api.whatsapp.com/send?text=https://beiyo.in/hostel/${hostel?._id}`}
                target="_blank"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-500 hover:bg-green-600 transition-colors"
              >
                <img src="/images/whatsapp1.svg" alt="" className="h-5 w-5" />
                <span>Share</span>
              </a>
              <a 
                href={hostel?.locationLink}
                className="px-4 py-2 rounded-lg bg-[#ffc72c] hover:bg-[#ffc72c]/50 transition-colors"
              >
                View on Map
              </a>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
          {/* Image Slider */}
          <div className="lg:col-span-2">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Swiper
                modules={[Navigation, Autoplay]}
                slidesPerView={1}
                loop={true}
                navigation={true}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                className="aspect-video"
              >
                <SwiperSlide>
                  <img src={hostel?.image} alt="" className="w-full h-full object-cover" />
                </SwiperSlide>
                {hostel?.image2 && (
                  <SwiperSlide>
                    <img src={hostel?.image2} alt="" className="w-full h-full object-cover" />
                  </SwiperSlide>
                )}
                {hostel?.image3 && (
                  <SwiperSlide>
                    <img src={hostel?.image3} alt="" className="w-full h-full object-cover" />
                  </SwiperSlide>
                )}
              </Swiper>
            </div>
          </div>

          {/* Pricing and Booking Card */}
          <div className="backdrop-blur-sm bg-white/40 rounded-xl p-6 border border-white/20 shadow-lg">
            <div className="space-y-4">
              <div className="space-y-3">
                {hostel?.singlePrice && (
                  <div className="flex justify-between items-center p-3 rounded-lg bg-white/50">
                    <div className="flex items-center gap-2">
                      <img src="/images/bed.svg" alt="" className="h-6 w-6" />
                      <span>Single</span>
                    </div>
                    <div className="flex items-center">
                      <img src="/images/rupee.svg" alt="" className="h-4 w-4" />
                      <span className="font-bold">{hostel.singlePrice}/bed</span>
                    </div>
                  </div>
                )}
                  {hostel?.doublePrice && (
                  <div className="flex justify-between items-center p-3 rounded-lg bg-white/50">
                    <div className="flex items-center gap-2">
                      <img src="/images/bed.svg" alt="" className="h-6 w-6" />
                      <span>Double</span>
                    </div>
                    <div className="flex items-center">
                      <img src="/images/rupee.svg" alt="" className="h-4 w-4" />
                      <span className="font-bold">{hostel.doublePrice}/bed</span>
                    </div>
                  </div>
                )}
                  {hostel?.triplePrice && (
                  <div className="flex justify-between items-center p-3 rounded-lg bg-white/50">
                    <div className="flex items-center gap-2">
                      <img src="/images/bed.svg" alt="" className="h-6 w-6" />
                      <span>Triple</span>
                    </div>
                    <div className="flex items-center">
                      <img src="/images/rupee.svg" alt="" className="h-4 w-4" />
                      <span className="font-bold">{hostel.triplePrice}/bed</span>
                    </div>
                  </div>
                )}
                {/* Similar blocks for double and triple */}
              </div>

              <hr className="border-gray-200" />

              <div className="space-y-3">
                <a 
                  href={`/bookingPage/${hostel?._id}`}
                  className="block w-full py-3 text-center font-medium bg-[#FFD700] text-black rounded-lg hover:bg-black hover:text-white transition-colors"
                >
                  Book Now
                </a>
                <div className="text-center text-gray-500">OR</div>
                <a 
                  href={`https://api.whatsapp.com/send/?phone=918305523140&text=I%27d%20like%20to%20book%20a%20room%20in%20${hostel?.name}%20Can%20you%20help%20me%20with%20availability%20my%20name%20is%20:&`}
                  target="_blank"
                  className="block w-full py-3 text-center font-medium bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                >
                  <div className="flex items-center justify-center gap-2">
                    <img src="/images/whatsapp1.svg" alt="" className="h-5 w-5" />
                    Connect on WhatsApp
                  </div>
                </a>
              </div>
              <div>
                <MapComponent/>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="p-6 border-t border-gray-200/50">
          <h2 className="text-2xl font-bold mb-6">Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              'High-Speed WI-FI',
              'Furnished',
              'Camera Security',
              'Washing Machine',
              'Purified Water',
              'Professional Housekeeping'
            ].map((service) => (
              <div key={service} className="p-4 rounded-lg bg-[#ffc72c] justify-center flex text-center items-center hover:bg-white/70 transition-colors">
                {service}
              </div>
            ))}
          </div>
        </div>

        {/* Address and Nearby Places */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 border-t border-gray-200/50">
          <div>
            <h2 className="text-2xl font-bold mb-4">Address</h2>
            <a 
              href={hostel?.locationLink}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
            >
              <img src="/images/location_Marker.svg" alt="" className="h-4 w-4" />
              <span>{hostel?.location}</span>
            </a>
          </div>

          {hostel?.nearby1 && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Nearby Places</h2>
              <div className="space-y-3">
                {[
                  { place: hostel.nearby1, distance: hostel.nearby1distance },
                  { place: hostel.nearby2, distance: hostel.nearby2distance },
                  { place: hostel.nearby3, distance: hostel.nearby3distance },
                ].filter(item => item.place).map((item, index) => (
                  <div key={index} className="flex items-center gap-4 text-gray-600">
                    <img src="/images/location_Marker.svg" alt="" className="h-4 w-4" />
                    <span>{item.place}</span>
                    <span className="text-sm text-gray-500">- {item.distance}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Other Hostels Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Other Hostels</h2>
        <HostelsComponent notincludID={hostel?._id} />
      </div>
    </div>
  );
};

export default HostelDetail;