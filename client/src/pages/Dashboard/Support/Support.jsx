import React, { useContext, useState } from 'react';
import axios from 'axios';
import { Box, TextField, Button, Typography } from '@mui/material';
import { History } from 'lucide-react';
import AuthContext from '@/context/AuthContext';
import {format} from 'date-fns'
const Support = () => {
  const [helpTopic, setHelpTopic] = useState('');
  const [description, setDescription] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const [ticketDetails,setTicketDetails]=useState([]);
  const [oldticket,setOldTicket] = useState(false);
  const { user} = useContext(AuthContext);
  const formatdate = (date) => {
    const d = new Date(date);

    // Custom format to include ordinal suffix
    const formattedDate = format(d, "do MMMM yyyy");

    return formattedDate;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess('');
    setError('');

    try {
      await axios.post('https://beiyo-admin.vercel.app/api/dashboard/raise-ticket', {
        userId : user._id,
        helpTopic:helpTopic,
        description:description,
      });
      setSuccess('Ticket raised successfully!');
      setHelpTopic('');
      setDescription('');
    } catch (error) {
      setError('Error raising ticket. Please try again.');
    }
  };


  const handleGenerateTicket =()=>{
    setOldTicket(false);
  }
  const handleRaiseTicket = async ()=>{
   try {
    const id = user._id;
    setOldTicket(true);
    const response = await axios.get(`https://beiyo-admin.vercel.app/api/dashboard/oldTickets/${id}`);
   setTicketDetails(response.data);
      console.log(ticketDetails);
   } catch (error) {
    console.log(error)
   }  
  }

  return (
<div className='supportDashboard'>
  {!oldticket?(
    <div>
       <button className='h-full p-2 w-100 rounded-lg flex border-2 gap-1 border-black' onClick={handleRaiseTicket}> <History/>  Raised Tickets</button>
       <Box component="form" onSubmit={handleSubmit}>
        <div className='flex justify-between'>
        <Typography variant="h4" gutterBottom>Raise a Ticket</Typography>
       
        </div>
    
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
        <button type="submit" className='w-fit p-2 border-2 border-black bg-[#f7d442] rounded-full'>Raise Ticket</button>
      </Box>
    </div>
       
  ):(
   <div className='flex flex-col gap-2'>
       <button className='h-full p-2 w-100 rounded-lg flex border-2 gap-1 border-black' onClick={handleGenerateTicket}>Generate a new Ticket</button>
<div>
<Typography variant="h4" gutterBottom>Old Tickets</Typography>
{ticketDetails.map((ticket) => (
      <Box key={ticket._id} sx={{ mb: 2, p: 2, border: '1px solid #ccc' }}>
        <Typography variant="body1">Help Topic: {ticket.helpTopic}</Typography>
        <Typography variant="body1">Description: {ticket.description}</Typography>
        <Typography variant="body2">Date: {formatdate(ticket.createdAt)}</Typography>
        <Typography variant="body2">Status: {ticket.status}</Typography>
      </Box>
    ))}
</div>
   </div>

  )
  }
</div>
  );
};

export default Support;
