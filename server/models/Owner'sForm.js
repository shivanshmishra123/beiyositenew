const {  mongoose } = require("mongoose");

const OwnerFormSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
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
    rooms:{
        type:Number,
        required: true,
    },
},
{
    timestamps:true
}
)

const OwnerForm = mongoose.model('OwnerForm', OwnerFormSchema);

module.exports={OwnerForm}