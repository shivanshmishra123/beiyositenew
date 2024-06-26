import React, { useState, useEffect } from 'react';
import './HostelStyles/hostelmain.css';
import HostelsComponent from '../components/HostelsComponent';


const Hostel = () => {
    document.title='Explore our Hostels in Indore'
    return (
        <div className='hostelMainpage page' >
            <p className='Hostelheading'>
                <a href="/">Beiyo</a>/Hostels 
            </p>
            <h1 className="mainHead">
                Explore Our PG/Hostels in Indore
            </h1>
           <HostelsComponent
           />
        </div>
    )
}
export default Hostel;
