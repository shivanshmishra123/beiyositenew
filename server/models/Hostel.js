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
    }
});

const Hostel = mongoose.model('Hostel', hostelSchema);

module.exports = { Hostel };
