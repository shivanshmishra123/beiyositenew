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
      const res = await axios.post('http://localhost:5000/api/users', formData);
      console.log(res.data);
      setSuccess(true);
      // Optionally, you can redirect the user here
    } catch (err) {
      console.error(err);
    }
    setSubmitting(false);
  };

  return (
    <div>
      <h2>Submit Form</h2>
      {success ? (
        <p>Form submitted successfully!</p>
      ) : (
        <form onSubmit={handleSubmit} className='requestcallbackform'>
          <input type="text" name="name" value={name} onChange={handleChange} placeholder="Name" required /><br />
          <input type="text" name="mobile" value={mobile} onChange={handleChange} placeholder="Mobile" required /><br />
          <input type="radio" name="gender" value="male" onChange={handleChange} /> Male
          <input type="radio" name="gender" value="female" onChange={handleChange} /> Female<br />
          <input type="checkbox" name="whatsappInfo" checked={whatsappInfo} onChange={() => setFormData({ ...formData, whatsappInfo: !whatsappInfo })} /> WhatsApp Information<br />
          <button type="submit" disabled={submitting}>Submit</button>
        </form>
      )}
    </div>
  );
};

export default Form;
