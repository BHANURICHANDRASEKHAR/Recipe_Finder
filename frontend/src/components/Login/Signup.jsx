import React from 'react'
import InputFeild from './InputFeild'
import Button from 'react-bootstrap/Button';
import OTP from './Otp'
export default function SignupInputFeilds({userdata,submit,onchange,flag,otp,setFlag,setOtp,otpverication,isLoading}){
    return(
        <div className='container'>
            {
                flag ? 
                <OTP userdata={userdata} onchange={onchange}  setFlag={setFlag} setOtp={setOtp} otpverication={otpverication}/> :
                (
                    <div className='row m-4'>
                        <InputFeild value={userdata.name} label='Name' type='text' name='name' onchangefunction={onchange} />
                        <InputFeild value={userdata.email} label='Email' type='email' name='email' onchangefunction={onchange} /> 
                         <Forget userdata={userdata} onchange={onchange} />
                        <Button
                 variant="primary"
                 disabled={isLoading}
                onClick={!isLoading ? submit : null}
             >
             {isLoading ? 'Loading…' : 'Create a Account'}
          </Button>  
                    </div>
                )
            }
        </div>
    )
}
export const  Forget=({userdata,onchange})=>{
    return(
        <React.Fragment>
        <InputFeild value={userdata.password} label='Enter Password' type='password' name='password' onchangefunction={onchange} />
        <InputFeild value={userdata.confirmPassword} label='ConfirmPassword' type='text' name='confirmPassword' onchangefunction={onchange} /> 
        </React.Fragment>
    )
}