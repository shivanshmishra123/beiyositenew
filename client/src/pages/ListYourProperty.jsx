import React from 'react'
import './ListyourProperty.css'
import OwnerForm from '../components/OwnerForm'
const ListYourProperty = () => {
  return (
    <div className='listyourPropertyDiv'>
    <div className="mainList">
    <h1><span style={{color:'#ffc72c'}}>List</span> Your Property</h1>
    <div className="sublist">
      <div className="leftlist">
        <h3>How about "Transform Your Hostel,<br /> Elevate Your Listing"?</h3>
        <div className="listFeatureDiv">
        <img src="/images/location_Marker.svg" alt="" style={{height:"4rem"}} />
          <div className="contentListdiv">
          <h2>Goodbye to Unnoticed Rooms</h2>
          <p>-We're Showcasing them Online</p>
          </div>
         
        </div>
        <div className="listFeatureDiv">
        <img src="./images/brain.png" alt="" style={{height:"4rem"}} />
        <div className="contentListdiv">
        <h2>Unburdened Mind</h2>
          <p>-Simplified hostel/PG management with Beiyo</p>
          </div>
         
        </div>
        <div className="listFeatureDiv">
        <img src="/images/responsible.png" alt="" style={{height:"4rem"}} />
        <div className="contentListdiv">
        <h2>Comprehensive Services</h2>
          <p>- From Maintenance to Design, Leave it All to Us!</p>
          </div>
        </div>
        <div className="listFeatureDiv">
        <img src="/images/house.png" alt="" style={{height:"4rem"}} />
        <div className="contentListdiv">
        <h2>Effortless Rent Collection</h2>
          <p>- Guaranteed Payment Every First Week</p>
          </div>
        </div>
        <div className="listFeatureDiv">
        <img src="/images/secure.png" alt="" style={{height:"4rem"}} />
        <div className="contentListdiv">
        <h2>Fully Secured</h2>
          <p> -Complete Tenant Details Access on Our Platform</p>
          </div>
        </div>
      </div>
      <div className="rightlist">
        <OwnerForm/>
        
      </div>
    </div>
    </div>
    </div>
  )
}

export default ListYourProperty