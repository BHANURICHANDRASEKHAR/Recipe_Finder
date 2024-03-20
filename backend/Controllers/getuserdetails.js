const users=require('../Models/users.js');
async function getuserdetails(req, res)
{

  try{
    const {UserId}=req.user;
 
    const user=await users.find({_id:UserId});
    if(user){
        console.log(user)
        res.send({status:true,data:user});
    }
}
catch(err){
    res.status(501).send({status:false,msg:err.message});
}

}
module.exports.getuserdetails = getuserdetails