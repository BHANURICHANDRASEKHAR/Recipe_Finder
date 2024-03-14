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


    const {email,name}=req.body;
    console.log(req.body);

    const info=`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome to RecipesShare!</title>
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; background-color: #d4fde8; padding: 20px;">
    
    <div style="max-width: 600px; margin: 0 auto; background: #f3f8f3; padding: 20px; border-radius: 5px;">
        <h2 style="color: #333;">Dear ${name},</h2>
        <h3 style="color: #333;">Welcome to RecipesShare! We're delighted to have you join our community of food enthusiasts and recipe aficionados.</h3>
        <h3 style="color: #333;">Here's your One-Time Password (OTP) to complete your registration and unlock all the features on our platform: <span style="font-size: 24px; color: #007bff;">${req.app.locals.OTP}</span></h3>
        <p style="color: #333;">Take a moment to explore our website, where you'll find a diverse array of recipes spanning various cuisines, dietary preferences, and cooking techniques. From quick and easy weeknight dinners to sumptuous desserts and everything in between, there's something to tantalize every taste bud.</p>
        <p style="color: #333;">We encourage you to dive into our vibrant community by sharing your favorite recipes, engaging with other members, and leaving feedback on recipes you've tried.</p>
        <p style="color: #333;">Thank you for choosing RecipesShare as your culinary companion. We can't wait to see the delicious creations you'll share!</p>
        <p style="color: #333;">Happy cooking!</p>
        <p style="color: #333;"><strong>Best regards,</strong><br>
        <strong>Undela Murali</strong><br>
        <strong>Junior BackEnd Developer/👨‍🎓</strong><br>
        <strong>RecipesShare Team</strong></p>
    </div>
    
    </body>
    </html>
    `

    const message={
        from:'muraliundela29@gmail.com', 
        to:email,
        subject:"Login  Mail",
        html:info
    }

 transpoter.sendMail(message).then((r)=>{

    res.status(200).send({status:true,otp:req.app.locals.OTP});
})
.catch((err)=>{
    console.log(err.message)
    res.status(200).send({status:false,Error:err.message});
})


   

}