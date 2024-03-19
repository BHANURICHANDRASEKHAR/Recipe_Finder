const express= require('express');
const app= express();
const expressfile= require('express-fileupload');
const {firebase}=require('./Configurations/firebaseconnection.js');

//body pasrings 
app.use(express.json());
const cors=require('cors');

app.use(expressfile({
    limits: { fileSize: 50 * 1024 * 1024 },
  }));

app.use(cors(
    {
        origin:"*",
    }
));


 const MongooDB=require("./Configurations/mongoDb.js")
 MongooDB();
 firebase();

const router=require('./Routes/routes.js');
app.use('/v1',router);
app.get('/',(req,res)=>{
    res.send('Hello World');
});

app.listen(5000,()=>{console.log(`listening on port::${5000}`)});