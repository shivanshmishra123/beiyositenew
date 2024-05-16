const express = require('express');
const cors = require('cors');
const { config } = require('dotenv');
const { connectDB, OwnerForm } = require('./db');
const { Hostel } = require('./models/Hostel');
const { Form } = require('./models/Form')
const bodyParser = require('body-parser');
const { default: axios } = require('axios');

const app = express();
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

app.get("/", (req,res)=>{
  res.json("Welcome to the Beiyo backend");
});
app.get("/api/hostel", async (req, res) => {
  try {
      const hostels = await Hostel.find();
      res.status(200).json(hostels);
  } catch (error) {
      console.error('Error fetching hostels:', error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
});
 
app.get("/api/hostel/:id",async(req,res)=>{
   try{
    const hostel = await Hostel.findById(req.params.id);  
    if(!hostel){
      alert("no hostel are available");
    }
    res.json(hostel);
   }catch(error){
    console.error('Error fetching ', error);
    res.status(500).json({ error: 'Internal Server Error' });
   }
    })
    app.patch('/api/hostel/updatingrooms', async (req, res) => {
      try {
        // Fetch local hostels
        const hostels = await Hostel.find();
    
        // Fetch data from external API
        const response = await axios.get('https://beiyo-admin.vercel.app/api/hostels');
        const dHostels = response.data;
    
        // Update remaining beds for each local hostel
        for (const hostel of hostels) {
          // Find corresponding hostel data from external API
          const dynamicHostel = dHostels.find(h => h.name === hostel.name);
          
          // If the dynamic hostel is found, update remaining beds
          if (dynamicHostel) {
            hostel.remainingBeds = dynamicHostel.totalRemainingBeds;
            await hostel.save(); // Save the changes
          }
        }
        res.json({ message: 'Hostel data updated successfully.' });
      } catch (error) {
        console.error('Error updating hostel data:', error);
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
  app.post('/api/owners',async(req,res)=>{
    const newOwner = new OwnerForm({
      name: req.body.name,
      email: req.body.email,
    // Ownername: req.body.Ownername,
    mobile:req.body.mobile,
    address:req.body.address,
    rooms :req.body.rooms
    })
    const saveOwnerForm = await newOwner.save();
    res.json(saveOwnerForm);
    })
  
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
