import axios from 'axios';
import React, { useState } from 'react';
import { redirect } from 'react-router-dom';

const Payment = () => {
    const [amount, setAmount] = useState(0);
    const [submiting,setSubmitting]=useState(false);
    const handleSubmit = async e => {
        e.preventDefault();
        setSubmitting(true);
        try {
          const res = await axios.post('https://beiyositenew-api-alpha.vercel.app/api/pay/initiate', {amount: parseFloat(amount)});
          console.log(res.data);
          // Optionally, you can redirect the user here
        } catch (err) {
          console.error(err);
        }
        setSubmitting(false);
      };

    const handleChange = (e) => {
        setAmount(e.target.value);
    };

    return (
        <div style={{ paddingTop: '10rem' }}>
          <form onSubmit={handleSubmit}>
          <input type="text" onChange={handleChange} />
          <button type="submit" disabled={submiting} onClick={handleSubmit}>Pay</button>
          </form>
        </div>
    );
}

export default Payment;
