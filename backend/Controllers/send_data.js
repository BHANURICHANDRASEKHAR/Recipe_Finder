const Recipies=require('../Models/recipes.js');

exports.send_data_type=async(req, res)=>{
    try{
        const type=req.params.type;
 
        data=await Recipies.find({type:type});
<<<<<<< HEAD
        res.status(200).send({size:data.length,data:data,status:true,msg:"Done"});

    }catch(err){
        res.status(501).send({status:false,Error:err.message});
    }
}
exports.send_data=async(req, res)=>{
    try{
 
        data=await Recipies.find();
        res.status(200).send({size:data.length,data:data,status:true,msg:"Done"});
=======
        console.log(data);
        res.status(200).send({data:data,size:data.length,status:true,msg:"Done"});
>>>>>>> d21c15fe0302470515df632d0fc109cedb7caee7

    }catch(err){
        res.status(501).send({status:false,Error:err.message});
    }
}