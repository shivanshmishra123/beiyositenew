import React, { useEffect, useState } from 'react';

import './componentsStyling/form.css'
import Payment from './payment/Payment';
import api from '@/api/apiKey';
const Form = ( {hostelId,hostelName}) => {
    const [formData, setFormData] = useState({
      name: '',
      mobileNumber: '',
      hosteId: '',
    });
    useEffect(() => {
      if (hostelId) {
          setFormData(prevState => ({
              ...prevState,
              hostelId: hostelId
          }));
      }
  }, [hostelId]); 
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const { name, mobileNumber} = formData;

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await api.post('https://beiyo-admin.in/api/requestForm', formData);
      console.log(res.data);
      setSuccess(true);
      // Optionally, you can redirect the user here
    } catch (err) {
      console.error(err);
    }
    setSubmitting(false);
  };

  return (
    <div className='form-div'>
      
      {success ? (
        <p>We'll be reaching out to you soon!!</p>
      ) : (
        <>
          <form onSubmit={handleSubmit} className='requestcallbackform'>
         <div className="namephoneformdiv"> <p>Name</p>
          <input className='namephoneinput' type="text" name="name" value={name} onChange={handleChange}  required /><br />
          </div>
           <div className="namephoneformdiv"> <p>Mobile</p>
           <input className='namephoneinput' type="text" id="mobile" name="mobileNumber" value={mobileNumber} onChange={handleChange} placeholder="+91" required /><br />
          </div>
          <button type="submit" className='submit' disabled={submitting}>Request a callBack</button>  
        </form>
        <p style={{textAlign:"center"}}>OR</p>  
         <a target='blank' href={`https://api.whatsapp.com/send/?phone=918305523140&text=I%27d%20like%20to%20book%20a%20room%20in%20${hostelName}%20Can%20you%20help%20me%20with%20availability%20my%20name%20is%20:&`} style={{textAlign:"center"}}><button type="submit" id='whatsappsubmit' className='submit'><img src="/images/whatsapp1.svg" alt="" />Connect on WhatsApp</button></a> 
        </>
     
       
      )}
    </div>
    )
  ;
};

export default Form;
