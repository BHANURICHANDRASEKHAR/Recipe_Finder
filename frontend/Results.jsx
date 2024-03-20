import React from 'react'
import { Result } from 'antd'
export default function Results({title,subTitle}) {
  return (
    <Result
    status="404"
    title={title}
    subTitle={subTitle}
    
  />
  )
}
