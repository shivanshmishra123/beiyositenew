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
            const res = await axios.post('https://localhost:5000/api/pay/initiate', { amount: parseFloat(amount) });
            console.log(res.data);
            console.log(res.data.data.instrumentResponse.redirectInfo.url)
            setUrl(res.data.data.instrumentResponse.redirectInfo.url);
            // Optionally, you can redirect the user here
        } catch (err) {
            console.error(err);
        }
        setSubmitting(false);
    };
    const handlePay=()=>{
        window.location.href=url;
    }
    const handleChange = (e) => {
        setAmount(e.target.value);
    };

    return (
        <div style={{ paddingTop: '10rem' }}>
            <form onSubmit={handleSubmit}>
                <input type="number" value={amount} onChange={handleChange} />

                <button type="submit" disabled={submitting}>Pay</button>
                <button type="submit" onClick={handlePay}>Do payment</button>
            </form>
            {initiate?(<div> <iframe href={url}/></div>):null}

        </div>
    );
}

export default Payment;
