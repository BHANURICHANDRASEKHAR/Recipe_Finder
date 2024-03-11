const mongoose=require('mongoose');
const contributes= new mongoose.Schema({

    email: {
        type: String,
        required : [true, "Please provide a unique email"],  
    },
    name:{
        type:String,
        required:true,

    },
    ingredients:[],
    making_process:[],
    img:{
        type:String,
        required:true,

    }
             
})
module.exports=mongoose.model("contributes",contributes);
