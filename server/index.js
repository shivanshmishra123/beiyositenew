const express = require('express');
const cors = require('cors');
const { config } = require('dotenv');
const { connectDB } = require('./db');
const { Hostel } = require('./models/Hostel');
const { Form } = require('./models/Form')
const NodeCache = require('node-cache');
const bodyParser = require('body-parser');
const app = express();
const cache = new NodeCache();
config();
app.use(cors());
connectDB();
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

app.use((req, res, next) => {
    const start = Date.now();
    res.on('finish', () => {
        const duration = Date.now() - start;
        console.log(`${req.method} ${req.originalUrl} - ${duration}ms`);
    });     
    next();
});

app.get("/api/hostel", async (req, res) => {
    try {
       
        // if (cachedData) {
        //     console.log('Data retrieved from cache');
        //     return res.status(200).json(cachedData);
        // }
        const hostel = await Hostel.find();
        // cache.set('hostelData', hostel, 3600);
        // console.log('Data saved to cache');
        res.status(200).json(hostel);
    } catch (error) {
        console.error('Error fetching hostels:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

  app.post('/api/users', async (req, res) => {
    try {
        const newForm = new Form({
        name: req.body.name,
        mobile: req.body.mobile,
        gender: req.body.gender,
        whatsappInfo: req.body.whatsappInfo,
        hostel: req.body.hostel
      });
  
      const savedForm = await newForm.save();
      res.json(savedForm);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Server error' });
    }
  });
  
  
  app.get('/api/formShown', async(req,res)=>{
    try {
        const forms = await Form.find();
        res.json(forms);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
  });
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
