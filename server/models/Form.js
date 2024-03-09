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
        type: String,   
    }, 
},
{
    timestamps:true
}
)

const Form = mongoose.model('Form', formSchema);

module.exports={Form}