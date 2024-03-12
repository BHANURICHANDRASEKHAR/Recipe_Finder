const express= require('express');
const app= express();
//body pasrings 
app.use(express.json());
const cors=require('cors');

app.use(cors(
    {
        origin:"*",
    }
));


 const MongooDB=require("./Configurations/mongoDb.js")
 MongooDB();

const router=require('./Routes/routes.js');
app.use('/v1',router);

app.get('/',(req,res)=>{
    res.send('Hello World');
});


app.listen(5000,()=>{console.log(`listening on port::${5000}`)});