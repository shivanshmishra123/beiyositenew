import React, { useState } from 'react';
import axios from 'axios';
import './componentsStyling/form.css'
const Form = ({hostelID}) => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    gender: '',
    whatsappInfo: false,
    hostel: hostelID,
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const { name, mobile, gender, whatsappInfo } = formData;

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await axios.post('https://beiyo-backend-tdk4.onrender.com/api/users', formData);
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
        <p>Form submitted successfully!</p>
      ) : (
        <form onSubmit={handleSubmit} className='requestcallbackform'>
         <div className="namephoneformdiv"> <p>Name</p>
          <input className='namephoneinput' type="text" name="name" value={name} onChange={handleChange}  required /><br />
          </div>
           <div className="namephoneformdiv"> <p>Mobile</p>
           <input className='namephoneinput' type="text" name="mobile" value={mobile} onChange={handleChange} placeholder="+91" required /><br />
          </div>
        <div className="genderdiv">
           <div className="checkeddiv"><input type="radio" name="gender" value="male" onChange={handleChange} /><p>Male</p></div>
           <div className="checkeddiv"><input type="radio" name="gender" value="female" onChange= {handleChange} /> Female<br /></div>
         </div>
         <div className="checkeddivwhatsapp"><input type="checkbox" name="whatsappInfo" checked={whatsappInfo} onChange={() => setFormData({ ...formData, whatsappInfo: !whatsappInfo })} /> <p className="whatsappcheck">Wants Latest Rooms info through WhatsApp</p> </div>
          
          <button type="submit" className='submit' disabled={submitting}>Request a callBack</button>
          <p style={{textAlign:'center'}}>OR</p>
        </form>
      )}
    </div>
  );
};

export default Form;
