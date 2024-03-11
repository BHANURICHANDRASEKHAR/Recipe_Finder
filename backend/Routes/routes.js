const express=require('express');
const router=express.Router();
const Authenticate=require('../Controllers/Authenticate.js');
const {Add_contributes}=require('../Controllers/contributes.js');
const {Update_user}=require('../Controllers/User_Update.js');
const {Mail}=require('../Controllers/Mail.js');
const {getOTP}=require('../Controllers/getotp.js');
const {Add_comments}=require('../Controllers/comments.js');

const Recipies=require('../Models/recipes.js');

    
const users=require('../Models/users.js');

//get routes
router.get('/get',async(req, res)=>{res.json(await Recipies.find())})



//post routes
router.post('/sign_up',Authenticate.Sign_up);
router.post('/mail',getOTP,Mail);
router.post('/sign_in',Authenticate.Sign_in);  
router.post('/Verify',Authenticate.Auth); 
router.post('/contributes',Add_contributes);  
router.post('/comment',Add_comments);

//put routes
router.put('/update/:id',Update_user);


module.exports=router