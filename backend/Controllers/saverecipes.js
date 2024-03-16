const SavedRecipies=require('../Models/saverecipes');

async function postsavedrecipes(req,res)
{
   
    try{
        const {post_id,img,type,Itemname}=req.body;
        const {UserId}=req.user
        const r=await SavedRecipies.create({
            post_id,img,type,Itemname,UserId
        });
        
        res.status(200).send({size:1,status:true,msg:"Saved successfully"});
    }
    catch(err){
        console.log(err.message)
        res.status(200).send({size:0,status:false,msg:"Done"});
    }
}
async function getsavedrecipes(req,res)
{
   
    try{
        const {post_id}=req.body;
        const {UserId}=req.user
        const r=await SavedRecipies.find({UserId})

        res.status(200).send({size:1,status:true,msg:"Saved successfully",data:r});
    }
    catch(err){
        console.log(err.message)
        res.status(200).send({size:0,status:false,msg:"Done"});
    }
}
module.exports.getsavedrecipes=getsavedrecipes;
module.exports.postsavedrecipes = postsavedrecipes;