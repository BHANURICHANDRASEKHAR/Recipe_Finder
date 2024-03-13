const Comments=require('../Models/comments.js');

exports.Add_comments=async(req,res)=>{
    try{

        const {post_id,comments,likes=0,rating}=req.body;
    
        const post= await Comments.findOne({post_id});

        if(post){
        
            const temp={likes:post.likes+likes}
            console.log(temp);
              await Comments.updateOne({post_id},{ $push:{'comments':comments},$set:temp}).then((user)=>{
                if (user) {
                        res.status(200).send({status:true,msg:'Commented  successfully:',data:user});
                    } else {
                     res.status(200).send({status:false,msg:'Some_thing Wrong',data:user});
                
                    }
                });
        }
        else{
            const e= await Comments.create({
                post_id,
                comments,
                likes,
                rating
            });
            res.status(200).send({status:true,msg:"Comment successfully Submited"});

        }
        
    }
    catch(err){
        res.status(501).send({status:false,Error:err.message});
    }
    
}