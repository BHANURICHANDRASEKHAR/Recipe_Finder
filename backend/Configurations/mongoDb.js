const mongoose = require('mongoose');   

const MongooDB=()=>{
    try{
       mongoose.connect('mongodb+srv://chandu:Chandu1148@cluster0.rqxa0a9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/test')
        .then(()=>{console.log("MongoDb connected")});
    
    }
    catch(err){
        console.log(err);
    }
}
module.exports = MongooDB;