const admin = require('firebase-admin');

exports.fileupload = async (req, res) => {
    try {
        const file = req.files.file;
        console.log(file);

        if (!file) {
            return res.status(400).send('No file uploaded.');
        }

        // Initialize Firebase Admin SDK
        
        const bucket = admin.storage().bucket();
        const filename = `User_Profiles/${Date.now()}_${file.name}`;
        const fileUpload = bucket.file(filename);

        // Uploading file to Cloud Storage
        const [fileUploadResponse] = await fileUpload.save(file.data, {
            metadata: {
                contentType: file.mimetype
            }
        });

        // Generating signed URL
        const downloadURL = await fileUpload.getSignedUrl({
            action: 'read',
            expires: '03-01-2025'
        });

        res.status(200).send({
            status: true,
            msg: 'File uploaded successfully.',
            data: downloadURL
        });
    } catch (error) {
        console.error('File upload error:', error.message);
        res.status(500).send({
            status: false,
            msg: 'File upload error.'
        });
    }
};
