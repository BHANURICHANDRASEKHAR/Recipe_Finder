const Recipies=require('../Models/recipes.js');

exports.send_data=async(req, res)=>{
    try{
        const type=req.params.type;
        console.log(type);
        data=await Recipies.find({type:type});
        res.status(200).send({data:data,status:true,msg:"Done"});

    }catch(err){
        res.status(501).send({status:false,Error:err.message});
    }
}