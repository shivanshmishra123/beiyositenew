import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Button, TextField, Typography, Select, MenuItem, InputLabel, FormControl, CssBaseline, Grid } from '@mui/material';

const StudentForm = () => {
  const [hostels, setHostels] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobileNumber: '',
    address: '',
    parentsName: '',
    parentsMobileNo: '',
    hostel: '',
    roomNumber: ''
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const fetchHostels = async () => {
      try {
        const response = await axios.get('https://beiyo-admin.vercel.app/api/hostels');
        setHostels(response.data);
      } catch (error) {
        console.error('Error fetching hostels:', error);
      }
    };
    fetchHostels();
  }, []);

  useEffect(() => {
    const fetchRooms = async () => {
      if (formData.hostel) {
        try {
          const response = await axios.get('https://beiyo-admin.vercel.app/api/rooms');
          const allRooms = response.data;
          const filteredRooms = allRooms.filter(room => room.hostelId === formData.hostel);
          setRooms(filteredRooms);
        } catch (error) {
          console.error('Error fetching rooms:', error);
        }
      }
    };
    fetchRooms();
  }, [formData.hostel]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Name is required";
    if (!formData.email) tempErrors.email = "Email is required";
    if (!formData.mobileNumber || !/^\d{10}$/.test(formData.mobileNumber)) {
      tempErrors.mobileNumber = "Mobile number must be 10 digits";
    }
    if (!formData.address) tempErrors.address = "Address is required";
    if (!formData.parentsName) tempErrors.parentsName = "Parents' name is required";
    if (!formData.parentsMobileNo || !/^\d{10}$/.test(formData.parentsMobileNo)) {
      tempErrors.parentsMobileNo = "Parents' mobile number must be 10 digits";
    }
    if (!formData.hostel) tempErrors.hostel = "Hostel selection is required";
    if (!formData.roomNumber) tempErrors.roomNumber = "Room number is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handlePayment = async () => {
    try {
      const response = await axios.post('https://beiyo-admin.vercel.app/api/pay/initiate', {
        amount: 1, // Placeholder for the amount
        studentData: formData // Send form data for later saving
      });
     
        const transactionId = response.data.merchantTransactionId;
        localStorage.setItem('transactionId', transactionId);
        localStorage.setItem('studentData', JSON.stringify(formData)); // Store form data
        window.location.href = response.data.data.instrumentResponse.redirectInfo.url; // Redirect to payment status check page
      
    } catch (error) {
      console.error('Error initiating payment:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      handlePayment();
    }
  };

  return (
    <Box sx={{ flexGrow: 1, p: 3, backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <CssBaseline />
      <Typography variant="h4" gutterBottom>
        Student Registration Form
      </Typography>
      <form onSubmit={handleSubmit} noValidate>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              error={!!errors.name}
              helperText={errors.name}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Mobile Number"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              error={!!errors.mobileNumber}
              helperText={errors.mobileNumber}
              inputProps={{ maxLength: 10 }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              error={!!errors.address}
              helperText={errors.address}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Parents' Name"
              name="parentsName"
              value={formData.parentsName}
              onChange={handleChange}
              error={!!errors.parentsName}
              helperText={errors.parentsName}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Parents' Mobile Number"
              name="parentsMobileNo"
              value={formData.parentsMobileNo}
              onChange={handleChange}
              error={!!errors.parentsMobileNo}
              helperText={errors.parentsMobileNo}
              inputProps={{ maxLength: 10 }}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth error={!!errors.hostel}>
              <InputLabel>Hostel</InputLabel>
              <Select
                name="hostel"
                value={formData.hostel}
                onChange={handleChange}
              >
                {hostels.map(hostel => (
                  <MenuItem key={hostel._id} value={hostel._id}>
                    {hostel.name}
                  </MenuItem>
                ))}
              </Select>
              {errors.hostel && <Typography color="error">{errors.hostel}</Typography>}
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth error={!!errors.roomNumber}>
              <InputLabel>Room Number</InputLabel>
              <Select
                name="roomNumber"
                value={formData.roomNumber}
                onChange={handleChange}
                disabled={!formData.hostel}
              >
                {rooms.map(room => (
                  <MenuItem key={room._id} value={room.roomNumber}>
                    {room.roomNumber}
                  </MenuItem>
                ))}
              </Select>
              {errors.roomNumber && <Typography color="error">{errors.roomNumber}</Typography>}
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2 }}
            >
              Submit & Pay
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default StudentForm;
