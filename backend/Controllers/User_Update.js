exports.Update_user=async(req,res)=>{

    try{

      
        const userId = req.params.id; 
        const new_data = req.body.new_data; 
       

      await users.updateOne( { _id:u._id },{ $push: new_data }).then((user)=>{
               
            if (user) {
                    res.status(200).send({status:true,msg:'User_details updated successfully:',data:user});
                } else {
                 res.status(200).send({status:false,msg:'User not found',data:user});
            
                }
            });

        }
    catch(err){
        res.status(501).send({status:false,msg:"Intenal error",Error:err.message});
    }

}