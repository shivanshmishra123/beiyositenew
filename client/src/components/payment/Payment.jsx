import axios from 'axios';
import React, { useState } from 'react';
import { redirect } from 'react-router-dom';

const Payment = () => {
    const [amount, setAmount] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const [initiate,setIntiate]=useState(false);
    const [url,setUrl]=useState(null);
    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        setIntiate(true);
        try {
            // https://beiyo-admin.vercel.app
            const res = await axios.post('https://beiyo-admin.vercel.app/api/pay/initiate',  {amount:parseInt(amount)});
            setIntiate(true);
            setUrl(res.data.data.instrumentResponse.redirectInfo.url);
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
                <input type="number" value={amount} onChange={handleChange} />

                <button type="submit" disabled={submitting}>Intiate Payment</button>
            </form>
        {initiate?(<div> <iframe href={url}>Pay</iframe></div>):null}

        </div>
    );
}

export default Payment;
