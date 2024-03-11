const nodemailer=require('nodemailer');

const nodeConfig={
        service:"gmail",
        secure:false,
        auth:{
            user:'muraliundela29@gmail.com',
            pass:'mlgp kyvr sgqt xafv'
        }
}

const transpoter=nodemailer.createTransport(nodeConfig);

exports.Mail=async(req,res,next)=>{

    const {email,data}=req.body;
    console.log(req.body);
    const message={
        from:'muraliundela29@gmail.com', 
        to:email,
        subject:'From Undela_s Point',
        html:`<p>${data}</p><h1>This is your One-Time-Password${req.app.locals.OTP}</h1>`
    }

transpoter.sendMail(message).then((r)=>{

    res.status(200).send({status:true,otp:req.app.locals.OTP});
})
.catch((err)=>{
    console.log(err.message)
    res.status(200).send({status:false,Error:err});
})


   

}