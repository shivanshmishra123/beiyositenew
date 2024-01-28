const {  mongoose } = require("mongoose");
const { config } = require('dotenv');
const Hostel = require("./models/Hostel");
config();
const connectDB = async ()=>{
    try{
    
        await mongoose.connect("mongodb+srv://beiyotech:Uogzx9novOOek52s@cluster0.gxdcwng.mongodb.net/?retryWrites=true&w=majority",{
            useNewUrlParser: true,
      useUnifiedTopology: true,
        })
        console.log("connect to mongo");
    }
    catch(error){
        console.error('Error connecting to MongoDB:', error);
    process.exit(1);
    }
}
module.exports={  connectDB  ,Hostel }