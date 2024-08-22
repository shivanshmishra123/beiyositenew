import React, { useEffect, useState } from 'react'

import './HostelStyles/HostelDetail.css'
import {  WhatsappIcon,} from "react-share";

import { Scrollbar, Pagination ,FreeMode,  Autoplay, EffectCards,Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/pagination';
import "swiper/css/effect-cube";
import "swiper/css/navigation";
import Form from '../components/Form';
import { useParams } from 'react-router-dom';
import HostelsComponent from '../components/HostelsComponent';
import VirtualTour from '../components/VirtualTour';
import MapComponent from '@/components/googleMapComponent/page';

const HostelDetail = () => {
   const {id} = useParams();
   const [hostel,setHostel]= useState(null);
   useEffect( ()=>{
    const fetchSingleHostel = async ()=>{
      try{
        const URL = `https://beiyo-admin.vercel.app/api/hostels/${id}`
      const response = await fetch(URL);
      const data = await response.json();
      document.title=`Book your Bed in ${data.name}`
      console.log(data);
      setHostel(data);
      }catch(error){
        console.log(error);
      }
    }
   fetchSingleHostel(); 
   },[id])
  return (
    <div className='hosteldetailmain'>
             <p className='Hostelheading'>
                <a href="/">Beiyo</a> <a href="/hostel">/Hostels </a>
                /{hostel&&hostel.name} 
            </p>
            <div className="singlehosteldetail">
             <div className="hostelcontentdetails">
             <div className='hosteldetailsname'> 
              <h1 className='text-3xl'>Beiyo {hostel&&hostel.name}</h1> 
              <div className='flex items-center gap-[0.2rem]'> 
              <img src="/images/location_Marker.svg" alt="" style={{height:"1rem"}} />
              <p>{hostel&&hostel.location}</p>
              </div>
             </div>
             <div className="sharediv">
              <a href={`https://api.whatsapp.com/send?text=https://beiyo.in/hostel/${hostel&&hostel._id}`} target='_blank'>
              <div className='whatsappSharediv'>
              <img src="/images/whatsapp1.svg" alt="" />
              <p>Share</p>
              </div>
              </a>
             <a className='hostelLInk' href={hostel&&hostel.locationLink}>View Directions on Map</a>
             </div>
             </div>
            
    <div className="content2hosteldetail">
    <div className="imagehosteldetails">
              <Swiper
               modules={[ Navigation, Autoplay]}
               slidesPerView = {1}  
               loop={true}
               navigation={true}
               autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              >
                 <SwiperSlide >
                 <img src={hostel&&hostel.image} alt="" />
                 </SwiperSlide>
                 <SwiperSlide>
                 <img src={hostel&&hostel.image2} alt="" />
                 </SwiperSlide>
                 <SwiperSlide>
                 <img src={hostel&&hostel.image3} alt="" />
                 </SwiperSlide>
              </Swiper>
             </div>
          <div className="priceandformdiv">
          <div className='form'>
           <div> <Form hostelID={hostel&&hostel._id} /></div>
            {/* <MapComponent
             mapLink={hostel&&hostel.mapLink
}
             /> */}
          </div> 
      </div>
          </div>
          <div className='content3hosteldetail'>

         <div className="service">

            <div className="pricedetail">
{ hostel&&hostel.singlePrice && (
              <div className="occupancyandprice">
              <div className="occupancy">
                              <img src="/images/bed.svg" alt="" />
                              <p>Single</p>
                          </div>
                          <p className='price'><img src="/images/rupee.svg" alt="" />{hostel&&hostel.singlePrice}/bed</p>
              </div>
)
}
{ hostel&&hostel.doublePrice && (
              <div className="occupancyandprice">
              <div className="occupancy">
                              <img src="/images/bed.svg" alt="" />
                              <p>Double</p>
                          </div>
                          <p className='price'><img src="/images/rupee.svg" alt="" />{hostel&&hostel.doublePrice}/bed</p>
              </div>
)
}
{ hostel&&hostel.triplePrice && (
              <div className="occupancyandprice">
              <div className="occupancy">
                              <img src="/images/bed.svg" alt="" />
                              <p>Triple</p>
                          </div>
                          <p className='price'><img src="/images/rupee.svg" alt="" />{hostel&&hostel.triplePrice}/bed</p>
              </div>
)
}    
             </div>
             
                      <h1 className='serviceshosteldetail'>Services</h1>
      <div className="content3div">   
        <div className="servicesdetails">
              {/* <img src="/images/wifi-hostel.svg" alt="" /> */}
          High-Speed WI-FI</div>
        <div className="servicesdetails">
          {/* <img src="/images/furnish.svg " alt="" /> */}
          Furnished</div>
        <div className="servicesdetails">
        {/* <img src="/images/camera.svg " alt="" /> */}
          Camera Security</div>    
        <div className="servicesdetails">
          {/* <img src="/images/washing-machinedetail.svg" alt="" /> */}
          Washing Machine</div>
        <div className="servicesdetails">
        {/* <img src="/images/purifiedwater.svg" alt="" /> */}
          Purified Water</div>
        <div className="servicesdetails">
        {/* <img src="/images/broomdetail.svg" alt="" /> */}
          Professional Housekeeping
          </div>
      </div>
          <div className='newaddressblock'>
            <h1>Address</h1>
            <p><a href={hostel&&hostel.locationLink}>
              <p className='flex items-center'><img src="/images/location_Marker.svg" alt="" style={{height:"1rem"}} />{hostel&&hostel.location}</p></a></p>
          </div>
          <div className="mobileformParent">
            <div className='mobileform'>
            <Form hostelName={hostel&&hostel.name} />
          </div> 
            </div>
          <div className='nearByPlacesblock'>
            <h1>Nearby Places</h1>
            <div style={{display:'flex', alignItems:'center', gap:'1rem'}}> <p><img src="/images/location_Marker.svg" alt="" style={{height:"1rem"}} />{hostel&&hostel.nearby1}</p><p style={{height:'1rem'}}>- 750m</p></div>
            <div style={{display:'flex', alignItems:'center', gap:'1rem'}}> <p><img src="/images/location_Marker.svg" alt="" style={{height:"1rem"}} />{hostel&&hostel.nearby2}</p><p style={{height:'1rem'}}>- 96m</p></div>
            <div style={{display:'flex', alignItems:'center', gap:'1rem'}}> <p><img src="/images/location_Marker.svg" alt="" style={{height:"1rem"}} />{hostel&&hostel.nearby3}</p><p style={{height:'1rem'}}>- 1.6Km</p></div>
             
              
             
          </div>
          {/* <VirtualTour/> */}
         </div>
         {/* <div className="map">MAP</div> */}
          </div>
    
      {/* <div className="content4div">
                <h1>Details of {hostel&&hostel.name}</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, saepe necessitatibus, unde sunt, officiis laudantium repellat alias autem debitis est velit voluptas eius illo quos ducimus tempore voluptatibus eum quo.
                Harum nesciunt autem earum, repellat minus repellendus! Delectus dolores porro voluptatum veniam. Voluptate, magnam ipsum excepturi suscipit architecto quisquam adipisci harum placeat sint dignissimos corporis! Natus fuga quisquam aperiam aut?
                Amet, totam quis sapiente voluptates qui natus expedita vitae deleniti sit consequuntur officiis nobis ipsum laboriosam esse accusamus ipsa architecto doloribus, cum provident eligendi commodi beatae! Incidunt adipisci inventore consectetur!
                Magni a sint, vitae ea odio cumque eligendi maxime expedita iusto necessitatibus, vero tempore impedit. Numquam et quis quia eius doloremque earum, nostrum consequuntur, enim asperiores ab consequatur! Veritatis, modi?
                </p>
              </div> */}
     

    </div>
           <h1 class name='text-2xl' style={{marginTop:"3rem"}}>Other Hostels</h1>
           <HostelsComponent
           notincludID={hostel&&hostel._id}
           />
            </div>
    
  )
}

export default HostelDetail