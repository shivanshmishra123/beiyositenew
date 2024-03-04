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

const HostelDetail = () => {
   const {id} = useParams();
   const [hostel,setHostel]= useState(null);
   useEffect( ()=>{
    const fetchSingleHostel = async ()=>{
      try{
        const URL = `https://beiyo-backend-tdk4.onrender.com/api/hostel/${id}`
      const response = await fetch(URL);
      const data = await response.json();
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
                <a href="/">Beiyo</a> <a href="/hostel">/Hostels</a>
                /{hostel&&hostel.name} 
            </p>
            <div className="singlehosteldetail">
             <div className="hostelcontentdetails">
             <div className='hosteldetailsname'> 
              <h1>{hostel&&hostel.name}</h1> 
              <div style={{ display: "flex" }}> 
              <img src="/images/location_Marker.svg" alt="" style={{height:"1rem"}} />
              <p>{hostel&&hostel.location}</p>
              </div>
             </div>
             <div className="sharediv">
              {/* <img src="/images/share.png" alt="" /> */}
              <a href={`https://api.whatsapp.com/send?text=https://beiyo.in/hostel/${hostel&&hostel._id}`} target='_blank'>
              <WhatsappIcon size={40} round={true}/>
              </a>
             <a href={hostel&&hostel.locationLink}>View Directions on Map</a>
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
                 <SwiperSlide style={{width:"25rem"}}>
                 <img src={hostel&&hostel.image} alt="" />
                 </SwiperSlide>
                 <SwiperSlide>
                 <img src={hostel&&hostel.image} alt="" />
                 </SwiperSlide>
                 <SwiperSlide>
                 <img src={hostel&&hostel.image} alt="" />
                 </SwiperSlide>
              </Swiper>
             
             </div>
          <div className="priceandformdiv">
      <div className="priceshosteldetail">
                <div className="pricehosteldiv">   
                <div className="doublehosteldetails">
                                <img src="/images/double.svg" alt="" />
                                <p>Double</p>
                            </div>
                            <p className='price'><img src="/images/rupee.svg" alt="" />{hostel&&hostel.price}/mon</p>
                            </div>
                            <div className="pricehosteldiv">   
                            <div className="triplehosteldetails">
                                <img src="/images/triple.svg" alt="" />
                                <p>Triple</p>
                            </div>
                            <p className='price'><img src="/images/rupee.svg" alt="" />{hostel&&hostel.price}/mon</p>
                            </div>   
          </div>
          <div className='form'><Form hostelID={hostel&&hostel._id} /></div>
      </div>
          </div>
          <h1 className='serviceshosteldetail'>Services</h1>
      <div className="content3div">   
        <div className="servicesdetails">RO WATER</div>
        <div className="servicesdetails">RO WATER</div>
        <div className="servicesdetails">RO WATER</div>
        <div className="servicesdetails">RO WATER</div>
        <div className="servicesdetails">RO WATER</div>
        <div className="servicesdetails">RO WATER</div>
        <div className="servicesdetails">RO WATER</div>
        <div className="servicesdetails">RO WATER</div>
        <div className="servicesdetails">RO WATER</div>
      </div>
      <div className="content4div">
                <h1>Details of {hostel&&hostel.name}</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, saepe necessitatibus, unde sunt, officiis laudantium repellat alias autem debitis est velit voluptas eius illo quos ducimus tempore voluptatibus eum quo.
                Harum nesciunt autem earum, repellat minus repellendus! Delectus dolores porro voluptatum veniam. Voluptate, magnam ipsum excepturi suscipit architecto quisquam adipisci harum placeat sint dignissimos corporis! Natus fuga quisquam aperiam aut?
                Amet, totam quis sapiente voluptates qui natus expedita vitae deleniti sit consequuntur officiis nobis ipsum laboriosam esse accusamus ipsa architecto doloribus, cum provident eligendi commodi beatae! Incidunt adipisci inventore consectetur!
                Magni a sint, vitae ea odio cumque eligendi maxime expedita iusto necessitatibus, vero tempore impedit. Numquam et quis quia eius doloremque earum, nostrum consequuntur, enim asperiores ab consequatur! Veritatis, modi?
                Aperiam maiores adipisci amet consequatur voluptatem, quaerat hic esse reprehenderit reiciendis voluptatibus, cumque est nihil totam id similique consectetur earum ea praesentium enim accusantium minima velit placeat perspiciatis dignissimos. Error.
                Ab, ducimus, vel vitae natus ipsum facilis ratione esse eligendi labore, perferendis aspernatur architecto nam dolore ad! Facilis, repellat non vel dicta ea adipisci atque molestiae? Porro tempora voluptatem consectetur.
                Nisi, recusandae aspernatur. Accusantium officia maiores alias distinctio, at sunt quas velit animi expedita rem magni! Omnis ex veritatis cum sapiente quas, voluptatem iusto debitis facere nostrum quo sequi voluptate?
                Eveniet nihil delectus optio voluptate! Minus est ipsa tenetur aspernatur, optio, quos ea fugit velit officia deleniti dicta error nulla harum, sint nobis? Illum natus accusantium molestiae, deleniti soluta distinctio!</p>
              </div>
    </div>
           <h1 style={{marginTop:"2rem"}}>Other Hostels</h1>
           <HostelsComponent/>
            </div>
    
  )
}

export default HostelDetail