const {  mongoose } = require("mongoose");

const hostelSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    image:{
        type:String,
    },
    location:{
        type:String,
        required: true,
    },
    locationLink:{
        type:String,
        require:true,
    },
    price:{
        type:String,
    }
})

const Hostel = mongoose.model('Hostel', hostelSchema);

module.exports={Hostel}