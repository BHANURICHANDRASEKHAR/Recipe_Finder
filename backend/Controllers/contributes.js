const contributes = require('../Models/contributes.js')      
        

exports.Add_contributes=async(req,res)=>{
    try{

        const {email,name,ingredients,making_process,img}=req.body;
        const r= await contributes.create({
            email,
            name,
            ingredients,
            making_process,
            img
        })
        res.send({status:true,msg:""});
    }
    catch(err){
        res.send({status:false,msg:err});
    }

}