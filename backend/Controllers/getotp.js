const otp = require('otp-generator');
const users=require('../Models/users.js');


exports.getOTP=async(req,res,next)=>{
    try{

        const{email}=req.body;
        const user=await users.findOne({email});
        if(user){
            
            res.status(200).send({status:false,msg:"User alredy exited"});
        }
        else{
    const t=otp.generate(4, { lowerCaseAlphabets: false, upperCaseAlphabets: false, specialChars: false });
    req.app.locals.OTP=t;
    next();
    }
    
    }catch(err){
        res.status(500).send({msg:"",Error:err.message});
    }

}