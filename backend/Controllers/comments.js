const Comments=require('../Models/comments.js');

exports.Add_comments=async(req,res)=>{
    try{

        const {post_id,comments,likes=0,rating}=req.body;
        const {UserId,username}=req.user;
     
           
            const e= await Comments.create({
                post_id,
                comments,
                likes,
                rating,
                UserId,
                username
            });
         
            res.status(200).send({status:true,msg:"Comment successfully Submited"});
        
       
    }
    catch(err){

        res.status(501).send({status:false,Error:err.message});
    }
    
}
async function getcomments(req,res)
{
  try{
    const {id}=req.params;
  
    const post= await Comments.find({post_id:id});
    if(post)
    {
     res.status(200).send({size:post.length,data:post,status:true,msg:"Done"});
 
    }
    else{
     res.status(200).send({size:0,data:post,status:false,msg:"Done"});
    }
  }
  catch(err)
  {

    res.status(501).send({status:false,Error:err.message});
  }
}
module.exports.getcomments=getcomments;
async function inclikes(req,res){
  const {UserId,post_id,likes}=req.body; 
             try{
              // const likesdata=await Comments.find({UserId,post_id})
              await Comments.updateOne({UserId,post_id},{ $set:{'likes':likes+1}}).then(async(user)=>{
                if (user) {
                  
                  const post= await Comments.find({post_id});
                  if(post)
                  {
                  
                   res.status(200).send({size:post.length,data:post,status:true,msg:"Done"});
               
                  }
                    } else {
                     res.status(200).send({status:false,msg:'Some_thing Wrong',data:user});
                
                    }
                });
             }
             catch(err){
               
                 res.status(201).send({status:false,Error:err.message});
             }
}
module.exports.inclikes=inclikes;
