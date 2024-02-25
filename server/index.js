const express = require('express');
const cors = require('cors');
const { config } = require('dotenv');
const { connectDB } = require('./db');
const { Hostel } = require('./models/Hostel');
const { Form } = require('./models/Form')
const bodyParser = require('body-parser');
const app = express();
const fs = require('fs');
const path = require('path');
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
      const hostels = await Hostel.find();
      
      // Fetch image data for each hostel
      // const hostelsWithImages = await Promise.all(hostels.map(async hostel => {
      //     let hostelWithImage = hostel.toJSON(); // Convert hostel document to JSON object
          
      //     if (hostel.image) {
      //         // Convert the image buffer to a base64-encoded string
      //         const imageBase64 = Buffer.from(hostel.image).toString('base64');
              
      //         // Assuming you want to include the image data as a base64-encoded string
      //         hostelWithImage.imageData = imageBase64;
      //     }
          
      //     return hostelWithImage;
      // }));
      
      res.status(200).json(hostelsWithImages);
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
