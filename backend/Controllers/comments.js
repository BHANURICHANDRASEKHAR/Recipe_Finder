const Comments=require('../Models/comments.js');

exports.Add_comments=async(req,res)=>{
    try{

        const {post_id,comments,likes=0,rating}=req.body;
        const {UserId,username}=req.user;
        console.log(req.user)
            // const temp={likes:post.likes+likes}
           
            //   await Comments.updateOne({post_id},{ $push:{'comments':comments},$set:temp}).then((user)=>{
            //     if (user) {
            //             res.status(200).send({status:true,msg:'Commented  successfully:',data:user});
            //         } else {
            //          res.status(200).send({status:false,msg:'Some_thing Wrong',data:user});
                
            //         }
            //     });
            const e= await Comments.create({
                post_id,
                comments,
                likes,
                rating,
                UserId,
                username
            });
            console.log(e)
            res.status(200).send({status:true,msg:"Comment successfully Submited"});
        
       
    }
    catch(err){
        console.log(err.message)
        res.status(501).send({status:false,Error:err.message});
    }
    
}
async function getcomments(req,res)
{
  try{
    const {id}=req.params;
    console.log(id)
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
    console.log(err.message)
    res.status(501).send({status:false,Error:err.message});
  }
}
module.exports.getcomments=getcomments;