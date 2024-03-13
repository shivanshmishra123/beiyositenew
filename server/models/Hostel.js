const mongoose = require("mongoose");

const hostelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    locationLink: {
        type: String,
        required: true,
    },
    price: {
        type: String,
    },
    image: {
        type: String, // Store image data as binary
    },
    image2:{
        type: String,
    },
    image3:{
        type:   String,
    },
    image4:{
        type:String
    }
});

const Hostel = mongoose.model('Hostel', hostelSchema);

module.exports = { Hostel };
