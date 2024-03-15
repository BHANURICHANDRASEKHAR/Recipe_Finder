const users=require('../Models/users.js');
const jwt=require('jsonwebtoken')
exports.verify=async(req,res,next)=>{
    try{
        const {token}=req.body;
        if(!token){
            res.status(200).send({status:false,msg:"Invalid token"});
        }else{
        const d=jwt.verify(token,"chandu");
        console.log('dddd',d)
        req.user=d.user;
        next();
        }

    }catch(err){
        res.status(200).send({status:false,msg:err.message});
    }

}