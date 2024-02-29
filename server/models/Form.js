const {  mongoose } = require("mongoose");

const formSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    mobile:{
        type:String,
    },
    gender:{
        type:String,
    },
   
    whatsappInfo:{
        type:Boolean,
        default:false
    },
    hostel:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hostel'
    },  
},
{
    timestamps:true
}
)

const Form = mongoose.model('Form', formSchema);

module.exports={Form}