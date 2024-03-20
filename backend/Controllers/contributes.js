const Recipies = require('../Models/recipes')      
const {fileupload} =require('../Controllers/fileupload')

exports.Add_contributes=async(req,res)=>{
    try{
     
        const {name,ingredients,making_process,img}=req.body;
        const {UserId}=req.user;
        const r= await Recipies.create({
            UserId,
            name,
            img,
            ingredients,
            making_process,
            
        })
        res.send({status:true,msg:""});
    }
    catch(err){
        res.send({status:false,msg:err});
    }

}
exports.Get_contributes=async (req,res)=>{
   
    try{
        const {UserId}=req.user;
        
        const r=await Recipies.find({UserId});
        
        res.status(200).send({size:r.length,data:r,status:true,msg:"Done"});
    }
    catch(err){
        
        res.status(501).send({status:false,Error:err.message});
    }
}