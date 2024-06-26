import React, { useEffect, useState } from 'react'
import './ownerForm.css'
import axios from 'axios';
const OwnerForm = () => {
  
    const [formData, setFormData] = useState({
        name: '',
        email:'',
        mobile: '',
        address: '',
        rooms:'',
      });
      const {name,email,mobile,address,rooms}=formData
      useEffect(() => {
          setFormData(prevState => ({
            ...prevState,
      }));
        }
      , []);
      const [submitting, setSubmitting] = useState(false);
      const [success, setSuccess] = useState(false); 
      const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    const handleSubmit = async e => {
        e.preventDefault();
        setSubmitting(true);
        try {
          const res = await axios.post('https://beiyo-admin.vercel.app/api/owners', formData);
          console.log(res.data);
          setSuccess(true);
          // Optionally, you can redirect the user here
        } catch (err) {
          console.error(err);
        }
        setSubmitting(false);
      };
      return (
        <>
          
          {success ? (
            <div className='successOwnerForm'>
                <p style={{fontSize:'4rem'}}  >We'll be reaching out to you soon!!</p>
            </div>
          ) : (
            <>
        <div class="RegistrationForm">
<form class="Form" onSubmit={handleSubmit}>
    <div class="OwnerInformations">
        <div class="UserFeildInputs">
            <label for="name">Name</label>
            <input type="text" id="name" name="name" value={name} onChange={handleChange} required/>
        </div>
        <div class="UserFeildInputs">
            <label for="mobile">Mobile</label>
            <input type="text" id="mobile" name="mobile"  value={mobile} onChange={handleChange} required/>
        </div>
        <div class="UserFeildInputs">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" value={email} onChange={handleChange} required/>
        </div>
        <div class="UserFeildInputs">
            <label for="address">Location</label>
            <input type="text" id="address" name="address" value={address} onChange={handleChange} required/>
        </div>
        <div class="UserFeildInputs">
            <label for="rooms">Rooms available in Your Building</label>
            <input type="text" id="rooms" name="rooms" value={rooms} onChange={handleChange} required/>
        </div>
    </div>
    <button type="submit" disabled={submitting} class="ownerButtonForm">Submit</button>
</form>
</div></>
          
           
          )}
        </>
        )
}

export default OwnerForm