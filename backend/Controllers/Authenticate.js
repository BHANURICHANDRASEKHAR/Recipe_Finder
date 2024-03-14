const users=require('../Models/users.js');
const jwt =require ('jsonwebtoken');


exports.Sign_up=async(req,res)=>{
    try{
        const {username,email,password}=req.body;
        console.log(req.body);
        const user=await users.findOne({email});
        if(user){
            res.send({status:false,msg:"user alredy existe"});
        }else{
        const r= await users.create({
            
            username,
            email,
            password  
            
        });
        res.status(200).send({status:true,data:r,msg:"Sign_up success"});
    }
    }
    catch(err){
        res.status(501).send({status:false,Error:err});
    }

}


exports.Sign_in=async(req,res)=>{
    try{
        const {email,password}=req.body;
        console.log(req.body);

        const user= await users.findOne({email});
      
        if(user){
         
            if(user.password!==password){
                res.status(201).send({status:false,msg:"Incorrect password"});
            }
            else{
 
                const payload={
                    user:{
                        id:user.id
                    }}
                const token= await jwt.sign(payload,"chandu",{expiresIn:"1000"});
                res.status(201).send({status:true,token:token,msg:"Login sucessfull"});
                }   
           
    
        }else{  
             res.status(200).send({status:false,msg:"User not exited"});

        }  
    }
    catch(err){
        res.send({Error:err.massege});
    }
}


exports.Auth=async(req,res)=>{
    try{
        const {token}=req.body;
        if(!token){
            res.status(200).send({status:false,msg:"Invalid token"});
        }else{
        const d=jwt.verify(token,"chandu");
        req.user=d.user;

        const user=await users.findOne({_id:d.user.id});
        res.send({status:true,msg:"User Varified"});
        
        }
    }
    catch(err){
        res.status(200).send({status:false,msg:"Token expaired",Error:err.message});

    }

}
