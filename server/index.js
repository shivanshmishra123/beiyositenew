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



// const express = require('express');
// const cors = require('cors');
// const { config } = require('dotenv');
// const { connectDB } = require('./db');
// const bodyParser = require('body-parser');

// const app = express();
// config();
// app.use(cors());
// connectDB();
// app.use(bodyParser.json());

// const PORT = process.env.PORT || 5000;

// // Middleware for logging
// app.use((req, res, next) => {
//     const start = Date.now();
//     res.on('finish', () => {
//         const duration = Date.now() - start;
//         console.log(`${req.method} ${req.originalUrl} - ${duration}ms`);
//     });
//     next();
// });

// // Root route
// app.get("/", (req, res) => {
//     res.json("Welcome to the Beiyo backend");
// });

// // Routes
// app.use('/api/hostel', require('./routes/hostels'));
// app.use('/api/formShown', require('./routes/forms'));
// app.use('/api/owners', require('./routes/owners'));

// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });
