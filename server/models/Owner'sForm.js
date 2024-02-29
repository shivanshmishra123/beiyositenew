const {  mongoose } = require("mongoose");

const OwnerFormSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    Ownername:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    mobile:{
        type:String,
        required: true,
    },
    address:{
        type:String,
        required: true,
    },
    RoomsAvailable:{
        type:Number,
        required: true,
    },
    
    
})

const OwnerForm = mongoose.model('OwnerForm', OwnerFormSchema);

module.exports={OwnerForm}