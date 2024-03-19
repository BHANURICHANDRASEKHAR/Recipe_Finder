// // import React from 'react'
// // import { Button, message, Upload } from 'antd';
// // import { MdCloudUpload } from 'react-icons/md';
// // export default function ImgeUpload() {
// //   return (
// //     <div><Upload>
// //     <Button icon={<MdCloudUpload />}>Click to Upload</Button>
// //   </Upload></div>
// //   )
// // }
import React, { useState } from 'react';

import { MdCloudUpload } from 'react-icons/md';
import { Button, message, Upload } from 'antd';
function ImgeUpload() {
    const [imgurl,setimgeurl]=useState(null)
const props = {
  name: 'file',
  action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
      setimgeurl(info.file.response.url)
      console.log(info.file.response.url);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};


  return (
<div className=''>
<Upload {...props}>
<Button icon={<MdCloudUpload />} >Click to Upload</Button>

</Upload>
{imgurl && <img src={imgurl} alt="Uploaded" style={{ maxWidth: '100%' }} />}
</div>
  );
}

export default ImgeUpload;
