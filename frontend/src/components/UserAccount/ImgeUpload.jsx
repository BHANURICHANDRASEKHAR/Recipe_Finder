
// import React, { useState } from 'react';

// import { MdCloudUpload } from 'react-icons/md';
// import { Button, message, Upload } from 'antd';
// function ImgeUpload({setcontributedata}) {
    
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
//       const formdata=new FormData()
//   //  console('file',info.file.originFileObj)
//       // formdata.append('file',info.file.originFileObj)

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
// {imgurl && <img src={imgurl} alt="Uploaded" style={{ maxWidth: '100%' }} />}
// </div>
//   );
// }

// export default ImgeUpload;

import React from 'react'

export default function ImgeUpload() {
  return (
    <div>ImgeUpload</div>
  )
}
