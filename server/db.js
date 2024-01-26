const {  mongoose } = require("mongoose");

const Hostel = require("./models/Hostel");

const connectDB = async ()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URI,{
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