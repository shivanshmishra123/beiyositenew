import React, { useState } from 'react';
import axios from 'axios';
import { Box, TextField, Button, Typography } from '@mui/material';

const Support = () => {
  const [helpTopic, setHelpTopic] = useState('');
  const [description, setDescription] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess('');
    setError('');

    try {
      const token = localStorage.getItem('token');
      await axios.post('http://localhost:5000/api/dashboard/raise-ticket', {
        helpTopic,
        description,
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setSuccess('Ticket raised successfully!');
      setHelpTopic('');
      setDescription('');
    } catch (error) {
      setError('Error raising ticket. Please try again.');
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Typography variant="h4" gutterBottom>Support</Typography>
      {success && <Typography color="success" gutterBottom>{success}</Typography>}
      {error && <Typography color="error" gutterBottom>{error}</Typography>}
      <TextField
        label="Help Topic"
        value={helpTopic}
        onChange={(e) => setHelpTopic(e.target.value)}
        fullWidth
        sx={{ mb: 2 }}
        required
      />
      <TextField
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        fullWidth
        multiline
        rows={4}
        sx={{ mb: 2 }}
        required
      />
      <Button type="submit" variant="contained" color="primary">Raise Ticket</Button>
    </Box>
  );
};

export default Support;
