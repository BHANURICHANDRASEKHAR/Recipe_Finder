
// import React, { useState } from 'react';
// import {imageupload} from './fetchfunctions'
// import { MdCloudUpload } from 'react-icons/md';
// import { Button, message, Upload } from 'antd';
// function ImgeUpload({contributedata,setcontributedata,setloading}) {
    
// const props = {
//   name: 'file',
//   action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
//   headers: {
//     authorization: 'authorization-text',
//   },
//   onChange(info) {
//     if (info.file.status !== 'uploading') {
//       console.log(info.file, info.fileList);
//     }
//     if (info.file.status === 'done') {
//       message.success(`${info.file.name} file uploaded successfully`);
//       const formData = new FormData();
//       formData.append('file', info.file); 
//       console.log(info.file);
//       imageupload(formData,contributedata,setcontributedata,setloading)      
   

//     } else if (info.file.status === 'error') {
//       message.error(`${info.file.name} file upload failed.`);
//     }
//   },
// };


//   return (
// <div className=''>
// <Upload {...props}>
// <Button icon={<MdCloudUpload />} >Click to Upload</Button>

// </Upload>

// </div>
//   );
// }

// export default ImgeUpload;

// // import React from 'react'

// // export default function ImgeUpload() {
// //   return (
// //     <div>
// //     <input ty
// //     </div>
// //   )
// // }



import React, { useState } from 'react';
import {imageupload} from './fetchfunctions'
const ImageUploadForm = ({contributedata,setcontributedata,setloading}) => {
    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
            
        console.log(e.target.files[0]);
        setImage(e.target.files[0]);
        console.log(image);
    };
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const formData = new FormData();
      formData.append('file', image);
    
      imageupload(formData,contributedata,setcontributedata,setloading)      

     
  };
  

    return (
        <form onSubmit={handleSubmit}>
            <input type="file" onChange={handleImageChange} />
            <button type="submit">Upload</button>
        </form>
    );
};

export default ImageUploadForm;
