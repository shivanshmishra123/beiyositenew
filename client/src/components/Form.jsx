import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './componentsStyling/form.css'
const Form = ( {hostelName}) => {
// {hostelID}
const hostelname = hostelName
    const [formData, setFormData] = useState({
      name: '',
      mobile: '',
      gender: '',
      whatsappInfo: false,
      hostel: '',
    });
    useEffect(() => {
      if (hostelName) {
        setFormData(prevState => ({
          ...prevState,
          hostel: hostelName // Set the hostel field with the value of hostelName prop
        }));
      }
    }, [hostelName]); 
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const { name, mobile, gender, whatsappInfo , hostel} = formData;

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await axios.post('https://beiyositenew-api-alpha.vercel.app/api/users', formData);
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
        <>
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
         <a target='blank' href={`https://api.whatsapp.com/send/?phone=918305523140&text=I%27d%20like%20to%20book%20a%20room%20in%20${hostelname}%20Can%20you%20help%20me%20with%20availability%20my%20name%20is%20:&`} style={{textAlign:"center"}}><button type="submit" id='whatsappsubmit' className='submit'><img src="/images/whatsapp1.svg" alt="" />Connect on WhatsApp</button></a> 
        </>
      
       
      )}
    </div>
    )
  ;
};

export default Form;
