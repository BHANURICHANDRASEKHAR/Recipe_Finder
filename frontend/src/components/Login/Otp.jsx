import React from 'react'
import Timer from './Timer';
import { getOTP } from './call';
export default function Otp({userdata,onchange,otpverication,setFlag,setOtp}) {
    function resentotp()
    {
        getOTP(userdata, setOtp, setFlag);
    }
    return (
       <div className='container'>
       <div className='row'>
       <div className='col mt-4 text-dark'>
           <h3>Enter Otp</h3>
           <p>Verification code has been sent to your email, {userdata.email}, please enter the same here to complete the signup. Valid for 10 minutes.</p>
           <InputFeild value={userdata.otp}  label='Confirm Otp' type='text' name='otp' onchangefunction={onchange}/> 
           <Button variant="danger" className='w-100' onClick={otpverication} >Proceed</Button>
       </div>
       
   </div>
   <div className='row mt-4'>
   <Timer resentotp={resentotp}/>
   </div>
       </div>
    )
}
