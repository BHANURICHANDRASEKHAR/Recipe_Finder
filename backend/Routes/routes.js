const express=require('express');
const router=express.Router();
const Authenticate=require('../Controllers/Authenticate.js');
const {Add_contributes}=require('../Controllers/contributes.js');
const {Update_user}=require('../Controllers/User_Update.js');
const {Mail}=require('../Controllers/Mail.js');
const {getOTP}=require('../Controllers/getotp.js');
const {Add_comments}=require('../Controllers/comments.js');
const data=require('../Controllers/send_data.js');

    

//get routes
//http://localhost:5000/v1/get/:type
router.get('/get/:type',data.send_data_type);
//http://localhost:5000/v1/get
router.get('/get',data.send_data);
//http://localhost:5000/v1/getId/:id

router.get('/getId/:id',data.find_by_Id);




//post routes
//http://localhost:5000/v1/sign_up
router.post('/sign_up',Authenticate.Sign_up);

//http://localhost:5000/v1/sign_up
router.post('/sign_in',Authenticate.Sign_in); 

//http://localhost:5000/v1/mail
router.post('/mail',getOTP,Mail);

//http://localhost:5000/v1/Verify
router.post('/Verify',Authenticate.Auth); 

//http://localhost:5000/v1/contributes
router.post('/contributes',Add_contributes);  

//http://localhost:5000/v1/comment
router.post('/comment',Add_comments);

//put routes

//http://localhost:5000/v1/update
router.put('/update/:id',Update_user);


module.exports=router