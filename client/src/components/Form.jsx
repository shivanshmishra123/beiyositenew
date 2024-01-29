import React, { useState } from 'react';
import axios from 'axios';

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    latestMessage: false,
    male: false,
    female: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple client-side validation
    if (!formData.name.trim() || !formData.mobile.trim()) {
      alert('Name and Mobile fields are required');
      return;
    }

    try {
      await axios.post('http://localhost:5000/submit-form', formData);
      console.log('Form submitted successfully');
      alert('Form submitted');
      // Optionally, you can reset the form here
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="form" id="form">
      <div className="formtextsection">
        <h1>You will get a callback in 24hrs</h1>
        <form onSubmit={handleSubmit}>
          <div className="formdiv">
            <h3>Name:<span>*</span></h3>
            <input className='name' type="text" name="name" onChange={handleChange} required />
          </div>
          <div className="formdiv">
            <h3>Mobile:<span>*</span></h3>
            <input type="number" name="mobile" onChange={handleChange} required />
          </div>
          <div className="formdivChecked">
            <input className='checked' type="checkbox" name="male" onChange={handleChange} />
            <p>Male</p>
          </div>
          <div className="formdivChecked">
            <input className='checked' type="checkbox" name="female" onChange={handleChange} />
            <p>Female</p>
          </div>
          <div className="formdivChecked">
            <input className='checked' type="checkbox" name="latestMessage" onChange={handleChange} />
            <p>Wants Latest Rooms info through WhatsApp </p>
          </div>
          <button type="submit">Request a callBack</button>
        </form>
      </div>
    </div>
  );
}

export default Form;
