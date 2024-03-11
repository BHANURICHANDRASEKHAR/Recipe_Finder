const mongoose=require('mongoose');

const Comments= new mongoose.Schema({

        post_id:{
        type:String
        },
        comments:[{type:String}],
        likes:{type:Number,default:0},
        dislikes:{type:Number,default:0},

});
module.exports=mongoose.model("Comments",Comments);
