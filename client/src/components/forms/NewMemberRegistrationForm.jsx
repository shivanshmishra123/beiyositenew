import { useState } from 'react';



const ResidentRegistration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [roomNumber, setRoomNumber] = useState('');
  const [photo, setPhoto] = useState(null);
  const [aadharCard, setAadharCard] = useState(null);
  const [hostel,setHostels] = useState(null);
  const [rooms, setRooms] = useState([]);
//   const [otp, setOtp] = useState('');
//   const [otpSent, setOtpSent] = useState(false);

//   const handleSendOtp = async () => {
//     const response = await fetch('/api/send-otp', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ mobileNumber }),
//     });

//     if (response.ok) {
//       setOtpSent(true);
//     } else {
//       alert('Failed to send OTP');
//     }
//   };

useEffect(() => {
  axios.get('https://beiyo-admin.vercel.app/api/rooms')
    .then(response => {
      setRooms(response.data);
    })
    .catch(error => {
      console.error('Error fetching rooms:', error);
    });

  axios.get('https://beiyo-admin.vercel.app/api/hostels')
    .then(response => {
      setHostels(response.data);
    })
    .catch(error => {
      console.error('Error fetching hostels:', error);
    });
}, []);

  const handleRegistration = async (e) => {
    e.preventDefault();

    // if (!otpSent) {
    //   alert('Please verify your mobile number first.');
    //   return;
    // }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('mobileNumber', mobileNumber);
    formData.append('roomNumber', roomNumber);
    formData.append('photo', photo);
    formData.append('aadharCard', aadharCard);
    // formData.append('otp', otp);

    const response = await fetch('/api/register-resident', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      alert('Registration successful! Check your email for your unique ID.');
    } else {
      alert('Registration failed.');
    }
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    // Assuming a fixed amount for registration; adjust as needed
    const amount = 5000; // Amount in paise (INR 50)

    const response = await fetch('/api/initiate-payment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount }),
    });

    if (response.ok) {
      const data = await response.json();
      window.location.href = data.paymentUrl; // Redirect to PhonePe payment page
    } else {
      alert('Payment initiation failed');
    }
  };
  

  return (
    <form onSubmit={handlePayment}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        required
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="text"
        value={mobileNumber}
        onChange={(e) => setMobileNumber(e.target.value)}
        placeholder="Mobile Number"
        required
      />
      {/* <button type="button" onClick={handleSendOtp} disabled={otpSent}>
        Send OTP
      </button>
      {otpSent && (
        <input
          type="text"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          placeholder="Enter OTP"
          required
        />
      )} */}
      <input
        type="text"
        value={roomNumber}
        onChange={(e) => setRoomNumber(e.target.value)}
        placeholder="Room Number"
        required
      />
      <input
        type="file"
        onChange={(e) => setPhoto(e.target.files[0])}
        required
      />
      <input
        type="file"
        onChange={(e) => setAadharCard(e.target.files[0])}
        required
      />
      <button type="submit">Register and Pay</button>
    </form>
  );
};

export default ResidentRegistration;
