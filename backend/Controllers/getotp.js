const otp = require('otp-generator');

exports.getOTP=async(req,res,next)=>{
    try{
   const t=otp.generate(4, { lowerCaseAlphabets: false, upperCaseAlphabets: false, specialChars: false });
   
    req.app.locals.OTP=t;
    next();
    }catch(err){
        res.status(500).send({msg:"",Error:err.message});
    }

}