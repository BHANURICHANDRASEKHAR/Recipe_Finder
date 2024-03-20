const admin = require('firebase-admin');
const contributes = require('../Models/contributes');

exports.fileupload=async(req,res)=>{

    try{
        // const f=new FormData();
        //  f.append('file',req.body.img);
        
        const file=req.body.file;
        console.log(req.files);

  
        if (!file) {
          console.log('Please select')
            res.send('No file uploaded.');
        }

   
        const bucket = admin.storage().bucket();
        const filename = `${`contributes`}/${Date.now()}_${file.name}`;
        const fileUpload = bucket.file(filename);

        const downloadURL = await fileUpload.getSignedUrl({
          action: 'read',
          expires: '03-01-2025', 
      });

        const stream = fileUpload.createWriteStream({
          metadata: {
            contentType: file.mimetype
          }
        });
    
        stream.on('error', (err) => {
          console.error('File upload error:', err);
        res.send({status:false,msg:'File upload error.'});
        });
    
        const c=stream.on('finish', (e) => {
        req.imgurl=downloadURL,
     
        res.send({status:true,msg:'File upload error.',img:downloadURL});
       
        });
    
        stream.end(file.data);
      } 
      catch (error) 
      {
        console.log(error.message);
      }

}