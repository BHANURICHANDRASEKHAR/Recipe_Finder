const Recipies=require('../Models/recipes.js');

exports.send_data_type=async(req, res)=>{
    try{
        const type=req.params.type;
        
        data=await Recipies.find({type:type});
      
        res.status(200).send({size:data.length,data:data,status:true,msg:"Done"});

    }catch(err){
        res.status(501).send({status:false,Error:err.message});
    }
}


exports.send_data=async(req, res)=>{
    try{
 
        data=await Recipies.find();
        res.status(200).send({size:data.length,data:data,status:true,msg:"Done"});
    }catch(err){
        res.status(501).send({status:false,Error:err.message});
    }
}


exports.find_by_Id=async(req, res)=>{
    try{
        const id=req.params.id;
 
        data=await Recipies.find({_id:id});
        res.status(200).send({size:data.length,data:data,status:true,msg:"Done"});

    }catch(err){
        res.status(501).send({status:false,Error:err.message});
    }
}
