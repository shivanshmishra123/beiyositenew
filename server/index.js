const express = require('express');
const cors = require('cors');
const { config } = require('dotenv');
const { connectDB } = require('./db');
const { Hostel } = require('./models/Hostel');
const NodeCache = require('node-cache');

const app = express();
const cache = new NodeCache();
config();
app.use(cors());
connectDB();


const PORT = process.env.PORT || 5000;

app.get("/api/hostel", async (req, res) => {
    try {
        const cachedData = cache.get('hostelData');
        if (cachedData) {
            console.log('Data retrieved from cache');
            return res.status(200).json(cachedData);
        }

        const hostel = await Hostel.find();

        cache.set('hostelData', hostel, 3600);
        console.log('Data saved to cache');

        res.status(200).json(hostel);
    } catch (error) {
        console.error('Error fetching hostels:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
