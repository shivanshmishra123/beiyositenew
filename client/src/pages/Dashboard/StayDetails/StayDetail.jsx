import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Typography, CircularProgress } from '@mui/material';

const StayDetails = () => {
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStayDetails = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('https://beiyo-admin.vercel.app/api/dashboard/stay-details', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setDetails(response.data);
      } catch (error) {
        console.error('Error fetching stay details:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchStayDetails();
  }, []);

  if (loading) return <CircularProgress />;

  return (
    <Box>
      <Typography variant="h4" gutterBottom>Stay Details</Typography>
      {details ? (
        <Box sx={{ mb: 2, p: 2, border: '1px solid #ccc' }}>
          <Typography variant="body1">Hostel: {details.hostel}</Typography>
          <Typography variant="body1">Room Number: {details.roomNumber}</Typography>
          <Typography variant="body1">Contract: {details.contract}</Typography>
          <Typography variant="body2">Date Joined: {new Date(details.dateJoined).toLocaleDateString()}</Typography>
        </Box>
      ) : (
        <Typography variant="body1">No stay details available.</Typography>
      )}
    </Box>
  );
};

export default StayDetails;

