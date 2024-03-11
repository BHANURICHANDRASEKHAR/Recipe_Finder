const mongoose=require('mongoose');
const users= new mongoose.Schema({

    username:{
        type:String,
        required:true,
        length:30,
    },
    email: {
        type: String,
        required : [true, "Please provide a unique email"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
    },
    user_data:{

        liked:[{type:String}],
    },
    contributes:[{type:Array}]

})
module.exports=mongoose.model("users",users);
