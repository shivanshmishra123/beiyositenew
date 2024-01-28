const express = require('express')
const cors = require('cors')
const { config } = require('dotenv');
const {connectDB} = require('./db');
const {Hostel} = require('./models/Hostel');
const app = express();

config();
app.use(cors());
connectDB();
const BASEURI = process.env.BASEURI;
const PORT = process.env.PORT || 5000;
app.get("/api/hostel",async (req,res)=>{
    try {
        const hostel = await Hostel.find();
        res.status(200).json(hostel);
    }
    catch(error){     
            console.error('Error fetching hostels:', error);
            res.status(500).json({ error: 'Internal Server Error' });
    }
})
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})