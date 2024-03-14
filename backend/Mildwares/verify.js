const users=require('../Models/users.js');
exports.verify=async(req,res,next)=>{
    try{
        const{email}=req.body;
        console.log(email);
        const user=await users.findOne({email});
        if(user){
            
            next();
        }else{
            res.status(200).send({status:false,msg:'email not verified'});
        }

    }catch(err){
        resizeBy.status(200).send({status:false,msg:err.message});
    }

}