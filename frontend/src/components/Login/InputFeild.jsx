import React from 'react'

export default function InputFeild({label,type,onchangefunction,name,value}) {
  return (
    <div className="form-floating mb-3">
   <input type={type} className="form-control" id="floatingInput" onChange={onchangefunction} value={value} name={name} placeholder='enter'/>
   <label htmlFor="floatingInput">{label}</label>
</div>

  )
}
